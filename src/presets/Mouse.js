import UInput from '../UInput.js';
import Device from './Device.js';

/* @typedef {import('./Device.js').IEvent} IEvent */

const T = UInput.Event.TYPES;
const { KEY, REL } = UInput.Event.EVENTS;

/**
 * @enum {IEvent}
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
}

class Mouse extends Device {
	constructor(name = 'node-virtual-mouse') {
		super(EVENTS, name);
	}

	static EVENTS = EVENTS;
}

export default Mouse;

