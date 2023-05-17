// Discriminated Union
import { getEvent } from './events';


const e = getEvent();
if (e.sug === 'KeybordEvent') {
    e
}
const sug = e.sug;


type Direction = 'North' | 'South' | 'East' | 'West';

function doSomethingWithDirection(d: Direction, b: boolean, s: string | null) {
    let x = 0;
    let y = 0;

    if (s === null) {
        s
    } else {
        const u = s.toUpperCase();
    }

    if (d === 'East') {
        x -= 1;
    } else {
    }

    if (b === true) {
        b
    } else {
        b
    }

}