<<<<<<< HEAD
/* 011 Template Literals */

const name = 'John';
const age = 35;
const job = 'Web Developer';
const city = 'Miami';

// Without template string (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: '+ job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

function hello() {
  return 'hai world';
}

// With template string (ES6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+3}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;
=======
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
>>>>>>> 5488a0c72347232b7de6c9f6f8271e66e23dc809
