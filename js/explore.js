document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded!");
    const images = [
        {
            src: "../assets/anamudy-peak.jpg",
            title: "Anamudy Peak",
            description: "The highest peak in South India, offering stunning views and adventurous trekking trails."
        },
        {
            src: "../assets/attukad.jpg",
            title: "Attukad Waterfalls",
            description: "A mesmerizing waterfall surrounded by lush greenery, perfect for a scenic escape."
        },
        {
            src: "../assets/blossom-hydel-park.jpg",
            title: "Blossom Hydel Park",
            description: "A peaceful retreat with beautiful gardens, walking trails, and boating options."
        },
        {
            src: "../assets/chinnar-ws.jpg",
            title: "Chinnar Wildlife Sanctuary",
            description: "Home to diverse wildlife, including the endangered grizzled giant squirrel and scenic trekking routes."
        },
        {
            src: "../assets/chokramudi-peak.jpg",
            title: "Chokramudi Peak",
            description: "A breathtaking peak offering panoramic views of Munnar and surrounding hills."
        },
        {
            src: "../assets/csi-church.jpg",
            title: "CSI Church",
            description: "A historic church in Munnar with British-era architecture and a serene atmosphere."
        },
        {
            src: "../assets/echo-point.jpg",
            title: "Echo Point",
            description: "A scenic spot where the natural echo phenomenon makes it a must-visit attraction."
        },
        {
            src: "../assets/eravikkulam-np.png",
            title: "Eravikulam National Park",
            description: "A UNESCO World Heritage site, home to the endangered Nilgiri Tahr and stunning landscapes."
        },
        {
            src: "../assets/fun-forest-ap.jpg",
            title: "Fun Forest Adventure Park",
            description: "An adventure park with ziplining, rope courses, and thrilling outdoor activities."
        },
        {
            src: "../assets/gap-road.webp",
            title: "Gap Road",
            description: "A scenic drive through tea plantations and misty mountains, perfect for photography."
        },
        {
            src: "../assets/kolukkumalai.jpg",
            title: "Kolukkumalai Tea Estate",
            description: "The world's highest tea plantation, offering breathtaking sunrise views and organic tea tasting."
        },
        {
            src: "../assets/marayoor.jpg",
            title: "Marayoor",
            description: "Famous for its sandalwood forests, ancient dolmens, and natural beauty."
        },
        {
            src: "../assets/mattupetty-dam.avif",
            title: "Mattupetty Dam",
            description: "A popular tourist spot with serene waters, boating, and stunning mountain views."
        },
        {
            src: "../assets/meeshapulimala.jpg",
            title: "Meeshapulimala",
            description: "A trekker's paradise offering panoramic views and lush green landscapes."
        },
        {
            src: "../assets/pothamedu-vp.jpg",
            title: "Pothamedu View Point",
            description: "A mesmerizing viewpoint offering a bird’s eye view of Munnar’s valleys and hills."
        },
        {
            src: "../assets/tea-museum.png",
            title: "Tea Museum",
            description: "A museum showcasing the history and process of tea making in Munnar."
        },
        {
            src: "../assets/vattavada.jpg",
            title: "Vattavada",
            description: "A serene hill station known for its organic farms and untouched natural beauty."
        }
    ];

    let index = 0;
    const mainImage = document.getElementById("current-image");
    const previewImage = document.getElementById("next-image");
    const imageTitle = document.getElementById("image-title");
    const imageDescription = document.getElementById("image-description");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    gsap.set(previewImage, {
        right: "5%",  // Keep it on the right
        bottom: "5%", // Set it at the bottom
        transform: "none", // Ensure no translation
        width: "300px",
        height: "200px",
        opacity: 1
    });

    function animateDescription(description) {
        // Split description into words
        let words = description.split(" ");
        imageDescription.innerHTML = words.map(word => `<span style="opacity: 0;">${word} </span>`).join("");

        // Animate words popping in
        gsap.to("#image-description span", {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1 // Words appear one by one
        });
    }
    

    function updateSlide(newIndex) {
        index = newIndex;
        mainImage.src = images[index].src;
        imageTitle.textContent = images[index].title;
        animateDescription(images[index].description);
        previewImage.src = images[(index + 1) % images.length].src;
    }

    function nextSlide() {
        let nextIndex = (index + 1) % images.length;
    
        // Animate preview image expanding to become the main image
        gsap.to(previewImage, {
            width: "100%",  
            height: "100%",
            left: "0%",
            bottom: "0%",
            transform: "translateY(0%) scale(1)", // Slight scale effect
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
                updateSlide(nextIndex);
    
                // Reset preview image position for next transition
                gsap.set(previewImage, {
                    right: "5%",  // Keep it on the right
                    left: "auto",
                    bottom: "5%", // Move to the bottom
                    transform: "none", // Remove vertical centering
                    width: "300px",
                    height: "200px",
                    transform: "translateY(0%) scale(0.9)", 
                    opacity: 1
                });
                
                
    
                // Small bounce effect on main image for realism
                gsap.fromTo(mainImage, 
                    { scale: 1 }, 
                    { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" }
                );
            }
        });
    }
    

    function prevSlide() {
        let prevIndex = (index - 1 + images.length) % images.length;
        updateSlide(prevIndex);
    }

    

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
});
