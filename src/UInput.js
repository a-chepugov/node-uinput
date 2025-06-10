import libc from './lib/libc.js';

import UInputEvent from './Event.js';
import UInputDevice from './Device.js';


const UINPUT_PATH = '/dev/uinput';
const O_WRONLY = 0x01;
const O_NONBLOCK = 0x800;

class UInput {
	events;

	constructor(path = UINPUT_PATH, flags = O_WRONLY | O_NONBLOCK) {
		this.fd = libc.open(path, flags);
		if (this.fd < 0) throw new Error('/dev/uinput - no access or root permissions available');

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

  static Device = UInputDevice;
	static Event = UInputEvent;
}

export default UInput;
