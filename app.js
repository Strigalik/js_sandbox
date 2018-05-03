// 032 Local Session Storage

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '35');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

//get from storage
// const name = localStorage.getItem('name');

// // clear
// localStorage.clear();

// console.log(name);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  console.log(task);
  e.preventDefault();
});
