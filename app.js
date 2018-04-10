// 013 Object Literals

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 35,
  email: 'test@test.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function () {
    return (new Date()).getFullYear() - this.age;
  }
}

let val;

val = person;
// Specific value
val = person.firstName;
val = person['lastName'];
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23}
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}