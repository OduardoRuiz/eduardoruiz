document.addEventListener("DOMContentLoaded", () => {
    // Initialize Icons
    lucide.createIcons();

    // Set Current Year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // GSAP Animations (only if not mobile)
    if (typeof gsap !== 'undefined' && window.innerWidth > 768) {
        gsap.registerPlugin(ScrollTrigger);

        // Hero
        const tl = gsap.timeline();
        tl.from(".navbar", { y: -50, opacity: 0, duration: 0.6, ease: "power2.out" })
          .from(".hero-labels span", { x: -20, opacity: 0, stagger: 0.2, duration: 0.5 }, "-=0.2")
          .from(".hero-section .display-1", { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
          .from(".hero-section .lead", { y: 20, opacity: 0, duration: 0.5 }, "-=0.4")
          .from(".hero-section .btn", { y: 20, opacity: 0, stagger: 0.2, duration: 0.4 }, "-=0.3")
          .from(".profile-image-container", { x: 50, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.8");

        // Sections Fade Up
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                },
                x: -30,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            });
        });

        // Timeline Items
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.1,
                ease: "power2.out"
            });
        });

        // Project Cards
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.1,
                ease: "power2.out"
            });
        });
    }
});
