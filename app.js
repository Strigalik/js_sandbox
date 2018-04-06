// 008 Type Conversion
let val;

// NUmber to string
val = String(555);
val = String(4+4);

// Bool to string
val = String(false);

// Date to string
val = String(Date());

// Array to string
val = String([1,2,3]);

// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('55.556677');
val = Number(false);
val = Number(null);
val = Number('hello');

val = Number('200.20');

// Output
/* console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2)); */

const x = '5';
const y = 6;
const sum = Number(x + y);
console.log(sum);
console.log(typeof sum);