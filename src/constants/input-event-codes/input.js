/** @namespace
 * Device properties and quirks
 */

export const INPUT_PROP_POINTER = 0x00	/* needs a pointer */;
export const INPUT_PROP_DIRECT = 0x01	/* direct input devices */;
export const INPUT_PROP_BUTTONPAD = 0x02	/* has button(s) under pad */;
export const INPUT_PROP_SEMI_MT = 0x03	/* touch rectangle only */;
export const INPUT_PROP_TOPBUTTONPAD = 0x04	/* softbuttons at top of pad */;
export const INPUT_PROP_POINTING_STICK = 0x05	/* is a pointing stick */;
export const INPUT_PROP_ACCELEROMETER = 0x06	/* has accelerometer */;

export const INPUT_PROP_MAX = 0x1f;
export const INPUT_PROP_CNT = (INPUT_PROP_MAX + 1);

