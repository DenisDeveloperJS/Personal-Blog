const hasSubnav = document.querySelectorAll('.has_subnav');
const subnav = document.querySelectorAll('.subnav');

for (let i = 0; i < hasSubnav.length; i++) {
	hasSubnav[i].addEventListener('click', e => {
		e.preventDefault();

		if (!hasSubnav[i].classList.contains('active')) {
			subnav[i].style.display = 'none';
			document.body.classList.remove('no-scroll');
			document.body.classList.remove('no-scroll');
		} else {
			subnav[i].style.display = 'block';
		}
		hasSubnav[i].classList.toggle('active');
	});

	hasSubnav[i].addEventListener('blur', () => {
		subnav[i].style.display = 'none';
	});
}
