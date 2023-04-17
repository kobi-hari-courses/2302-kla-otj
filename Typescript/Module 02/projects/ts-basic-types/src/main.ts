class Main {
    static void() {
    }
}

Main.void();

let a2: number[] = [1, 2, 3];
a2 = [1, 3];
a2 = [];
a2 = [1, 4, 5, 6];

function throwDice(): [number, number] {
    const n1 = Math.ceil(Math.random()*6);
    const n2 = Math.ceil(Math.random()*6);
    return [n1, n2];
}

let t1: [number, number] = [1, 2];
let t2: [string, boolean, number] = ['hello', true, 12];
const x = t2[0];
const y = t2[1];

console.log(t2.constructor.name);


let o1: {x: string, y: number};
o1 = {
    x: 'hello', 
    y: 42
};

let t11: [string, number];

let o3: {[key: string]: boolean};
let o5: Record<string, boolean>;

let o4: Record<string, number[]>;

o4 = {
    a: [1, 2, 3], 
    b: [4, 5, 6], 
    c: [12]
}

o4['d']=[1, 2, 3];
o4.e = [1, 2, 3];

o3 = {
    x: true, 
    y: false, 
    z: true
}


let f1: Function;
let f2: Function;

let f3: () => number;
let f4: (x: number, y: string) => boolean;

f3 = () => 4 * 4;

f4 = (i: number, j: string) => i.toString() === j;
f4 = (x: number, y: string) => x > 10;

f4(42, 'j');

f1 = () => console.log('bla bla bla');

f2 = f1;

console.log('the name of the f2 fuinction is', f2.name);


function getMapingAndDoSomethingWithIt(mapping: {[key: string]: number}): {[key: string]: number} {
    return mapping;
}

function getFuncAndDoSomething(func: (x: number, y: number) => number): (x: number, y: number) => number {
    return (x, y) => func(x, y) + 2;
}


type NumReducer = (x: number, y: number) => number;

function getReducerAndDoSomething(func: NumReducer): NumReducer {
    return (x, y) => func(x, y) + 2;
}

type TripNum = [number, number, number];
type Point = {x: number, u: number};
type Size = {width: number, height: number};