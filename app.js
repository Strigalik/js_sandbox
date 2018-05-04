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
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
	alert('Task saved');
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(task => {
	console.log(task);
});