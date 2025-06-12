import libc from './lib/libc.js';

import UInputEvent from './UInputEvent.js';
import UInputDevice from './UInputDevice.js';

const UINPUT_PATH = '/dev/uinput';
const O_WRONLY = 0x01;
const O_NONBLOCK = 0x800;

class UInput {
	constructor(path = UINPUT_PATH, flags = O_WRONLY | O_NONBLOCK) {
		this.fd = libc.open(path, flags);
		if (this.fd < 0) throw new Error(path + ' - no access or root permissions available');

		this.Device = new UInputDevice(this.fd);
		this.Event = new UInputEvent(this.fd);
	}

	close() {
		return libc.close(this.fd);
	}

	config(req, arg) {
		return libc.ioctl(this.fd, req, arg);
	}

	write(ref, size) {
		return libc.write(this.fd, ref, size);
	}

	add(typeId, eventId, value) {
		return this.Event.emit(typeId, eventId, value);
	}

	sync() {
		return this.Event.emit(UInputEvent.TYPES.SYN, UInputEvent.EVENTS.SYN.SYN_REPORT, 0);
	}

	act(typeId, eventId, value) {
		const ra = this.add(typeId, eventId, value);
		const rs = this.sync();
		return [ra, rs];
	}

	frame(batch) {
		const ra = [];
		for (const item of batch) {
			ra.push(
				this.add(item[0],item[1], item[2])
			);
		}
		const rs = this.sync();
		return [ra, rs];
	}

	static Device = UInputDevice;
	static Event = UInputEvent;
}

export default UInput;
