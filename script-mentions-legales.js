document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('languageToggle');
    languageToggle.addEventListener('click', function () {
        const frElements = document.querySelectorAll('.fr');
        const enElements = document.querySelectorAll('.en');

        frElements.forEach(element => {
            element.style.display = (element.style.display === 'none') ? 'block' : 'none';
        });

        enElements.forEach(element => {
            element.style.display = (element.style.display === 'none') ? 'block' : 'none';
        });
    });
});
