(function setupFooterAccordions() {
	const menuSelection = document.getElementsByClassName('accordion');

	for (let i = 0; i < menuSelection.length; i++) {
		menuSelection[i].addEventListener('click', toggleClass);
	}

	function toggleClass(e) {
		e.currentTarget.classList.toggle('isOpen');
	}
})();
