/*
function alertSubmit(e) {
	e.preventDefault();
	alert('Your message was successfully sent!');
	form.reset();
}

const form = document.querySelector('form');
form.addEventListener('submit', alertSubmit);
*/
var menuIsOpened = false;
const menuBtn = document.getElementById('header-menu-btn');
const header = document.getElementById('header');

menuBtn.addEventListener('click', () => {
	toggleMenu();
});

const toggleMenu = () => {
	if (menuIsOpened) {
		header.style.display = 'none';
		menuIsOpened = false;
	} else {
		header.style.display = 'flex';
		menuIsOpened = true;
	}
};
