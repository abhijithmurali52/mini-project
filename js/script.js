document.addEventListener("DOMContentLoaded", function () {
    // Navbar animation on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    
    gsap.to(".logo", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.to(".nav-links li", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });
    gsap.to(".hero-content", { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)", delay: 0.5 });
    gsap.to(".btn", { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.8 });
});

document.addEventListener("DOMContentLoaded", function () {
    const title = "Welcome to Travio";
    const subtitle = "Unveiling the beauty of exploration";
    
    const titleElement = document.getElementById("hero-title");
    const subtitleElement = document.getElementById("hero-subtitle");

    function typeText(element, text, callback) {
        element.innerHTML = ""; // Clear text before typing
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                element.classList.add("typing");
                i++;
                setTimeout(type, 100);
            } else {
                element.classList.remove("typing");
                if (callback) setTimeout(callback, 1000);
            }
        }
        type();
    }

    function startTypingAnimation() {
        typeText(titleElement, title, function () {
            typeText(subtitleElement, subtitle);
        });
    }

    // Initial animation
    startTypingAnimation();

    // Repeat every 10 seconds
    setInterval(startTypingAnimation, 10000);
});
