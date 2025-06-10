/**
 * /include/uapi/linux/uinput.h
 */

/* Set absolute axis information for the device to setup */
export const UI_SET_EVBIT = 0x40045564;
export const UI_SET_KEYBIT = 0x40045565;
export const UI_SET_RELBIT = 0x40045566;
export const UI_SET_ABSBIT = 0x40045567;
export const UI_SET_MSCBIT = 0x40045568;
export const UI_SET_LEDBIT = 0x40045569;
export const UI_SET_SNDBIT = 0x4004556a;
export const UI_SET_FFBIT = 0x4004556b;
export const UI_SET_PHYS = 0x8008556c;
export const UI_SET_SWBIT = 0x4004556d;
export const UI_SET_PROPBIT = 0x4004556e;


/* ioctl */
export const UI_DEV_CREATE = 0x5501;
export const UI_DEV_DESTROY = 0x5502;

