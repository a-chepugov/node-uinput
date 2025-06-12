import UInput from '../UInput.js';
import Device from './Device.js';

/* @typedef {import('./Device.js').IEvent} IEvent */

const T = UInput.Event.TYPES;
const { KEY, ABS, MSC } = UInput.Event.EVENTS;

/**
 * @enum {IEvent}
 */
const EVENTS = {
	BTN_TOUCH:
		[T.KEY, KEY.BTN_TOUCH],

	BTN_TOOL_PEN:
		[T.KEY, KEY.BTN_TOOL_PEN],
	BTN_TOOL_RUBBER:
		[T.KEY, KEY.BTN_TOOL_RUBBER],
	BTN_TOOL_BRUSH:
		[T.KEY, KEY.BTN_TOOL_BRUSH],
	BTN_TOOL_PENCIL:
		[T.KEY, KEY.BTN_TOOL_PENCIL],
	BTN_TOOL_AIRBRUSH:
		[T.KEY, KEY.BTN_TOOL_AIRBRUSH],
	BTN_TOOL_FINGER:
		[T.KEY, KEY.BTN_TOOL_FINGER],
	BTN_TOOL_MOUSE:
		[T.KEY, KEY.BTN_TOOL_MOUSE],
	BTN_TOOL_LENS:
		[T.KEY, KEY.BTN_TOOL_LENS],
	BTN_STYLUS:
		[T.KEY, KEY.BTN_STYLUS],
	BTN_STYLUS2:
		[T.KEY, KEY.BTN_STYLUS2],
	BTN_STYLUS3:
		[T.KEY, KEY.BTN_STYLUS3],

	ABS_X:
		[T.ABS,	ABS.ABS_X],
	ABS_Y:
		[T.ABS,	ABS.ABS_Y],

	ABS_PRESSURE:
		[T.ABS,	ABS.ABS_PRESSURE],

	ABS_TILT_X:
		[T.ABS,	ABS.ABS_TILT_X],
	ABS_TILT_Y:
		[T.ABS,	ABS.ABS_TILT_Y],
}

class Graphic extends Device {
	constructor(name = 'node-virtual-graphic-tablet') {
		const specs = {
			absmin: [],
			absmax: [],
		};

		specs.absmin[ABS.ABS_X] = 0;
		specs.absmax[ABS.ABS_X] = 960;
		specs.absmin[ABS.ABS_Y] = 0;
		specs.absmax[ABS.ABS_Y] = 720;

		specs.absmin[ABS.ABS_PRESSURE] = 0;
		specs.absmax[ABS.ABS_PRESSURE] = 255;

		specs.absmin[ABS.ABS_TILT_X] = -127;
		specs.absmax[ABS.ABS_TILT_X] = 127;
		specs.absmin[ABS.ABS_TILT_Y] = -127;
		specs.absmax[ABS.ABS_TILT_Y] = 127;

		super(EVENTS, name, specs);
	}

	static EVENTS = EVENTS;
}

export default Graphic;

