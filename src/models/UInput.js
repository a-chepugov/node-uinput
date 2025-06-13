import libc from '../lib/libc.js';
import UInputEvent from './UInputEvent.js';
import UInputDevice from './UInputDevice.js';

import * as UINPUT from '../constants/uinput.js';
import * as INPUT_EVENT_CODES from '../constants/input-event-codes.js';

/** @typedef {import('../constants/input-event-codes.js').TYPE } TYPE } */
/** @typedef {import('../constants/input-event-codes.js').CODE } CODE } */

const UINPUT_PATH = '/dev/uinput';
const O_WRONLY = 0x01;
const O_NONBLOCK = 0x800;

class UInput {
	constructor(path = UINPUT_PATH, flags = O_WRONLY | O_NONBLOCK) {
		this.fd = libc.open(path, flags);
		if (this.fd < 0) throw new Error(path + ' - no access or root permissions available');

		this.event = new UInputEvent(this.fd);
		this.device = new UInputDevice(this.fd);
	}

	close() {
		return libc.close(this.fd);
	}

	/**
	 * @param {number} req
	 * @param {number} arg
	 */
	control(req, arg) {
		return libc.ioctl(this.fd, req, arg);
	}

	/**
	 * @param {number} ref
	 * @param {number} size
	 */
	write(ref, size) {
		return libc.write(this.fd, ref, size);
	}

	/**
	 * @param {TYPE} type
	 * @param {CODE} code
	 * @param {number} value
	 */
	add = (type, code, value) => {
		/** @ts-ignore */
		return this.event.emit(type, code, value);
	}

	sync = () => {
		return this.event.emit(UInputEvent.TYPES.SYN, UInputEvent.CODES.SYN.SYN_REPORT, 0);
	}

	/**
	 * @param {TYPE} type
	 * @param {CODE} code
	 * @param {number} value
	 */
	act = (type, code, value) => {
		this.add(type, code, value);
		return this.sync();
	}

	/**
	 * @param {Array<[TYPE, CODE, number]>} list
	 */
	frame = (list) => {
		for (const item of list) {
			this.add(item[0], item[1], item[2])
		}
		return this.sync();
	}

	static Device = UInputDevice;
	static Event = UInputEvent;

	static UINPUT = UINPUT;
	static INPUT_EVENT_CODES = INPUT_EVENT_CODES;
}

export default UInput;

