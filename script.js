document.addEventListener('DOMContentLoaded', () => {
    
    // Header Logic
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide/Show logic
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        // Glass effect application
        if (scrollTop > 50) {
            header.classList.add('glass-effect', 'shadow-sm');
        } else {
            header.classList.remove('glass-effect', 'shadow-sm');
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile Menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if(!mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.add('glass-effect');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Scroll Reveal (Intersection Observer)
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Privacy Modal Logic
    const modal = document.getElementById('privacy-modal');
    const privacyBtn = document.getElementById('privacy-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const closeModalBg = document.getElementById('close-modal-bg');
    const acceptBtn = document.getElementById('accept-btn');

    function openModal() {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.children[1].classList.add('scale-100', 'opacity-100');
        }, 10);
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    privacyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    [closeModalBtn, closeModalBg, acceptBtn].forEach(el => {
        el.addEventListener('click', closeModal);
    });

    // Current Year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});