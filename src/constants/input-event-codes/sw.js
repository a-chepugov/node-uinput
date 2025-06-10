/** @namespace
 * Switch events
 */

export const SW_LID = 0x00  /* set = lid shut */;
export const SW_TABLET_MODE = 0x01  /* set = tablet mode */;
export const SW_HEADPHONE_INSERT = 0x02  /* set = inserted */;
export const SW_RFKILL_ALL = 0x03  /* rfkill master switch, type "any";
					 set = radio enabled */
export const SW_RADIO = SW_RFKILL_ALL	/* deprecated */;
export const SW_MICROPHONE_INSERT = 0x04  /* set = inserted */;
export const SW_DOCK = 0x05  /* set = plugged into dock */;
export const SW_LINEOUT_INSERT = 0x06  /* set = inserted */;
export const SW_JACK_PHYSICAL_INSERT = 0x07  /* set = mechanical switch set */;
export const SW_VIDEOOUT_INSERT = 0x08  /* set = inserted */;
export const SW_CAMERA_LENS_COVER = 0x09  /* set = lens covered */;
export const SW_KEYPAD_SLIDE = 0x0a  /* set = keypad slide out */;
export const SW_FRONT_PROXIMITY = 0x0b  /* set = front proximity sensor active */;
export const SW_ROTATE_LOCK = 0x0c  /* set = rotate locked/disabled */;
export const SW_LINEIN_INSERT = 0x0d  /* set = inserted */;
export const SW_MUTE_DEVICE = 0x0e  /* set = device disabled */;
export const SW_PEN_INSERTED = 0x0f  /* set = pen inserted */;
export const SW_MACHINE_COVER = 0x10  /* set = cover closed */;
export const SW_MAX = 0x10;
export const SW_CNT = (SW_MAX+1);

