import { getEvent, Event, KeyboardEvent } from "./events";

function isKeyboardEvent1(e: Event): boolean {
  return e.sug === "KeybordEvent";
}

function isKeyboardEvent2(e: Event): e is KeyboardEvent {
  return e.sug === "KeybordEvent";
}

function isTupleOfTwo(a: number[]): a is [number, number] {
    return a.length === 2;
}

function isString(a: unknown): a is string {
    return typeof a === 'string';
}

function hasX(a: Object): a is {x: unknown} {
    return 'x' in a;
}



// Type Guards
const e = getEvent();
const x: number[] = [1, 2, 3];
const y: number[] = [1, 5];

if (isKeyboardEvent2(e)) {
  e;
}

const k : unknown = 15;

if (typeof k === 'string') {
    k
}

let bla: Object = {x: 10, y: 20};

if ('x' in bla) {
    bla.x = 20;
}