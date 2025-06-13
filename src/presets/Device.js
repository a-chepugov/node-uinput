import UInput from '../models/UInput.js';

/** @typedef {import('../constants/input-event-codes.js').TYPE} TYPE } */
/** @typedef {import('../constants/input-event-codes.js').CODE} CODE } */

/**
 * @typedef {import('../models/UInputDevice.js').UIDevSpecs} UIDevSpecs
 */

/** @typedef {[TYPE, CODE]} Event */

/** @typedef {['raw', number, number]} RawOptionTuple */
/** @typedef {['event-type', TYPE]} EventTypeOptionTuple */
/** @typedef {['event', TYPE, CODE]} EventOptionTuple */

/** @typedef {RawOptionTuple | EventTypeOptionTuple | EventOptionTuple} OptionTuple */

/**
 * @description virtual device builder
 */
class Device {
	/**
	 * @param {Array<[string, number, number] | [string, number]>} options
	 * @param {string} name
	 * @param {UIDevSpecs} [specs]
	 */
	constructor(options, name, specs) {
		const uinput = new UInput();
		this.uinput = uinput;

		this.#setup(options);

		uinput.device.register(name, specs);
		uinput.device.create();
	}

	/**
	 * @param {Event} event
	 * @param {number} value
	 */
	act = (event, value) => {
		return this.uinput.act(event[0], event[1], value);
	};

	/**
	 * @param {Array<[Event, number]>} list
	 */
	frame = (list) => {
		return this.uinput.frame(list.map(([event, data]) => [event[0], event[1], data]));
	};

	destructor() {
		this.uinput.device.destroy();
		return this.uinput.close();
	}

	/**
	 * @param {Array<[string, number, number] | [string, number]>} options
	 */
	#setup(options) {
		for (const [type, option, arg] of options) {

			switch (type) {
			case 'raw':
				/** @ts-ignore */
				this.uinput.control(option, arg);
				break;
			case 'event-type': {
				/** @ts-ignore */
				this.uinput.event.type(option);
				break;
			}
			case 'event': {
				/** @ts-ignore */
				this.uinput.event.event(option, arg);
				break;
			}

			default:
				throw new Error('invalid feature type ' + type);
			}
		}
	}

	/**
	 * @param {Record<string, Event>} events
	 * @return {Array<OptionTuple>}
	 */
	static eventsToOptions = (events) => {
		const eventsList = Object.values(events);

		const typeOpts = Array.from(eventsList
			.reduce((types, [type]) => {
				types.add(type);
				return types;
			}, new Set()),
		(type) => ['event-type', type]
		);

		const eventOpts = eventsList.map((event) => ['event', event[0], event[1]]);

		/** @ts-ignore */
		return typeOpts.concat(eventOpts);
	};
}

export default Device;

