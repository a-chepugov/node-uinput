export { default as Device } from './Device.js';
export { default as Keyboard } from './Keyboard.js';
export { default as Media } from './Media.js';
export { default as Mouse } from './Mouse.js';
export { default as Touchscreen } from './Touchscreen.js';

import libc from '../lib/libc.js';

import Mouse from './Mouse.js';
import Keyboard from './Keyboard.js';
import Touchscreen from './Touchscreen.js';

const sleep = (t) => new Promise((r) => setTimeout(r, t));

const main = async () => {
//	const m = new Mouse();
///	const k = new Keyboard();
	const t = new Touchscreen();

	await sleep(1000);
	console.log(`DBG:presets.js:68=---------------------------->`, );

//	const mr1 = m.act(Mouse.EVENTS.BTN_LEFT, 1);
	//console.log(`DBG:index.js:22>`, mr1);
//	m.act(Mouse.EVENTS.BTN_LEFT, 0);
//	m.frame([
//		[Mouse.EVENTS.REL_X, 30],
//		[Mouse.EVENTS.REL_Y, 30],
//	]);

//	const ke1 = Keyboard.EVENTS.KEY_1;

	console.log(`DBG:index.js:31==-----------------------------------=======>`, );
//	k.act(ke1, 1);
//	k.act(ke1, 0);


 let tr5 = t.frame([
 	[Touchscreen.EVENTS.ABS_X, 212],
 	[Touchscreen.EVENTS.ABS_Y, 318],
// 	[Touchscreen.EVENTS.BTN_TOUCH, 1],
// 	[Touchscreen.EVENTS.BTN_TOUCH, 0],
 ]);

 console.log(`DBG:index.js:53>`, {tr5});


// let tr3 =t.act(Touchscreen.EVENTS.ABS_X, 512);
//	console.log(`DBG:index.js:37===>`, {tr3});

//	let tr4 =t.act(Touchscreen.EVENTS.ABS_Y, 384);
//	console.log(`DBG:index.js:37===>`, {tr4});
//
	let tr1 = t.act(Touchscreen.EVENTS.BTN_TOUCH, 1);
	console.log(`DBG:index.js:37===>`, {tr1});
//
	let tr2 =t.act(Touchscreen.EVENTS.BTN_TOUCH, 0);
	console.log(`DBG:index.js:37===>`, {tr2});




	await sleep(300);
//	m.destructor();
//	k.destructor();
	t.destructor();
}

main();
