// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
	const name = document.getElementById('name');
	const re = /^[a-zA-Z]{2,10}$/;
	console.log(re.test(name.value));
	if (!re.test(name.value)) {
		name.classList.add('is-invalid');
	} else {
		name.classList.remove('is-invalid');
		name.classList.add('is-valid');
	}
}

function validateZip() {
	
}

function validateEmail() {
	
}

function validatePhone() {
	
}