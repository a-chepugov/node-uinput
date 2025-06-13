/* include/uapi/linux/input-event-codes.h */

export * as PROP from './input-event-codes/prop.js';

export * as EV from './input-event-codes/ev.js';

export * as SYN from './input-event-codes/syn.js';
export * as KEY from './input-event-codes/key.js';
export * as REL from './input-event-codes/rel.js';
export * as ABS from './input-event-codes/abs.js';
export * as MSC from './input-event-codes/msc.js';
export * as SW from './input-event-codes/sw.js';
export * as LED from './input-event-codes/led.js';
export * as SND from './input-event-codes/snd.js';
export * as REP from './input-event-codes/rep.js';

import * as EV from './input-event-codes/ev.js';
/** @typedef {typeof EV[keyof typeof EV]} TYPE */

/** @typedef {number} CODE */

