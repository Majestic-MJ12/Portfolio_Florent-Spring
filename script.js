// script.js
document.addEventListener('DOMContentLoaded', function() {

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
	hamburgerMenu.addEventListener('click', function() {
		navUl.classList.toggle('active');
	});

	// Back to Top Button
	backToTopBtn.addEventListener('click', function(e) {
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
		}, {
			threshold: 0.2
		}
	);

	sections.forEach(section => {
		sectionObserver.observe(section);
	});

	// Language Toggle
	languageToggle.addEventListener('click', function() {
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
		link.addEventListener("click", function(e) {
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

document.addEventListener('DOMContentLoaded', function() {
	if (typeof THREE === 'undefined') {
		console.error('Three.js is not loaded.');
		return;
	}

	// --- Initializing Three.js ---
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	const renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('particles-js'),
		alpha: true
	});

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	document.body.appendChild(renderer.domElement);

	// --- Loading the circular texture ---
	const textureLoader = new THREE.TextureLoader();
	const particleTexture = textureLoader.load('https://threejs.org/examples/textures/sprites/spark1.png'); // Glow texture

	// --- Creating particles ---
	const geometry = new THREE.BufferGeometry();
	const vertices = [];

	for (let i = 0; i < 500; i++) {
		vertices.push((Math.random() - 0.5) * 10);
		vertices.push((Math.random() - 0.5) * 10);
		vertices.push((Math.random() - 0.5) * 10);
	}

	geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

	// --- Particle material (glow effect) ---
	const material = new THREE.PointsMaterial({
		map: particleTexture, // Using the texture
		transparent: true,
		color: 0x00aaff, // BRIGHT BLUE 💙
		size: 0.1, // Adjustable size
		depthWrite: false, // Prevents particles from hiding behind each other
		blending: THREE.AdditiveBlending, // Glow effect
		opacity: 1, // Adjust between 0.1 (almost invisible) and 1 (opaque)
	});

	const particles = new THREE.Points(geometry, material);
	scene.add(particles);

	camera.position.z = 5;

	// --- Mouse interaction ---
	let mouseX = 0;
	let mouseY = 0;

	document.addEventListener('mousemove', (event) => {
		mouseX = (event.clientX / window.innerWidth) * 2 - 1;
		mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
	});

	function animate() {
		requestAnimationFrame(animate);

		// Smooth camera movement
		camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
		camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
		camera.lookAt(scene.position);

		particles.rotation.y += 0.0008; // Slow rotation

		renderer.render(scene, camera);
	}

	animate();

	// --- Adjusting to screen size ---
	window.addEventListener('resize', () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});
});