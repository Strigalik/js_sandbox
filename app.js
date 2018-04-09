// 012 Arrays  Array Methods

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