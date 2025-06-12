import ref from 'ref-napi';
import Struct from 'ref-struct-napi';

import libc from './lib/libc.js';

import * as UINPUT from './constants/uinput.js';
import * as INPUT_EVENT_CODES from './constants/input-event-codes.js';

// Типы
const int32 = ref.types.int32;
const uint16 = ref.types.uint16;
const long = ref.types.long;

// Массивы
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

/**
 * @enum {number}
 */
const UI_SET_BITS = {
	KEY: UINPUT.UI_SET_KEYBIT,
	KEY: UINPUT.UI_SET_KEYBIT,
	REL: UINPUT.UI_SET_RELBIT,
	ABS: UINPUT.UI_SET_ABSBIT,
	MSC: UINPUT.UI_SET_MSCBIT,
	LED: UINPUT.UI_SET_LEDBIT,
	SND: UINPUT.UI_SET_SNDBIT,
	SW : UINPUT.UI_SET_SWBIT,
	PROP:UINPUT.UI_SET_PROPBIT,
};

/**
 * @enum {number}
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
};

const TYPE_IDS = Object.fromEntries(Object
	.entries(TYPES)
	.map(([k, v]) => [v, k]));

/**
 * @enum {number}
 */
const EVENTS = {
	SYN: INPUT_EVENT_CODES.SYN,
	KEY: INPUT_EVENT_CODES.KEY,
	REL: INPUT_EVENT_CODES.REL,
	ABS: INPUT_EVENT_CODES.ABS,
	MSC: INPUT_EVENT_CODES.MSC,
	LED: INPUT_EVENT_CODES.LED,
	SND: INPUT_EVENT_CODES.SND,
	SW : INPUT_EVENT_CODES.SW,
	PROP:INPUT_EVENT_CODES.PROP,
};


class UInputEvent {
	constructor(fd) {
		this.fd = fd;
	}

	/**
	 * @param {TYPES} typeId
	 */
	type(typeId) {
		if(!typeId in TYPE_IDS) {
			throw new Error('unknown type id ' + typeId);
		}

		return libc.ioctl(this.fd, UINPUT.UI_SET_EVBIT, typeId);
	}

	/**
	 * @param {TYPES} typeId
	 * @param {EVENTS} eventId
	 */
	event(typeId, eventId) {
		if(!typeId in TYPE_IDS) {
			throw new Error('unknown type id ' + typeId);
		}
		const typeName = TYPE_IDS[typeId];

		if (!typeName in UI_SET_BITS) {
			throw new Error('unknown type name ' + typeName);
		}

		const typeSetBit = UI_SET_BITS[typeName];
		return libc.ioctl(this.fd, typeSetBit, eventId);
	}

	/**
	 * @param {TYPES} typeId
	 * @param {EVENTS} eventId
	 * @param {number} value
	 */
	emit(typeId, eventId, value) {
		const ev = UInputEvent.build(typeId, eventId, value);
		return libc.write(this.fd, ev.ref(), InputEventStruct.size);
	}

	/**
	 * @param {TYPES} typeId
	 * @param {EVENTS} eventId
	 * @param {number} value
	 */
	static build(typeId, eventId, value) {
		return new InputEventStruct({
			time: new TimeValStruct({ tv_sec: 0, tv_usec: 0 }),
			type: typeId,
			code: eventId,
			value,
		});
	}

	static TYPES = TYPES;
	static EVENTS = EVENTS;
	static UI_SET_BITS = UI_SET_BITS;
}

export default UInputEvent;
