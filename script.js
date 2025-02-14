document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');
    const sections = document.querySelectorAll('.section');

    // --- Hamburger Menu ---
    hamburgerMenu.addEventListener('click', function () {
        navUl.classList.toggle('active');
    });

    // --- Intersection Observer for Sections ---
    const sectionObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        },
        {
            threshold: 0.2 // Adjust as needed (0.0 to 1.0, percentage of element visible)
        }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Back to Top Button ---
    function checkScroll() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollPosition > 20) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }

    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', checkScroll);
    checkScroll();

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
