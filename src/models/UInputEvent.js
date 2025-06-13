import ref from 'ref-napi';
import Struct from 'ref-struct-napi';

import libc from '../lib/libc.js';

import * as UINPUT from '../constants/uinput.js';
import * as INPUT_EVENT_CODES from '../constants/input-event-codes.js';

/** @typedef {import('../constants/input-event-codes.js').TYPE} TYPE } */
/** @typedef {import('../constants/input-event-codes.js').CODE} CODE } */

//-----------------------------------------------

const int32 = ref.types.int32;
const uint16 = ref.types.uint16;
const long = ref.types.long;

const TimeValStruct = Struct({
	tv_sec: long,
	tv_usec: long,
});

const InputEventStruct = Struct({
	time: TimeValStruct,
	type: uint16,
	code: uint16,
	value: int32,
});

//-----------------------------------------------

/**
 * @enum {TYPE}
 */
const TYPES = {
	SYN: INPUT_EVENT_CODES.EV.EV_SYN,
	KEY: INPUT_EVENT_CODES.EV.EV_KEY,
	REL: INPUT_EVENT_CODES.EV.EV_REL,
	ABS: INPUT_EVENT_CODES.EV.EV_ABS,
	MSC: INPUT_EVENT_CODES.EV.EV_MSC,
	LED: INPUT_EVENT_CODES.EV.EV_LED,
	SND: INPUT_EVENT_CODES.EV.EV_SND,
	SW : INPUT_EVENT_CODES.EV.EV_SW,
	REP: INPUT_EVENT_CODES.EV.EV_REP,
};

/**
 * @enum {Record<string, CODE>}
 */
const CODES = {
	SYN: INPUT_EVENT_CODES.SYN,
	KEY: INPUT_EVENT_CODES.KEY,
	REL: INPUT_EVENT_CODES.REL,
	ABS: INPUT_EVENT_CODES.ABS,
	MSC: INPUT_EVENT_CODES.MSC,
	LED: INPUT_EVENT_CODES.LED,
	SND: INPUT_EVENT_CODES.SND,
	SW : INPUT_EVENT_CODES.SW,
	REP: INPUT_EVENT_CODES.REP,
};

/**
 * @enum {number}
 */
const UI_SET_BITS = {
	[TYPES.KEY]: UINPUT.UI_SET_KEYBIT,
	[TYPES.KEY]: UINPUT.UI_SET_KEYBIT,
	[TYPES.REL]: UINPUT.UI_SET_RELBIT,
	[TYPES.ABS]: UINPUT.UI_SET_ABSBIT,
	[TYPES.MSC]: UINPUT.UI_SET_MSCBIT,
	[TYPES.LED]: UINPUT.UI_SET_LEDBIT,
	[TYPES.SND]: UINPUT.UI_SET_SNDBIT,
	[TYPES.SW ]: UINPUT.UI_SET_SWBIT,
};

class UInputEvent {
	/** @param {number} fd */
	constructor(fd) {
		this.fd = fd;
	}

	/**
	 * @param {TYPES} type
	 */
	type(type) {
		if(!(type in UI_SET_BITS)) {
			throw new Error('unknown type' + type);
		}

		return libc.ioctl(this.fd, UINPUT.UI_SET_EVBIT, type);
	}

	/**
	 * @param {TYPES} type
	 * @param {CODE} code
	 */
	code(type, code) {
		if (!(type in UI_SET_BITS)) {
			throw new Error('unknown type ' + type);
		}

		const typeSetBit = UI_SET_BITS[type];
		return libc.ioctl(this.fd, typeSetBit, code);
	}

	/**
	 * @param {TYPES} type
	 * @param {CODE} code
	 * @param {number} value
	 */
	emit = (type, code, value) => {
		const ev = UInputEvent.build(type, code, value);
		return libc.write(this.fd, ev.ref(), InputEventStruct.size);
	}

	/**
	 * @param {TYPES} type
	 * @param {CODE} code
	 * @param {number} value
	 */
	static build(type, code, value) {
		return new InputEventStruct({
			time: new TimeValStruct({ tv_sec: 0, tv_usec: 0 }),
			type,
			code,
			value,
		});
	}

	static TYPES = TYPES;
	static CODES = CODES;
}

export default UInputEvent;

