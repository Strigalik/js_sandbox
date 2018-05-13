// 043 Constructors the this Keyword
/* // Person constructor
function Person(name, dob) {
	this.name = name;
	// this.age = age;
	this.birthday = new Date(dob);
	this.calcAge = function(){
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}

// const oleg = new Person('Oleg', 35);
// const brad = new Person('Brad', 30);

const brad = new Person('Brad', '06/11/1983');
console.log(brad.calcAge()); */

// 044 Built In Constructors
// String

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// // name2.foo = 'bar';
// // console.log(name2);

// console.log(typeof name2);

// if (name2 === 'Jeff') {
// 	console.log('YES');
// } else {
// 	console.log('NO');
// }

//Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y) {
	return x + y;
}

const getSum2 = new Function ('x', 'y', 'return x + y');

// Object
const john1 = {name: 'John1'};
const john2 = new Object({name: 'John2'});

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

