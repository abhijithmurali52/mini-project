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
    const buttonElement = document.querySelector(".btn"); // Get the button

    function typeText(element, text, callback) {
        element.innerHTML = ""; // Clear text before typing
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                if (callback) setTimeout(callback, 500);
            }
        }
        type();
    }

    function startTypingAnimation() {
        buttonElement.classList.remove("show"); // Hide button when animation restarts
        
        typeText(titleElement, title, function () {
            typeText(subtitleElement, subtitle, function () {
                buttonElement.classList.add("show"); // Show button after subtitle
            });
        });
    }

    // Initial animation
    startTypingAnimation();

    // Repeat every 10 seconds
    setInterval(startTypingAnimation, 10000);
});
const images = [{
    title: "Anamudi Peak",
    description: "Rising to a towering height of 8,842 feet, Anamudi is the highest peak in Southern India. It is a photographer’s delight and a trekker’s paradise. Situated in the Western Ghats in the district of Idukki, Kerala, the mountain offers a breathtaking experience to entice tourists from India as well as international travellers. Since it is located in the subtropical region, the peak does not experience any snowfall in spite of being the tallest in the Western Ghats.Covered with dense evergreen forests and meandering rivers, it is home for innumerable species of animals and birds. It is phenomenal in hosting the endangered Asian elephants, Nilgiri Tahr and Gaur. You can also find the rare Neelakurinji flowers in the forests.",
    src: "../assets/anamudy-peak.jpg",

    location: "Munnar, Kerala",
    latitude: 10.1667,
    longitude: 77.0411,

    bestTimeToVisit: "The best time to visit Anamudi Peak is in the winter and spring season in the months from November to May. The temperature is pleasant and cool with a mild soothing breeze. It is neither very cold nor very hot, an ideal time to visit the place. ",

    howToReach: [
        "Nearest Airport: Cochin International Airport (110 km away)",
        "Nearest Railway Station: Aluva Railway Station (120 km away)",
        "By Road: Well-connected via Munnar town with taxis and buses available"
    ],

    entryFee: "No entry fee required",
    timings: "6:00 AM - 5:00 PM",

    activities: [
        "Trekking",
        "Photography",
        "Wildlife Spotting",
        "Camping (with special permission)",
        "Bird Watching",
        "Nature Walks"
    ],

    nearbyAttractions: [
        "Eravikulam National Park",
        "Tea Gardens of Munnar",
        "Mattupetty Dam",
        "Top Station",
        "Marayoor Sandalwood Forests",
        "Lakkam Waterfalls"
    ],

    wildlife: [
        "Nilgiri Tahr (rare mountain goat species)",
        "Asian Elephants",
        "Gaurs (Indian Bison)",
        "Leopards",
        "Malabar Civet",
        "Endangered Butterfly Species"
    ],

    geography: {
        elevation: "2,695 meters (8,842 ft)",
        mountainRange: "Western Ghats",
        climate: "Cool and misty throughout the year",
        terrain: "Rocky, with grasslands and thick forests"
    },

    weatherConditions: {
        summer: "March - May (Mild, 15°C - 25°C)",
        monsoon: "June - October (Heavy rains, trekking not recommended)",
        winter: "November - February (Cold, 5°C - 15°C, best for trekking)"
    },

    safetyPrecautions: [
        "Wear sturdy trekking shoes and layered clothing",
        "Carry enough water and energy snacks",
        "Beware of leeches during monsoon season",
        "Avoid trekking alone; hire a local guide",
        "Follow designated trails to protect the ecosystem",
        "Carry a basic first-aid kit"
    ],

    culturalSignificance: "Anamudi Peak is a part of the Western Ghats, a UNESCO World Heritage Site, and holds great ecological and historical importance. The peak is considered sacred by the local tribes and is home to centuries-old flora and fauna."

    },
    {
        src: "../assets/attukad.jpg",
        title: "Attukad Waterfalls",
        description: "A mesmerizing waterfall surrounded by lush greenery, perfect for a scenic escape.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "June to September",
        activities: ["Sightseeing", "Trekking", "Picnic"],
        lat: 10.1667, 
        lng: 77.0411
    },
    {
        src: "../assets/blossom-hydel-park.jpg",
        title: "Blossom Hydel Park",
        description: "A peaceful retreat with beautiful gardens, walking trails, and boating options.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "September to March",
        activities: ["Boating", "Birdwatching", "Nature Walks"]
    },
    {
        src: "../assets/chinnar-ws.jpg",
        title: "Chinnar Wildlife Sanctuary",
        description: "Home to diverse wildlife, including the endangered grizzled giant squirrel and scenic trekking routes.",
        location: "Idukki, Kerala",
        bestTimeToVisit: "October to February",
        activities: ["Wildlife Safari", "Trekking", "Camping"]
    },
    {
        src: "../assets/chokramudi-peak.jpg",
        title: "Chokramudi Peak",
        description: "A breathtaking peak offering panoramic views of Munnar and surrounding hills.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "November to April",
        activities: ["Trekking", "Camping", "Photography"]
    },
    {
        src: "../assets/csi-church.jpg",
        title: "CSI Church",
        description: "A historic church in Munnar with British-era architecture and a serene atmosphere.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "Year-round",
        activities: ["Sightseeing", "Photography", "History Tour"]
    },
    {
        src: "../assets/echo-point.jpg",
        title: "Echo Point",
        description: "A scenic spot where the natural echo phenomenon makes it a must-visit attraction.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "August to May",
        activities: ["Boating", "Hiking", "Photography"]
    },
    {
        src: "../assets/eravikkulam-np.png",
        title: "Eravikulam National Park",
        description: "A UNESCO World Heritage site, home to the endangered Nilgiri Tahr and stunning landscapes.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "September to March",
        activities: ["Wildlife Safari", "Nature Walks", "Birdwatching"]
    },
    {
        src: "../assets/fun-forest-ap.jpg",
        title: "Fun Forest Adventure Park",
        description: "An adventure park with ziplining, rope courses, and thrilling outdoor activities.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "October to March",
        activities: ["Ziplining", "Rope Climbing", "ATV Rides"]
    },
    {
        src: "../assets/gap-road.webp",
        title: "Gap Road",
        description: "A scenic drive through tea plantations and misty mountains, perfect for photography.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "Year-round",
        activities: ["Scenic Drive", "Photography", "Nature Walks"]
    },
    {
        src: "../assets/kolukkumalai.jpg",
        title: "Kolukkumalai Tea Estate",
        description: "The world's highest tea plantation, offering breathtaking sunrise views and organic tea tasting.",
        location: "Theni, Tamil Nadu",
        bestTimeToVisit: "September to April",
        activities: ["Tea Tasting", "Jeep Safari", "Sunrise View"]
    },
    {
        src: "../assets/marayoor.jpg",
        title: "Marayoor",
        description: "Famous for its sandalwood forests, ancient dolmens, and natural beauty.",
        location: "Idukki, Kerala",
        bestTimeToVisit: "October to February",
        activities: ["Nature Walks", "Cultural Exploration", "Sightseeing"]
    },
    {
        src: "../assets/mattupetty-dam.avif",
        title: "Mattupetty Dam",
        description: "A popular tourist spot with serene waters, boating, and stunning mountain views.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "August to May",
        activities: ["Boating", "Sightseeing", "Photography"]
    },
    {
        src: "../assets/meeshapulimala.jpg",
        title: "Meeshapulimala",
        description: "A trekker's paradise offering panoramic views and lush green landscapes.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "November to April",
        activities: ["Trekking", "Camping", "Photography"]
    },
    {
        src: "../assets/pothamedu-vp.jpg",
        title: "Pothamedu View Point",
        description: "A mesmerizing viewpoint offering a bird’s eye view of Munnar’s valleys and hills.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "September to March",
        activities: ["Photography", "Sightseeing", "Tea Plantation Visit"]
    },
    {
        src: "../assets/tea-museum.png",
        title: "Tea Museum",
        description: "A museum showcasing the history and process of tea making in Munnar.",
        location: "Munnar, Kerala",
        bestTimeToVisit: "Year-round",
        activities: ["Tea Tasting", "Museum Tour", "Shopping"]
    },
    {
        src: "../assets/vattavada.jpg",
        title: "Vattavada",
        description: "A serene hill station known for its organic farms and untouched natural beauty.",
        location: "Idukki, Kerala",
        bestTimeToVisit: "October to February",
        activities: ["Organic Farming", "Trekking", "Camping"]
    }
];


const gallery = document.getElementById("image-gallery");

// Ensure gallery exists before proceeding
if (gallery && Array.isArray(images)) {
    images.forEach((destination, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${destination.src}" alt="${destination.title}">
            <div class="card-content">
                <h3>${destination.title}</h3>
            </div>
        `;
        // <p>${destination.description.substring(0, 80)}...</p>

        // Clicking a card stores details in localStorage and redirects
        card.addEventListener("click", () => {
            localStorage.setItem("selectedDestination", JSON.stringify(destination));
            window.location.href = "details.html";
        });

        gallery.appendChild(card);
    });
} else {
    console.error("Gallery container or images array is missing!");
}
card.addEventListener("click", () => {
    const destinationData = JSON.stringify(destination);
    if (destinationData) {
        localStorage.setItem("selectedDestination", destinationData);
        window.location.href = "details.html";
    } else {
        console.error("Failed to store destination data!");
    }
});


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

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero");

    window.addEventListener("scroll", () => {
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        if (heroBottom <= 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});


