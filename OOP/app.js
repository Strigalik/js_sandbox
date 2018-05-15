/**
 *  043 Constructors the this Keyword
 */

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
// const num1 = 5;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function
// const getSum1 = function(x, y) {
// 	return x + y;
// }

// const getSum2 = new Function ('x', 'y', 'return x + y');

// // Object
// const john1 = {name: 'John1'};
// const john2 = new Object({name: 'John2'});

// // Arrays
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

/**
 *  045 Prototypes Explained
 */

/* // Object.prototype
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
	// this.calcAge = function(){
	// 	const diff = Date.now() - this.birthday.getTime();
	// 	const ageDate = new Date(diff);
	// 	return Math.abs(ageDate.getUTCFullYear() - 1970);
	// }
}

// Calculate age
Person.prototype.calcAge = function () {
	const diff = Date.now() - this.birthday.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
	this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '08/12/90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log('john age :', mary.calcAge());
console.log('Full name 1:', mary.getFullName());

mary.getsMarried('Smith');

console.log('Full name 2:', mary.getFullName());
console.log(mary.hasOwnProperty('firstName')); */

/**
 *  046 Prototypal Inheritance
 */

// Person constructor
/* function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
	return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Doe');

// console.log('person1 :', person1);
// console.log('person1 :', person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
	Person.call(this, firstName, lastName);
	this.phone = phone;
	this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Tom', 'Smith', '55-55-555', 'VIP');
console.log('customer1 :', customer1);

// Customer greeting
Customer.prototype.greeting = function () {
	return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}

console.log('customer1.greeting :', customer1.greeting()); */

/**
 *  047 Using Object.create
 */

const personPrototypes = {
	greeting: function () {
		return `Hello there ${this.firstName} ${this.lastName}`
	},
	getsMarried: function (newLastName) {
		this.lastName = newLastName;
	}
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log('mary :', mary);
console.log('mary.greeting() :', mary.greeting());

const brad = Object.create(personPrototypes, {
	firstName: { value: 'Brad' },
	lastName: { value: 'Traversy' },
	age: { value: 36 }
});

console.log('brad :', brad);