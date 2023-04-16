var tsvaim = require('colors');
var math = require('mathjs');

var reHello = tsvaim.red('Hello World');
var greenHello = tsvaim.green('How are you');
var blueHello = 'This is amazing'.blue;
console.log(reHello);
console.log(greenHello);
console.log(blueHello);

var xyz = math.cos(30);
console.log(xyz);