document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80, // Adjust for navbar height
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
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



document.addEventListener("DOMContentLoaded", () => {
    const destinationData = localStorage.getItem("selectedDestination");
    if (!destinationData) return;
    
    const destination = JSON.parse(destinationData);
    document.getElementById("destination-title").textContent = destination.title;
    document.getElementById("destination-description").textContent = destination.description;
    document.getElementById("main-image").src = destination.src;
    document.getElementById("destination-location").textContent = destination.location || "Not Available";
    document.getElementById("destination-time").textContent = destination.bestTimeToVisit || "All year round";
    document.getElementById("destination-entryFee").textContent = destination.entryFee || "Not listed";
    document.getElementById("destination-timings").textContent = destination.timings || "Not listed";
    document.getElementById("destination-culturalSignificance").textContent = destination.culturalSignificance || "Not listed";


    document.getElementById("destination-howToReach").innerHTML = destination.howToReach?.map(a => `<p>${a}</p>`).join("") || "<p>Not listed</p>";

    document.getElementById("destination-activities").innerHTML = destination.activities?.map(a => `<p>${a}</p>`).join("") || "<p>No activities listed</p>";
    document.getElementById("destination-attractions").innerHTML = destination.nearbyAttractions?.map(a => `<p>${a}</p>`).join("") || "<p>No attractions listed</p>";
    document.getElementById("destination-wildlife").innerHTML = destination.wildlife?.map(a => `<p>${a}</p>`).join("") || "<p>No wildlife details available</p>";
    
    document.getElementById("destination-elevation").textContent = `Elevation: ${destination.geography.elevation || "Not available"}`;
    document.getElementById("destination-climate").textContent = `Climate: ${destination.geography.climate || "Not available"}`;
    document.getElementById("destination-terrain").textContent = `Terrain: ${destination.geography.terrain || "Not available" || "Not available"}`;
    document.getElementById("destination-mountainRange").textContent = `mountainRange: ${destination.geography.mountainRange || "Not available"}`;

    
    document.getElementById("destination-summer").textContent = `Summer: ${destination.weatherConditions.summer || "Not available"}`;
    document.getElementById("destination-monsoon").textContent = `Monsoon: ${destination.weatherConditions.monsoon || "Not available"}`;
    document.getElementById("destination-winter").textContent = `Winter: ${destination.weatherConditions.winter || "Not available"}`;
        
    document.getElementById("destination-safety").innerHTML = destination.safetyPrecautions?.map(t => `<li>${t}</li>`).join("") || "<li>No safety tips available</li>";

    // Wishlist button functionality
    const wishlistBtn = document.getElementById("wishlist-btn");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    if (wishlist.includes(destination.title)) {
        wishlistBtn.classList.add("active");
        wishlistBtn.textContent = "❤️ Added to Wishlist";
    }
    
    wishlistBtn.addEventListener("click", () => {
        if (wishlist.includes(destination.title)) {
            wishlist = wishlist.filter(item => item !== destination.title);
            wishlistBtn.textContent = "❤️ Add to Wishlist";
            wishlistBtn.classList.remove("active");
        } else {
            wishlist.push(destination.title);
            wishlistBtn.textContent = "❤️ Added to Wishlist";
            wishlistBtn.classList.add("active");
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
}); // Initialize OpenStreetMap
//  var map = L.map('map').setView([10.0889, 77.0595], 13); // Default to Munnar

//  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//      attribution: '© OpenStreetMap contributors'
//  }).addTo(map);

//  L.marker([10.0889, 77.0595]).addTo(map)
//      .bindPopup(destination.title)
//      .openPopup();});


     document.addEventListener("DOMContentLoaded", function () {
        const submitBtn = document.getElementById("submit-feedback");
        const feedbackText = document.getElementById("feedback-text");
        const feedbackMessage = document.getElementById("feedback-message");
        const stars = document.querySelectorAll(".star");
    
        let selectedRating = 0;
    
        // Handle Star Click
        stars.forEach((star) => {
            star.addEventListener("click", function () {
                selectedRating = this.getAttribute("data-value");
                stars.forEach((s) => s.classList.remove("active"));
                for (let i = 0; i < selectedRating; i++) {
                    stars[i].classList.add("active");
                }
            });
        });
    
        // Submit Feedback
        submitBtn.addEventListener("click", function () {
            if (feedbackText.value.trim() === "" || selectedRating === 0) {
                alert("Please provide a rating and feedback before submitting.");
                return;
            }
    
            // Show success message
            feedbackMessage.innerText = "Thank you for your feedback! 😊";
            feedbackMessage.style.display = "block";
    
            // Clear input
            feedbackText.value = "";
            stars.forEach((s) => s.classList.remove("active"));
            selectedRating = 0;
        });
    });
    