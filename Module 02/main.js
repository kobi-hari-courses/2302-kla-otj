console.log('Hello World');

// var o = new Object();
var o = {};

var a = [1, 2, 3];

function Person(first, last, age) {
    // var res = {};
    this.first = first;
    this.last = last;
    this.age = age;
    this.id = this.counter;
    // return res;

    this.constructor.prototype.counter++;

}

Person.prototype.log = function() {
    console.log('Person', this.first, this.last);
}

Person.prototype.counter = 0;


function max(a, b) {
    if (a > b) return a;
    return b;
}

var p1 = new Person('John', 'Smith', 42);
var p2 = new Person('Jane', 'Cohen', 26);
var m2 = max(10, 20);
var m1 = new max(10, 20);

max(20, 10);
max.x = 10;
max.foo = function() {
    console.log('FOO!');
}

p1.log();
setTimeout(() => p1.log() , 2000);

const originalThen = Promise.prototype.then;

Promise.prototype.then = function(action) {
    console.log('running then');
    originalThen.apply(this, [val => {
        console.log('Promise completed');
        action(val);
    }]);
}


function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

delay().then(() => console.log('Promise is done after 2 seconds'));