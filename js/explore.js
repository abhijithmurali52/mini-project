document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../assets/bg-image.jpg",
        "../assets/1.png",
        // "../assets/bg-image.jpg",
        // "../assets/bg-image.jpg",
        // "../assets/bg-image.jpg"
    ];

    let index = 0;
    const mainImage = document.getElementById("current-image");
    const previewImage = document.getElementById("next-image");
    const nextButton = document.querySelector(".next");

    function nextSlide() {
        let nextIndex = (index + 1) % images.length; // Get next image index

        // Move preview to the center
        gsap.to(previewImage, {
            y: "-50vh", // Moves to center
            scale: 1.2, // Slightly enlarges
            duration: 0.8,
            opacity: 1,
            ease: "power2.inOut",
            onComplete: function () {
                // Expand in place (No movement to top-left)
                gsap.to(previewImage, {
                    scale: 1.8, // Expands smoothly
                    duration: 0.6,
                    ease: "power2.inOut",
                    onComplete: function () {
                        // Swap images
                        mainImage.src = images[nextIndex];
                        previewImage.src = images[(nextIndex + 1) % images.length];

                        // Reset preview image for next transition
                        gsap.set(previewImage, { 
                            y: "0vh", 
                            scale: 1, 
                            width: "80%", 
                            height: "150px", 
                            left: "50%", 
                            transform: "translateX(-50%)" 
                        });
                    }
                });
            }
        });

        index = nextIndex;
    }

    nextButton.addEventListener("click", nextSlide);
});
