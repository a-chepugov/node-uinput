import { EV, KEY, REL } from './constants/input-event-codes.js';
import UInput from './UInput.js';

const T = UInput.Event.TYPES;
const E = UInput.Event.EVENTS;

class Device {
	constructor(name, events) {
		console.log(`DBG:presets.js:9>`, name, events);

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
	constructor(name = 'mouse') {
		const device = new Device(name, {
			[T.key]: [
				E.key.BTN_LEFT,
				E.key.BTN_RIGHT,
				E.key.BTN_MIDDLE,
				E.key.BTN_SIDE,
				E.key.BTN_EXTRA,
				E.key.BTN_FORWARD,
				E.key.BTN_BACK,
			],
			[T.rel]: [
				E.rel.REL_X,
				E.rel.REL_Y,
			],
		})

		this.d = device;
	}


}


const sleep = (t) => new Promise((r) => setTimeout(r, t));

const main = async () => {
	const m = new Mouse();

	await sleep(500);
	m.d.uinput.Event.emit(T.key, E.key.BTN_LEFT, 1); // нажать
	m.d.uinput.Event.emit(T.syn, E.syn.SYN_REPORT, 0);

	await sleep(200);
	m.d.destructor();
}

main();

