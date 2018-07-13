// const sayHello = function () {
// 	console.log('Hello');
// }

// const sayHello = () => {
// 	console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// On eline returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function () {
// 	return 'Hello';
// }

// Return object
// const sayHello = () => ({ msg: 'Hello'});

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Oleg', 'Strigo');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function (item) {
// 	return item.length;
// });

// Shorter than above
// const nameLengths = users.map((item) => {
// 	return item.length;
// });

// Even shorter
const nameLengths = users.map(item => item.length);

 console.log("nameLengths ", nameLengths);