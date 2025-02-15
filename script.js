// script.js

document.addEventListener('DOMContentLoaded', function () {

    // --- Element Selectors ---
    const backToTopBtn = document.getElementById('backToTopBtn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');
    const sections = document.querySelectorAll('.section');
    const languageToggle = document.getElementById('languageToggle');
    const navLinks = document.querySelectorAll("nav ul li a");


    // --- Helper Functions ---
    function checkScroll() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        backToTopBtn.style.display = scrollPosition > 20 ? 'block' : 'none';
    }

    // --- Event Listeners ---

    // Hamburger Menu Toggle
    hamburgerMenu.addEventListener('click', function () {
        navUl.classList.toggle('active');
    });

    // Back to Top Button
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Section Observer for Active Class
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('active', entry.isIntersecting);
            });
        },
        {
            threshold: 0.2
        }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Language Toggle
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

    // Navigation Links Smooth Scroll
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Initial Setup & Event Listeners ---
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check on page load
});
