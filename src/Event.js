import ref from 'ref-napi';
import Struct from 'ref-struct-napi';
import libc from './lib/libc.js';
import * as UI from './constants/uinput.js';
import * as EVENT_CODES from './constants/input-event-codes.js';

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

const UI_SET_BITS = {
  key: UI.UI_SET_KEYBIT,
	rel: UI.UI_SET_RELBIT,
  abs: UI.UI_SET_ABSBIT,
  msc: UI.UI_SET_MSCBIT,
  led: UI.UI_SET_LEDBIT,
  snd: UI.UI_SET_SNDBIT,
  sw : UI.UI_SET_SWBIT,
};

const TYPES = {
  key: EVENT_CODES.EV.EV_KEY,
	rel: EVENT_CODES.EV.EV_REL,
  abs: EVENT_CODES.EV.EV_ABS,
  msc: EVENT_CODES.EV.EV_MSC,
  led: EVENT_CODES.EV.EV_LED,
  snd: EVENT_CODES.EV.EV_SND,
  sw : EVENT_CODES.EV.EV_SW,
};

const TYPE_IDS = Object.fromEntries(Object
  .entries(TYPES)
  .map(([k, v]) => [v, k]));

const EVENTS = {
  syn: EVENT_CODES.SYN,
  key: EVENT_CODES.KEY,
	rel: EVENT_CODES.REL,
  abs: EVENT_CODES.ABS,
  msc: EVENT_CODES.MSC,
  led: EVENT_CODES.LED,
  snd: EVENT_CODES.SND,
  sw : EVENT_CODES.SW,
};

class UInputEvent {
  constructor(fd) {
    this.fd = fd;
  }

  type(typeId) {
    return libc.ioctl(this.fd, UI.UI_SET_EVBIT, typeId);
  }

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

  emit(typeId, eventId, value) {
    const ev = UInputEvent.build(typeId, eventId, value);
		return libc.write(this.fd, ev.ref(), InputEventStruct.size);
	}

	static build(type, code, value) {
		return new InputEventStruct({
			time: new TimeValStruct({ tv_sec: 0, tv_usec: 0 }),
			type,
			code,
			value,
		});
	}

  static TYPES = TYPES;
  static EVENTS = EVENTS;
  static UI_SET_BITS = UI_SET_BITS;
}

export default UInputEvent;
