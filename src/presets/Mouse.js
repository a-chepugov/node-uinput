import UInput from '../models/UInput.js';
import Device from './Device.js';

/** @typedef {import('./Device.js').Event} Event */

const T = UInput.Event.TYPES;
const { KEY, REL } = UInput.Event.CODES;

/**
 * @type {Record<string, Event>}
 */
const EVENTS = {
	BTN_LEFT:
		[T.KEY,	KEY.BTN_LEFT],
	BTN_RIGHT:
		[T.KEY,	KEY.BTN_RIGHT],
	BTN_MIDDLE:
		[T.KEY,	KEY.BTN_MIDDLE],
	BTN_SIDE:
		[T.KEY,	KEY.BTN_SIDE],
	BTN_EXTRA:
		[T.KEY,	KEY.BTN_EXTRA],
	BTN_FORWARD:
		[T.KEY,	KEY.BTN_FORWARD],
	BTN_BACK:
		[T.KEY,	KEY.BTN_BACK],

	REL_X:
		[T.REL,	REL.REL_X],
	REL_Y:
		[T.REL,	REL.REL_Y],
	REL_WHEEL:
		[T.REL, REL.REL_WHEEL],
	REL_HWHEEL:
		[T.REL, REL.REL_HWHEEL],
};

/**
 * @description virtual mouse
 */
class Mouse extends Device {
	static EVENTS = EVENTS;

	constructor(name = 'node-virtual-mouse') {
		const options = Device.eventsToOptions(EVENTS);
		super(options, name);
	}
}

export default Mouse;

