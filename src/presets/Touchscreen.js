import UInput from '../UInput.js';
import Device from './Device.js';

/* @typedef {import('./Device.js').IEvent} IEvent */

const T = UInput.Event.TYPES;
const { KEY, ABS, REL } = UInput.Event.EVENTS;













/**
 * @enum {IEvent}
 */
const EVENTS = {
	ABS_X:
		[T.ABS,	ABS.ABS_X],
	ABS_Y:
		[T.ABS,	ABS.ABS_Y],

	BTN_TOUCH:
		[T.KEY, KEY.BTN_TOUCH],
//	BTN_TOOL_FINGER:
//		[T.KEY, KEY.BTN_TOOL_FINGER],
//	BTN_TOOL_DOUBLETAP:
//		[T.KEY, KEY.BTN_TOOL_DOUBLETAP],
//	BTN_TOOL_TRIPLETAP:
//		[T.KEY, KEY.BTN_TOOL_TRIPLETAP],
//	BTN_TOOL_QUADTAP:
//		[T.KEY, KEY.BTN_TOOL_QUADTAP],
//	BTN_TOOL_QUINTTAP:
//		[T.KEY, KEY.BTN_TOOL_QUINTTAP],
//	BTN_TOOL_PEN:
//		[T.KEY, KEY.BTN_TOOL_PEN],

//	BTN_LEFT:
//		[T.KEY,	KEY.BTN_LEFT],
//	BTN_RIGHT:
//		[T.KEY,	KEY.BTN_RIGHT],
//	BTN_MIDDLE:
//		[T.KEY,	KEY.BTN_MIDDLE],
//	BTN_SIDE:
//		[T.KEY,	KEY.BTN_SIDE],
//	BTN_EXTRA:
//		[T.KEY,	KEY.BTN_EXTRA],
//	BTN_FORWARD:
//		[T.KEY,	KEY.BTN_FORWARD],
//	BTN_BACK:
//		[T.KEY,	KEY.BTN_BACK],
//
//	REL_X:
//		[T.REL,	REL.REL_X],
//	REL_Y:
//		[T.REL,	REL.REL_Y],
	REL_WHEEL:
		[T.REL, REL.REL_WHEEL],
	REL_HWHEEL:
		[T.REL, REL.REL_HWHEEL],
}

class Touchscreen extends Device {
	constructor(name = 'virtual-touchscreen') {
		super(name, EVENTS);

		this.uinput.config(UInput.Event.UI_SET_BITS.PROP, UInput.Event.EVENTS.PROP.INPUT_PROP_DIRECT);
//		this.uinput.config(UInput.Event.UI_SET_BITS.PROP, UInput.Event.EVENTS.PROP.INPUT_PROP_BUTTONPAD);

	}

	static EVENTS = EVENTS;
}

export default Touchscreen;

