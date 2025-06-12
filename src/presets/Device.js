import UInput from '../UInput.js';

/** @typedef {[UInput.Event.TYPES, number]} IEvent */

class Device {
	/**
	 * @param {{ [key: string]: IEvent }} events
	 * @param {string} name
	 * @param {string} name
	 */
	constructor(events, name, specs) {
		const uinput = new UInput();

		Object
			.values(events)
			.map(([typeId, eventId]) => {
				uinput.Event.type(typeId);
				uinput.Event.event(typeId, eventId);
			})

		uinput.Device.register(UInput.Device.build(
			name,
			specs,
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

