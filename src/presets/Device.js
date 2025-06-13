import UInput from '../UInput.js';

/** @typedef {[UInput.Event.TYPES, number]} IEvent */

class Device {
	/**
	 * @param {} options
	 * @param {string} name
	 * @param {} specs
	 */
	constructor(options, name, specs) {
		const uinput = new UInput();
		this.uinput = uinput;

		this.#setup(options);

		uinput.device.register(UInput.Device.build(name, specs));
		uinput.device.create();
	}

	/**
	 * @param {IEvent} event
	 * @param {number} value
	 */
	act(event, value) {
		return this.uinput.act(event[0], event[1], value);
	}

	/**
	 * @param {Array<[IEvent, number]>} data
	 */
	frame(list) {
		return this.uinput.frame(list.map(([event, data]) => [event[0], event[1], data]));
	}

	destructor() {
		this.uinput.device.destroy();
		return this.uinput.close();
	}

	#setup(options) {
		for (const [type, option, arg] of options) {

			switch (type) {
				case 'raw':
					this.uinput.control(option, arg);
					break;
				case 'type': {
				 this.uinput.event.type(option);
				 break;
				}
				case 'event': {
					this.uinput.event.event(option[0], option[1]);
					break;
			 }

				default:
					throw new Error('invalid feature type ' + type);
			}
		}
	}

	static eventsToOptions = (events) => {
		const eventsList = Object.values(events);

		return Array.from(eventsList
			.reduce((types, [typeId]) => {
				types.add(typeId);
				return types;
			}, new Set()),
       (typeId) => ['type', typeId]
		)
			.concat(eventsList.map((event) => ['event', event]))
	}
}

export default Device;

