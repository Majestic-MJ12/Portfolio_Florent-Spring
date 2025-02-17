// script-mentions-legales.js
document.addEventListener('DOMContentLoaded', function() {

	// --- Element Selector ---
	const languageToggle = document.getElementById('languageToggle');

	// --- Language Toggle Functionality ---
	languageToggle.addEventListener('click', function() {
		const frElements = document.querySelectorAll('.fr');
		const enElements = document.querySelectorAll('.en');

		// Toggle display for French elements
		frElements.forEach(element => {
			element.style.display = (element.style.display === 'none') ? 'block' : 'none';
		});

		// Toggle display for English elements
		enElements.forEach(element => {
			element.style.display = (element.style.display === 'none') ? 'block' : 'none';
		});
	});
});