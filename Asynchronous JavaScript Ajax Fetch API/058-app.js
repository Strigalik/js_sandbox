/**
 *  058 XHR Object Methods Working With Text
 */
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
	// Create an XHR Object
	const xhr = new XMLHttpRequest();

	// OPEN
	xhr.open('GET', '058-data.txt', true);
	xhr.send();
	// console.log('READYSTATE', xhr.readyState);

	// Optional - Used for spinners/loader
	xhr.onprogress = function () {
		console.log('READYSTATE', xhr.readyState);
	}

	xhr.onload = function () {
		console.log('READYSTATE', xhr.readyState);
		console.log('this.status :', this.status);
		if (this.status === 200) {
			// console.log(this.responseText);
			document.getElementById('output').innerHTML = `<h2>${this.responseText}</h2>`
		}
	}

	// xhr.onreadystatechange = function () {
	// 	console.log('READYSTATE', xhr.readyState);
	// 	if(this.status === 200 && this.readyState === 4){
	// 		console.log(this.responseText);
	// 	}
	// }

	xhr.onerror = function () {
		console.log('Request error...');
	}
	// readyState Values
	// 0: request not initialized 
	// 1: server connection established
	// 2: request received 
	// 3: processing request 
	// 4: request finished and response is ready
	
	// HTTP Statuses
	// 200: "OK"
	// 403: "Forbidden"
	// 404: "Not Found"
}