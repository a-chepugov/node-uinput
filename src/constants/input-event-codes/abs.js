/** @namespace
 * Absolute axes
 */

export const ABS_X = 0x00;
export const ABS_Y = 0x01;
export const ABS_Z = 0x02;
export const ABS_RX = 0x03;
export const ABS_RY = 0x04;
export const ABS_RZ = 0x05;
export const ABS_THROTTLE = 0x06;
export const ABS_RUDDER = 0x07;
export const ABS_WHEEL = 0x08;
export const ABS_GAS = 0x09;
export const ABS_BRAKE = 0x0a;
export const ABS_HAT0X = 0x10;
export const ABS_HAT0Y = 0x11;
export const ABS_HAT1X = 0x12;
export const ABS_HAT1Y = 0x13;
export const ABS_HAT2X = 0x14;
export const ABS_HAT2Y = 0x15;
export const ABS_HAT3X = 0x16;
export const ABS_HAT3Y = 0x17;
export const ABS_PRESSURE = 0x18;
export const ABS_DISTANCE = 0x19;
export const ABS_TILT_X = 0x1a;
export const ABS_TILT_Y = 0x1b;
export const ABS_TOOL_WIDTH = 0x1c;

export const ABS_VOLUME = 0x20;
export const ABS_PROFILE = 0x21;

export const ABS_MISC = 0x28;

/*
 * 0x2e is reserved and should not be used in input drivers.
 * It was used by HID as ABS_MISC+6 and userspace needs to detect if
 * the next ABS_* event is correct or is just ABS_MISC + n.
 * We define here ABS_RESERVED so userspace can rely on it and detect
 * the situation described above.
 */
export const ABS_RESERVED = 0x2e;

export const ABS_MT_SLOT = 0x2f	/* MT slot being modified */;
export const ABS_MT_TOUCH_MAJOR = 0x30	/* Major axis of touching ellipse */;
export const ABS_MT_TOUCH_MINOR = 0x31	/* Minor axis (omit if circular) */;
export const ABS_MT_WIDTH_MAJOR = 0x32	/* Major axis of approaching ellipse */;
export const ABS_MT_WIDTH_MINOR = 0x33	/* Minor axis (omit if circular) */;
export const ABS_MT_ORIENTATION = 0x34	/* Ellipse orientation */;
export const ABS_MT_POSITION_X = 0x35	/* Center X touch position */;
export const ABS_MT_POSITION_Y = 0x36	/* Center Y touch position */;
export const ABS_MT_TOOL_TYPE = 0x37	/* Type of touching device */;
export const ABS_MT_BLOB_ID = 0x38	/* Group a set of packets as a blob */;
export const ABS_MT_TRACKING_ID = 0x39	/* Unique ID of initiated contact */;
export const ABS_MT_PRESSURE = 0x3a	/* Pressure on contact area */;
export const ABS_MT_DISTANCE = 0x3b	/* Contact hover distance */;
export const ABS_MT_TOOL_X = 0x3c	/* Center X tool position */;
export const ABS_MT_TOOL_Y = 0x3d	/* Center Y tool position */;


export const ABS_MAX = 0x3f;
export const ABS_CNT = (ABS_MAX+1);

