import ref from 'ref-napi';
import Struct from 'ref-struct-napi';
import ArrayType from 'ref-array-napi';
import libc from './lib/libc.js';

import * as UI from './constants/uinput.js';

// Типы
const int32 = ref.types.int32;
const uint16 = ref.types.uint16;
const uint32 = ref.types.uint32;
const char = ref.types.char;

// Массивы
const CharArray80 = ArrayType(char, 80);
const Int32Array64 = ArrayType(int32, 64);

//-----------------------------------------------

const UInputDevIDStruct = Struct({
	bustype: uint16,
	vendor: uint16,
	product: uint16,
	version: uint16,
});

const UinputUserDevStruct = Struct({
	name: CharArray80,
	id: UInputDevIDStruct,
	ff_effects_max: uint32,
	absmax: Int32Array64,
	absmin: Int32Array64,
	absfuzz: Int32Array64,
	absflat: Int32Array64,
});

class UInputDevice {
  constructor(fd) {
    this.fd = fd;
  }

  create() {
		return libc.ioctl(this.fd, UI.UI_DEV_CREATE, 0);
	}

	register(dev) {
		return libc.write(this.fd, dev.ref(), UinputUserDevStruct.size);
	}

	destroy() {
		return libc.ioctl(this.fd,UI.UI_DEV_DESTROY, 0);
	}

	static build(
		name = 'node-input',
		bustype = 0x03, // USB
		vendor = 0x1234,
		product = 0x5678,
		version = 1
	) {
		const dev = new UinputUserDevStruct();

		dev.name = new CharArray80();
		Buffer.from(name + '\0', 'ascii').copy(dev.name.buffer);
		dev.id.bustype = bustype;
		dev.id.vendor = vendor;
		dev.id.product = product;
		dev.id.version = version;

		return dev;
	}

}

export default UInputDevice;

