const { Buffer } = require('buffer');

const test1 = Buffer.alloc(10);
console.log(test1);
test1.fill('catioro');
console.log(test1.toString());

const test2 = Buffer.from('{\'test\':10, \'test1:\':11}');
console.log(test2);
console.log(test2.toString());