import UInput from './UInput.js';

const T = UInput.Event.TYPES;
const E = UInput.Event.EVENTS;

class Device {
	constructor(name, events) {
		const uinput = new UInput();

		Object
			.entries(events)
			.map(([typeId, eventIds]) => {
					uinput.Event.type(typeId);
					eventIds
						.map((eventId) => {
							uinput.Event.event(typeId, eventId);
						})
			})

		uinput.Device.register(UInput.Device.build());
		uinput.Device.create();
  	this.uinput = uinput;
	}

	destructor() {
		this.uinput.Device.destroy();
		this.uinput.close();
	}

}

class Mouse {
	constructor(name = 'virtual-mouse') {
		const device = new Device(name, {
			[T.KEY]: [
				E.KEY.BTN_LEFT,
				E.KEY.BTN_RIGHT,
				E.KEY.BTN_MIDDLE,
				E.KEY.BTN_SIDE,
				E.KEY.BTN_EXTRA,
				E.KEY.BTN_FORWARD,
				E.KEY.BTN_BACK,
			],
			[T.REL]: [
				E.REL.REL_X,
				E.REL.REL_Y,
        E.REL.REL_WHEEL,
        E.REL.REL_HWHEEL,
			],
		})

		this.d = device;
	}
}


const sleep = (t) => new Promise((r) => setTimeout(r, t));

const main = async () => {
	const m = new Mouse();

	await sleep(500);
  console.log(`DBG:presets.js:68=---------------------------->`, );

  m.d.uinput.act(T.KEY, E.KEY.BTN_LEFT, 1);
  m.d.uinput.act(T.KEY, E.KEY.BTN_LEFT, 0);

	await sleep(200);
	m.d.destructor();
}

main();

