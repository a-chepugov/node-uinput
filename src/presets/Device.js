import UInput from '../UInput.js';

/** @typedef {[UInput.Event.TYPES, number]} IEvent */

class Device {
	/**
	 * @param {string} name
	 * @param {{ [key: string]: IEvent }} events
	 */
	constructor(name, events, ) {

		console.log(`DBG:Device.js:12=========>`);
		console.dir(arguments, { color: true, showHidden: false, depth: null });
		console.log(`DBG:Device.js:14=========>`);

		const uinput = new UInput();

		Object
			.values(events)
			.map(([typeId, eventId]) => {
				uinput.Event.type(typeId);
				uinput.Event.event(typeId, eventId);
			})

		uinput.Device.register(UInput.Device.build(
			name,
			undefined,


		));
		uinput.Device.create();
		this.uinput = uinput;
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
	frame(data) {
		return this.uinput.frame(data.map(([event, value]) => [event[0], event[1], value]));
	}

	destructor() {
		this.uinput.Device.destroy();
		return this.uinput.close();
	}
}

export default Device;

