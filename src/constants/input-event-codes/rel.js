/** @namespace
 * Relative axes
 */

export const REL_X = 0x00;
export const REL_Y = 0x01;
export const REL_Z = 0x02;
export const REL_RX = 0x03;
export const REL_RY = 0x04;
export const REL_RZ = 0x05;
export const REL_HWHEEL = 0x06;
export const REL_DIAL = 0x07;
export const REL_WHEEL = 0x08;
export const REL_MISC = 0x09;
/*
 * 0x0a is reserved and should not be used in input drivers.
 * It was used by HID as REL_MISC+1 and userspace needs to detect if
 * the next REL_* event is correct or is just REL_MISC + n.
 * We define here REL_RESERVED so userspace can rely on it and detect
 * the situation described above.
 */
export const REL_RESERVED = 0x0a;
export const REL_WHEEL_HI_RES = 0x0b;
export const REL_HWHEEL_HI_RES = 0x0c;
export const REL_MAX = 0x0f;
export const REL_CNT = (REL_MAX+1);
