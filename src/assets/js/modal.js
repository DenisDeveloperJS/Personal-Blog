const modalBtn = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll('.modal__close');
let modalId, modal;

console.log(modalClose);
modalBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		modalId = btn.getAttribute('data-modal');
		modal = document.querySelector('#' + modalId);

		const modalContent = modal.querySelector('.modal__content');

		openModal(modal, modalContent);

		modal.addEventListener('click', e => {
			const target = e.target.closest('.modal__content');

			if (!target) {
				closeModal(modal);
			}
		});
	});
});

modalClose.forEach(item => {
	item.addEventListener('click', () => {
		closeModal(modal);
	});
});

const openModal = (modal, modalContent) => {
	modal.classList.add('open');
	document.body.classList.add('no-scroll');

	setTimeout(() => {
		modalContent.style.transform = 'none';
	});
};
const closeModal = modal => {
	const modalContent = modal.querySelector('.modal__content');

	setTimeout(() => {
		modal.classList.remove('open');
		document.body.classList.remove('no-scroll');
	}, 200);

	console.log(modalContent);

	modalContent.removeAttribute('style');
};
