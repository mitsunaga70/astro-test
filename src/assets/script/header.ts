function handleScroll() {
	var scroll = window.pageYOffset || document.documentElement.scrollTop,
		header = document.querySelector('.header');

	if (scroll > 100) {
		header.classList.add('is-scrolled');
	} else {
		header.classList.remove('is-scrolled');
	}
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
