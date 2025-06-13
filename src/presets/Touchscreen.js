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
};

/**
 * @description virtual touchscreen
 */
class Touchscreen extends Device {
	static EVENTS = EVENTS;

	constructor(name = 'node-virtual-touchscreen') {
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

		super(options, name, specs);
	}
}

export default Touchscreen;

