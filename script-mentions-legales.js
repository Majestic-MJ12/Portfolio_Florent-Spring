document.addEventListener('DOMContentLoaded', function () {
    // --- Language Toggle ---
    const languageToggle = document.getElementById('languageToggle');
    languageToggle.addEventListener('click', function () {
        const frElements = document.querySelectorAll('.fr');
        const enElements = document.querySelectorAll('.en');

        frElements.forEach(element => {
            element.style.display = element.style.display === 'none' ? '' : 'none';
        });

        enElements.forEach(element => {
            element.style.display = element.style.display === 'none' ? '' : 'none';
        });
    });
});
