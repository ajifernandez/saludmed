document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            if (!navList) return;
            navList.classList.toggle('nav__list--active');
            navToggle.classList.toggle('nav__toggle--active');

            const isExpanded = navToggle.classList.contains('nav__toggle--active');
            navToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        });
    }

    // Scroll Animations (Intersection Observer)
    // Slow scroll for verification
    (async () => {
      const distance = 100;
      const delay = 100;
      // Only run if checking verification (optional, keeping for now)
      // while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
      //   window.scrollBy(0, distance);
      //   await new Promise(resolve => setTimeout(resolve, delay));
      // }
    })();

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach(el => observer.observe(el));
});
