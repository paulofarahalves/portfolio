function alertSubmit(e) {
	e.preventDefault();
	alert('Your message was successfully sent!');
	form.reset();
}

const form = document.querySelector('form');
form.addEventListener('submit', alertSubmit);
