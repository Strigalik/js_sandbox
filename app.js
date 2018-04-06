// 009 Numbers The Math Object
const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 / num2;
val = num1 * num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.round(2.8);
val = Math.ceil(2.3);
val = Math.floor(2.8);
val = Math.sqrt(8);
val = Math.abs(-4);
val = Math.pow(3, 2);
val = Math.min(2,3,4,5,7,-2);
val = Math.max(2,3,4,5,7,-2);
val = Math.floor(Math.random() * 20 + 1);

console.log(val);