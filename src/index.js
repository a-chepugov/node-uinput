export { default as UInput } from './models/UInput.js';

export { Device } from './presets/index.js';

import * as presets from './presets/index.js';

export default {
	Keyboard: presets.Keyboard,
	Mouse: presets.Mouse,
	Media: presets.Media,
	Touchscreen: presets.Touchscreen,
	Graphic: presets.Graphic,
}
