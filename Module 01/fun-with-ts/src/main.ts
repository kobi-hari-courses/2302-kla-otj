import { Person } from "./person";

const a: number[] = [1, 2, 3, 4];
const b: Array<number> = [2, 3, 4, 5];

console.log(a);

console.log(typeof a);

//1. number
//2. string
//3. boolean (true, false)
//4. object
//5. function
//6. undefined (undefied)

const o: any = {
    x: 40, 
    y: 20, 
    15: 30, 
    10: 90
};

console.log(o);
o['z'] = 220;
console.log(o); 

delete o['x'];

console.log(o);

const p: any = new Person('john');
console.log('Person', typeof p);

p.age = 50;
console.log('Person', typeof p);

console.log('type of Person is:', typeof Person);

const f1 = function(x: any) {
    return x + 1;
}

const f2 = f1;


console.log('typeof f1 is', typeof f1);



