const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
	document.body.classList.toggle('show-sidebar');
});
