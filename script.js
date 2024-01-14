document.addEventListener('DOMContentLoaded', function() {
	var navbar = document.querySelector('.navbar');

	window.addEventListener('scroll', function() {
		if (window.scrollY === 0) {
			navbar.style.backgroundColor = 'transparent';
			navbar.style.borderBottom = 'none';
		} else {
			navbar.style.backgroundColor = 'var(--main-color)';
			navbar.style.borderBottom = '5px solid var(--tetiary-color)';
		}
	});
});
