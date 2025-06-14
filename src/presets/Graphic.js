import UInput from '../models/UInput.js';
import Device from './Device.js';

/** @typedef {import('../models/UInputDevice.js').UIDevSpecs} UIDevSpecs */

/** @typedef {import('./Device.js').Event} Event */

const T = UInput.Event.TYPES;
const { KEY, ABS } = UInput.Event.CODES;

/**
 * @type {Record<string, Event>}
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
};

/**
 * @description virtual graphic tablet
 */
class Graphic extends Device {
	static EVENTS = EVENTS;

	constructor(name = 'node-virtual-graphic-tablet') {
		const options = Device.eventsToOptions(EVENTS)
			.concat([
				['raw', UInput.UINPUT.UI_SET_PROPBIT, UInput.INPUT_EVENT_CODES.PROP.INPUT_PROP_DIRECT],
			]);

		/** @type {UIDevSpecs} */
		const specs = {};
		specs.absmin = [];
		specs.absmax = [];

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

		super(options, name, specs);
	}
}

export default Graphic;

