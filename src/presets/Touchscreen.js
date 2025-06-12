import UInput from '../UInput.js';
import Device from './Device.js';

/* @typedef {import('./Device.js').IEvent} IEvent */

const T = UInput.Event.TYPES;
const { KEY, ABS } = UInput.Event.EVENTS;

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
	BTN_TOOL_DOUBLETAP:
		[T.KEY, KEY.BTN_TOOL_DOUBLETAP],
	BTN_TOOL_TRIPLETAP:
		[T.KEY, KEY.BTN_TOOL_TRIPLETAP],
	BTN_TOOL_QUADTAP:
		[T.KEY, KEY.BTN_TOOL_QUADTAP],
	BTN_TOOL_QUINTTAP:
		[T.KEY, KEY.BTN_TOOL_QUINTTAP],
}

class Touchscreen extends Device {
	constructor(name = 'node-virtual-touchscreen') {
		const specs = {
			absmin: [],
			absmax: [],
		};

		specs.absmin[ABS.ABS_X] = 0;
		specs.absmax[ABS.ABS_X] = 960;
		specs.absmin[ABS.ABS_Y] = 0;
		specs.absmax[ABS.ABS_Y] = 720;

		super(EVENTS, name, specs);
	}

	static EVENTS = EVENTS;
}

export default Touchscreen;

