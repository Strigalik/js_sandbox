// 013 Object Literals


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