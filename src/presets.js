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

		uinput.Device.register(UInput.Device.build(name));
		const rc = uinput.Device.create();
  	this.uinput = uinput;
	}

  act(event, value) {
    return this.uinput.act(event[0], event[1], value);
  }

  frame(data) {
    return this.uinput.frame(
      data.map(([event, value]) => [event[0], event[1], value])
   );
  }

  destructor() {
		this.uinput.Device.destroy();
		this.uinput.close();
	}

}

class Mouse {
  static EVENTS = {
      BTN_LEFT:
        [T.KEY,	E.KEY.BTN_LEFT],
      BTN_RIGHT:
        [T.KEY,	E.KEY.BTN_RIGHT],
      BTN_MIDDLE:
        [T.KEY,	E.KEY.BTN_MIDDLE],
      BTN_SIDE:
        [T.KEY,	E.KEY.BTN_SIDE],
      BTN_EXTRA:
        [T.KEY,	E.KEY.BTN_EXTRA],
      BTN_FORWARD:
        [T.KEY,	E.KEY.BTN_FORWARD],
      BTN_BACK:
        [T.KEY,	E.KEY.BTN_BACK],

      REL_X:
		  	[T.REL,	E.REL.REL_X],
      REL_Y:
	  		[T.REL,	E.REL.REL_Y],
      REL_WHEEL:
        [T.REL, E.REL.REL_WHEEL],
      REL_HWHEEL:
        [T.REL, E.REL.REL_HWHEEL],
		}

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

  m.d.act(Mouse.EVENTS.BTN_LEFT, 1);
  m.d.act(Mouse.EVENTS.BTN_LEFT, 0);
  m.d.frame([
    [Mouse.EVENTS.REL_X, 10],
    [Mouse.EVENTS.REL_Y, 10],
  ]);

	await sleep(10205);
	m.d.destructor();
}

main();
