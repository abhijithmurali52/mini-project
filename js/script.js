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
        title: "Attukad Waterfalls",
        description: "Nestled between Munnar and Pallivasal, Attukad Waterfalls is one of the most scenic waterfalls in Kerala. Surrounded by rolling hills, lush greenery, and mist-covered valleys, this picturesque spot is a paradise for nature lovers and adventure seekers. The cascading waterfalls create a mesmerizing view, especially during the monsoon season when the water flow is at its peak. A small wooden bridge offers a perfect vantage point to admire the beauty of the falls. It is a popular destination for trekking, photography, and picnicking, attracting tourists throughout the year.",
    
        src: "../assets/attukad.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.0833,
        longitude: 77.0667,
    
        bestTimeToVisit: "The best time to visit Attukad Waterfalls is during the monsoon and post-monsoon seasons, from June to September, when the waterfall is in full flow. However, the winter months from October to February also offer a pleasant climate for sightseeing and trekking.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (108 km away)",
            "Nearest Railway Station: Aluva Railway Station (110 km away)",
            "By Road: Well-connected via Munnar town, accessible by taxis and local buses"
        ],
    
        entryFee: "No entry fee required",
        timings: "9:00 AM - 6:30 PM",
    
        activities: [
            "Trekking",
            "Photography",
            "Nature Walks",
            "Bird Watching",
            "Picnicking"
        ],
    
        nearbyAttractions: [
            "Pothamedu Viewpoint",
            "Tea Estates of Munnar",
            "Blossom Park",
            "Echo Point",
            "Mattupetty Dam"
        ],
    
        wildlife: [
            "Malabar Giant Squirrel",
            "Nilgiri Langur",
            "Indian Porcupine",
            "Various species of butterflies",
            "Exotic birds like the Malabar Grey Hornbill"
        ],
    
        geography: {
            elevation: "Around 1,450 meters (4,757 ft) above sea level",
            terrain: "Hilly and forested, with rocky cascades and dense vegetation",
            climate: "Pleasant and misty throughout the year"
        },
    
        weatherConditions: {
            summer: "March - May (Mild, 20°C - 30°C)",
            monsoon: "June - September (Heavy rains, waterfalls in full flow, trekking may be risky)",
            winter: "October - February (Cool, 10°C - 20°C, ideal for sightseeing and trekking)"
        },
    
        safetyPrecautions: [
            "Wear comfortable trekking shoes with good grip",
            "Be cautious of slippery rocks and strong water currents",
            "Avoid visiting during heavy rains due to possible landslides",
            "Carry drinking water and light snacks",
            "Respect the environment and avoid littering"
        ],
    
        culturalSignificance: "Attukad Waterfalls holds a special place in the heart of local communities. Surrounded by lush tea plantations and spice gardens, it reflects the untouched beauty of Kerala's hill stations. The serene atmosphere makes it a spiritual retreat for many visitors."
    
    },
    {
        title: "Blossom Hydel Park",
        description: "Blossom Hydel Park is a scenic park located in Munnar, Kerala, offering a serene escape amidst lush greenery and vibrant flowers. Spread across 16 acres, the park is known for its well-maintained gardens, artificial waterfalls, and tranquil ambiance. It is a perfect spot for nature lovers, families, and photographers. The park is also home to various species of birds and butterflies, adding to its charm. With ample space for leisure walks, cycling, and boating, it provides a refreshing experience for visitors of all ages.",
        src: "../assets/blossom-hydel-park.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.0800,
        longitude: 77.0600,
    
        bestTimeToVisit: "The best time to visit Blossom Hydel Park is between September and May when the weather is pleasant and the flowers are in full bloom. Avoid the monsoon season (June to August) due to heavy rainfall.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (110 km away)",
            "Nearest Railway Station: Aluva Railway Station (120 km away)",
            "By Road: Easily accessible from Munnar town via taxis and local transport"
        ],
    
        entryFee: "₹10 for adults, ₹2 for children",
        timings: "9:00 AM - 7:00 PM",
    
        activities: [
            "Boating",
            "Nature Walks",
            "Bird Watching",
            "Cycling",
            "Photography",
            "Picnicking"
        ],
    
        nearbyAttractions: [
            "Munnar Tea Gardens",
            "Mattupetty Dam",
            "Kundala Lake",
            "Eravikulam National Park",
            "Attukad Waterfalls"
        ],
    
        wildlife: [
            "Various bird species",
            "Butterflies",
            "Small mammals like squirrels and rabbits"
        ],
    
        geography: {
            elevation: "1,600 meters (5,249 ft)",
            terrain: "Lush gardens, water bodies, and forested areas",
            climate: "Cool and misty with moderate temperatures"
        },
    
        weatherConditions: {
            summer: "March - May (Mild, 15°C - 25°C)",
            monsoon: "June - August (Heavy rains, not ideal for visits)",
            winter: "September - February (Cool, 10°C - 20°C, best for sightseeing)"
        },
    
        safetyPrecautions: [
            "Carry an umbrella or raincoat if visiting during monsoon",
            "Wear comfortable walking shoes",
            "Avoid littering to maintain the park's cleanliness",
            "Stay within designated walking paths",
            "Keep an eye on children near water bodies"
        ],
    
        culturalSignificance: "Blossom Hydel Park is a part of Munnar’s ecological efforts to preserve its flora and fauna. It plays a key role in environmental awareness and conservation efforts in the region."
    
    },
    {
        title: "Chinnar Wildlife Sanctuary",
        description: "Chinnar Wildlife Sanctuary is one of the most renowned protected areas in Kerala, located in the Western Ghats. Spread over 90.44 sq. km, the sanctuary is home to diverse flora and fauna, including the rare Grizzled Giant Squirrel, Indian Star Tortoise, and Mugger Crocodile. Unlike other sanctuaries in Kerala, Chinnar receives less rainfall, making it a unique dry deciduous forest. It is a paradise for wildlife enthusiasts, trekkers, and nature lovers who seek an adventurous experience amidst rugged landscapes, waterfalls, and rich biodiversity.",
        src: "../assets/chinnar-ws.jpg",
    
        location: "Idukki District, Kerala",
        latitude: 10.3500,
        longitude: 77.2000,
    
        bestTimeToVisit: "The best time to visit Chinnar Wildlife Sanctuary is from November to May when the weather is pleasant for trekking and wildlife spotting. Avoid the monsoon season (June to October) as heavy rainfall can make trails slippery and difficult to navigate.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (204 km away)",
            "Nearest Railway Station: Pollachi Railway Station (60 km away)",
            "By Road: Well-connected via Munnar and Marayoor with taxis and buses available"
        ],
    
        entryFee: "₹10 for adults, ₹5 for children, ₹100 for foreign tourists",
        timings: "6:00 AM - 6:00 PM",
    
        activities: [
            "Wildlife Safari",
            "Trekking",
            "Bird Watching",
            "Camping",
            "Nature Walks",
            "Photography"
        ],
    
        nearbyAttractions: [
            "Marayoor Sandalwood Forests",
            "Thoovanam Waterfalls",
            "Eravikulam National Park",
            "Anamudi Peak",
            "Kundala Lake"
        ],
    
        wildlife: [
            "Grizzled Giant Squirrel",
            "Indian Star Tortoise",
            "Mugger Crocodile",
            "Elephants",
            "Leopards",
            "Spotted Deer",
            "Langurs",
            "Indian Gaur"
        ],
    
        geography: {
            elevation: "400 - 2,522 meters (1,312 - 8,274 ft)",
            terrain: "Dry deciduous forests, rocky terrain, grasslands",
            climate: "Semi-arid, receiving less rainfall compared to other Kerala sanctuaries"
        },
    
        weatherConditions: {
            summer: "March - May (Warm, 20°C - 35°C)",
            monsoon: "June - October (Heavy rains, not ideal for trekking)",
            winter: "November - February (Cool, 15°C - 25°C, best for wildlife viewing)"
        },
    
        safetyPrecautions: [
            "Wear comfortable trekking shoes and light clothing",
            "Carry enough water and energy snacks",
            "Do not venture into restricted areas without a guide",
            "Avoid making loud noises to respect wildlife",
            "Follow designated trails to prevent damage to the ecosystem",
            "Carry a first-aid kit"
        ],
    
        culturalSignificance: "Chinnar Wildlife Sanctuary is a part of the Nilgiri Biosphere Reserve and plays a vital role in the conservation of endangered species. The area is also home to several indigenous tribal communities who coexist with nature and preserve ancient traditions."
    
    },
    {
        title: "Chokramudi Peak",
        description: "Chokramudi Peak is one of the highest standalone peaks in the Munnar region of Kerala, offering breathtaking views of the Western Ghats. Situated at an elevation of 7,200 feet, it is a favorite spot for trekkers and adventure seekers. The peak is covered with lush green grasslands, dense forests, and misty valleys, creating a picturesque setting. Unlike other peaks in Munnar, Chokramudi is relatively less explored, making it an ideal destination for those seeking solitude amidst nature.",
        src: "../assets/chokramudi-peak.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.1425,
        longitude: 77.0496,
    
        bestTimeToVisit: "The best time to visit Chokramudi Peak is from November to May. During these months, the weather is pleasant, making it perfect for trekking. Avoid the monsoon season (June to October) due to slippery trails and heavy rainfall.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (107 km away)",
            "Nearest Railway Station: Aluva Railway Station (115 km away)",
            "By Road: Well-connected via Munnar town, with taxis and buses available"
        ],
    
        entryFee: "No entry fee required",
        timings: "Open 24 hours (Trekking during daylight hours recommended)",
    
        activities: [
            "Trekking",
            "Photography",
            "Camping",
            "Bird Watching",
            "Nature Walks"
        ],
    
        nearbyAttractions: [
            "Eravikulam National Park",
            "Anamudi Peak",
            "Tea Plantations of Munnar",
            "Mattupetty Dam",
            "Echo Point",
            "Top Station"
        ],
    
        wildlife: [
            "Nilgiri Tahr (rare mountain goat species)",
            "Elephants",
            "Indian Gaurs",
            "Leopards",
            "Sambar Deer",
            "Endemic Birds of the Western Ghats"
        ],
    
        geography: {
            elevation: "2,164 meters (7,200 ft)",
            mountainRange: "Western Ghats",
            terrain: "Rocky cliffs, grasslands, and dense forests",
            climate: "Cool and misty throughout the year"
        },
    
        weatherConditions: {
            summer: "March - May (Mild, 15°C - 25°C)",
            monsoon: "June - October (Heavy rains, trekking not recommended)",
            winter: "November - February (Cold, 5°C - 15°C, best for trekking)"
        },
    
        safetyPrecautions: [
            "Wear proper trekking shoes with a strong grip",
            "Carry enough water and snacks",
            "Beware of leeches during the monsoon",
            "Avoid trekking alone; hire a local guide",
            "Stick to marked trails for safety",
            "Carry a first-aid kit and necessary medications"
        ],
    
        culturalSignificance: "Chokramudi Peak is a lesser-known but significant part of the Western Ghats, which is a UNESCO World Heritage Site. The region is home to diverse ecosystems, ancient tribal settlements, and untouched natural beauty."
    
    },
    {
        title: "CSI Church, Munnar",
        description: "The CSI Church in Munnar is a historic Anglican church built during the British colonial era. Established in 1910, this stone-built church stands as an architectural marvel with its gothic-style design, beautiful stained glass windows, and wooden interiors. Surrounded by lush green landscapes, it offers visitors a peaceful and spiritual ambiance. The church continues to function as a place of worship and is a significant heritage site reflecting Munnar’s colonial past.",
        src: "../assets/csi-church.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.0892,
        longitude: 77.0603,
    
        bestTimeToVisit: "The best time to visit CSI Church is throughout the year. However, winter months (November to February) provide a cooler and more pleasant atmosphere for sightseeing.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (110 km away)",
            "Nearest Railway Station: Aluva Railway Station (120 km away)",
            "By Road: Easily accessible from Munnar town by taxis and local buses"
        ],
    
        entryFee: "No entry fee required",
        timings: "9:00 AM - 5:00 PM (Sunday service at 8:00 AM)",
    
        activities: [
            "Sightseeing",
            "Photography",
            "Attending Sunday service",
            "Exploring colonial architecture"
        ],
    
        nearbyAttractions: [
            "Tea Plantations of Munnar",
            "Eravikulam National Park",
            "Mattupetty Dam",
            "Rose Garden",
            "Echo Point"
        ],
    
        architecture: {
            style: "Gothic-style colonial architecture",
            materials: "Built with granite stones and stained glass windows",
            interiors: "Wooden interiors with an old-world charm",
            significance: "One of the oldest churches in Kerala, established in 1910"
        },
    
        weatherConditions: {
            summer: "March - May (Pleasant, 15°C - 25°C)",
            monsoon: "June - October (Heavy rainfall, but enhances scenic beauty)",
            winter: "November - February (Chilly, 5°C - 15°C, perfect for visiting)"
        },
    
        safetyPrecautions: [
            "Maintain silence inside the church as a mark of respect",
            "Photography inside may be restricted, check with church authorities",
            "Visit during daylight hours for the best experience",
            "Be mindful of ongoing services when exploring"
        ],
    
        culturalSignificance: "CSI Church is a symbol of Munnar’s colonial history and continues to be a place of worship for the local Christian community. Its rich history and serene surroundings make it an important landmark in Munnar."
    
    },
    {
        title: "Echo Point, Munnar",
        description: "Echo Point is a scenic destination in Munnar, known for its unique natural echo phenomenon. Located at an altitude of 600 feet, this picturesque spot is surrounded by lush green hills, misty valleys, and a serene lake. Visitors can shout out loud and hear their voices reverberate across the hills. It is a popular attraction among nature lovers, photographers, and adventure seekers, offering a tranquil escape from city life.",
        src: "../assets/echo-point.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.1365,
        longitude: 77.0679,
    
        bestTimeToVisit: "The ideal time to visit Echo Point is from September to May when the weather is pleasant, and the mist enhances the beauty of the landscape. Monsoon months (June - August) bring heavy rainfall, which may limit outdoor activities.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (120 km away)",
            "Nearest Railway Station: Aluva Railway Station (130 km away)",
            "By Road: Well-connected via Munnar town with taxis and local buses available"
        ],
    
        entryFee: "₹30 per person",
        timings: "6:00 AM - 6:30 PM",
    
        activities: [
            "Shouting and experiencing the echo effect",
            "Boating in the lake",
            "Photography",
            "Trekking around the hills",
            "Bird Watching",
            "Nature Walks"
        ],
    
        nearbyAttractions: [
            "Kundala Lake",
            "Top Station",
            "Mattupetty Dam",
            "Tea Gardens of Munnar",
            "Rajamalai (Eravikulam National Park)"
        ],
    
        geography: {
            elevation: "600 meters (1,968 ft) above sea level",
            terrain: "Hilly with dense greenery and a lake",
            climate: "Pleasant and misty throughout the year"
        },
    
        weatherConditions: {
            summer: "March - May (Mild, 15°C - 25°C)",
            monsoon: "June - August (Heavy rains, scenic but may not be ideal for activities)",
            winter: "September - February (Cool, 10°C - 20°C, best for sightseeing)"
        },
    
        safetyPrecautions: [
            "Avoid leaning over the edges of the lake",
            "Wear comfortable footwear for trekking",
            "Check weather conditions before visiting, as heavy mist may reduce visibility",
            "Do not litter; help preserve the natural beauty",
            "Follow local guidelines for boating safety"
        ],
    
        culturalSignificance: "Echo Point is not just a tourist attraction but also holds significance as a natural marvel, demonstrating the acoustic wonders of the hills in Munnar. The place is popular among travelers looking for both adventure and relaxation amidst nature."
    
    },
    {
        title: "Eravikulam National Park",
        description: "Eravikulam National Park is a breathtaking wildlife sanctuary in Munnar, Kerala, known for its rolling grasslands, shola forests, and diverse flora and fauna. It is home to the endangered Nilgiri Tahr, a rare mountain goat species. Spanning 97 square kilometers, the park is famous for its scenic beauty, trekking trails, and the blooming of Neelakurinji flowers, which occurs once every 12 years. The park offers stunning views of the Western Ghats and is a must-visit for nature lovers and wildlife enthusiasts.",
        src: "../assets/eravikkulam-np.png",
    
        location: "Munnar, Kerala",
        latitude: 10.2056,
        longitude: 77.0486,
    
        bestTimeToVisit: "The best time to visit Eravikulam National Park is from September to March, when the weather is cool and pleasant, making it ideal for sightseeing and trekking. The park remains closed from February to March for the Nilgiri Tahr breeding season.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (120 km away)",
            "Nearest Railway Station: Aluva Railway Station (120 km away)",
            "By Road: Well-connected via Munnar town with taxis and local buses available"
        ],
    
        entryFee: "₹200 per adult, ₹50 per child, ₹500 for foreign nationals",
        timings: "8:00 AM - 4:00 PM",
    
        activities: [
            "Wildlife Spotting",
            "Trekking",
            "Photography",
            "Nature Walks",
            "Exploring the rolling grasslands",
            "Viewing Neelakurinji blooms (seasonal)"
        ],
    
        nearbyAttractions: [
            "Anamudi Peak",
            "Lakkam Waterfalls",
            "Tea Gardens of Munnar",
            "Mattupetty Dam",
            "Top Station"
        ],
    
        wildlife: [
            "Nilgiri Tahr (endangered mountain goat species)",
            "Indian Elephants",
            "Leopards",
            "Nilgiri Langurs",
            "Atlas Moth (largest moth species in the world)",
            "Endemic Birds of the Western Ghats"
        ],
    
        geography: {
            elevation: "2,000 - 2,695 meters above sea level",
            landscape: "Rolling grasslands, shola forests, and steep cliffs",
            climate: "Cool and misty throughout the year"
        },
    
        weatherConditions: {
            summer: "March - May (Mild, 15°C - 25°C)",
            monsoon: "June - August (Heavy rainfall, park remains open but trekking may be difficult)",
            winter: "September - February (Cool, 5°C - 20°C, best for wildlife spotting and trekking)"
        },
    
        safetyPrecautions: [
            "Wear comfortable trekking shoes and layered clothing",
            "Follow park rules and stay on designated trails",
            "Do not feed or disturb wildlife",
            "Avoid visiting during the breeding season of Nilgiri Tahr (Feb-Mar)",
            "Carry water and light snacks but do not litter",
            "Respect the fragile ecosystem of the park"
        ],
    
        culturalSignificance: "Eravikulam National Park is a UNESCO World Heritage Site and a crucial conservation area for the Nilgiri Tahr and endemic species of the Western Ghats. The park is also significant for its Neelakurinji blooms, which paint the hills blue once every 12 years, attracting tourists from around the world."
    
    },
    {
        title: "Fun Forest Adventure Park",
        description: "Fun Forest Adventure Park in Munnar is a thrilling destination for adventure enthusiasts. Set amidst lush green hills and dense forests, this park offers adrenaline-pumping activities such as ziplining, rock climbing, rappelling, and rope courses. It is an ideal spot for both beginners and seasoned adventurers, offering breathtaking views of Munnar’s landscapes. The park ensures safety with professional instructors and high-quality equipment, making it a must-visit for thrill-seekers.",
        src: "../assets/fun-forest-ap.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.0883,
        longitude: 77.0627,
    
        bestTimeToVisit: "The best time to visit Fun Forest Adventure Park is from September to May when the weather is pleasant and suitable for outdoor activities. Monsoon months (June to August) are not recommended due to slippery terrain and rain interruptions.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (110 km away)",
            "Nearest Railway Station: Aluva Railway Station (120 km away)",
            "By Road: Well-connected via Munnar town, accessible by taxis and private vehicles"
        ],
    
        entryFee: "₹600 per person (varies based on activities chosen)",
        timings: "9:00 AM - 6:00 PM",
    
        activities: [
            "Ziplining",
            "Rock Climbing",
            "Rappelling",
            "High Rope Courses",
            "Burma Bridge",
            "ATV (All-Terrain Vehicle) Rides",
            "Trekking"
        ],
    
        nearbyAttractions: [
            "Tea Gardens of Munnar",
            "Mattupetty Dam",
            "Echo Point",
            "Eravikulam National Park",
            "Pothamedu Viewpoint"
        ],
    
        safetyPrecautions: [
            "Wear comfortable and sporty attire",
            "Follow the instructions of the trainers carefully",
            "Ensure all safety gear is properly fastened before activities",
            "Avoid adventure activities if you have medical conditions like vertigo or heart issues",
            "Stay hydrated and avoid heavy meals before strenuous activities"
        ],
    
        culturalSignificance: "Fun Forest Adventure Park promotes eco-tourism in Munnar, offering adventure lovers a unique way to experience the region's natural beauty while ensuring minimal environmental impact. The park emphasizes sustainable adventure tourism and conservation efforts."
    
    },
    {
        title: "Gap Road",
        description: "Gap Road is a stunning mountain pass in Munnar, offering breathtaking panoramic views of the Western Ghats. Surrounded by tea plantations and mist-covered hills, this scenic route is a paradise for nature lovers and photographers. It is known for its serene ambiance, fresh mountain air, and the occasional sighting of Nilgiri Tahr and other wildlife. The road is also a popular stop for travelers heading to Kolukkumalai and Top Station.",
        src: "../assets/gap-road.webp",
    
        location: "Munnar, Kerala",
        latitude: 10.0364,
        longitude: 77.0715,
    
        bestTimeToVisit: "The best time to visit Gap Road is from September to March when the weather is cool and misty, providing a surreal experience. Monsoon season (June to August) is not recommended due to landslides and poor visibility.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (120 km away)",
            "Nearest Railway Station: Aluva Railway Station (130 km away)",
            "By Road: Well-connected via NH 85 from Munnar, accessible by car or bike"
        ],
    
        entryFee: "No entry fee required",
        timings: "Open 24 hours (Daytime recommended for safety)",
    
        activities: [
            "Photography",
            "Nature Walks",
            "Bird Watching",
            "Road Trips",
            "Sunrise and Sunset Viewing"
        ],
    
        nearbyAttractions: [
            "Kolukkumalai Tea Estate",
            "Top Station",
            "Echo Point",
            "Mattupetty Dam",
            "Meesapulimala"
        ],
    
        geography: {
            elevation: "1,500 meters (4,921 ft)",
            mountainRange: "Western Ghats",
            climate: "Cool and misty throughout the year",
            terrain: "Winding mountain roads with steep cliffs"
        },
    
        weatherConditions: {
            summer: "March - May (Pleasant, 15°C - 25°C)",
            monsoon: "June - August (Heavy rainfall, not recommended)",
            winter: "September - February (Cool, 10°C - 20°C, best for sightseeing)"
        },
    
        safetyPrecautions: [
            "Drive carefully due to sharp bends and steep slopes",
            "Avoid visiting during heavy rainfall to prevent accidents",
            "Wear comfortable shoes if planning to explore on foot",
            "Keep an eye out for wildlife while traveling",
            "Carry warm clothing, as temperatures can drop unexpectedly"
        ],
    
        culturalSignificance: "Gap Road is an important route connecting Munnar to several tea estates and high-altitude villages. It is a vital part of the local ecosystem and a favorite among photographers and travel enthusiasts for its mesmerizing landscapes."
    
    },
    {
        title: "Kolukkumalai Tea Estate",
        description: "Kolukkumalai Tea Estate, located at an altitude of 7,900 feet, is the highest tea plantation in the world. Known for its breathtaking sunrise views and misty landscapes, this estate produces some of the finest handpicked tea using traditional methods. The estate is accessible via a rugged off-road journey, making it an adventure in itself. The fresh mountain air, lush greenery, and the aroma of tea leaves create an unforgettable experience for visitors.",
        src: "../assets/kolukkumalai.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.0159,
        longitude: 77.2493,
    
        bestTimeToVisit: "The best time to visit Kolukkumalai Tea Estate is from September to March when the weather is cool and ideal for sightseeing and trekking. Early mornings offer the best sunrise views.",
    
        howToReach: [
            "Nearest Airport: Madurai Airport (135 km away) or Cochin International Airport (145 km away)",
            "Nearest Railway Station: Theni Railway Station (75 km away) or Aluva Railway Station (140 km away)",
            "By Road: Accessible via jeep from Suryanelli (only off-road vehicles can reach the estate)"
        ],
    
        entryFee: "INR 100 per person (may vary for guided tours)",
        timings: "6:00 AM - 6:00 PM",
    
        activities: [
            "Tea Tasting and Plantation Tour",
            "Photography",
            "Trekking",
            "Off-Road Jeep Safari",
            "Witnessing Sunrise Views"
        ],
    
        nearbyAttractions: [
            "Top Station",
            "Meesapulimala",
            "Gap Road",
            "Echo Point",
            "Tea Museum in Munnar"
        ],
    
        geography: {
            elevation: "2,400 meters (7,900 ft)",
            mountainRange: "Western Ghats",
            climate: "Cool and misty throughout the year",
            terrain: "Hilly, with tea plantations and rugged off-road trails"
        },
    
        weatherConditions: {
            summer: "March - May (Mild, 15°C - 25°C)",
            monsoon: "June - August (Heavy rainfall, off-road travel may be difficult)",
            winter: "September - February (Cool, 10°C - 20°C, best time to visit)"
        },
    
        safetyPrecautions: [
            "Book a 4x4 jeep for a safe off-road journey",
            "Wear comfortable trekking shoes for exploration",
            "Carry warm clothing as it can be chilly in the morning",
            "Avoid visiting during heavy rains due to slippery terrain",
            "Follow estate guidelines while exploring tea plantations"
        ],
    
        culturalSignificance: "Kolukkumalai is renowned for its heritage tea-making process, still using traditional methods that date back to the British colonial era. The estate’s high-altitude location and organic farming techniques make its tea distinctively rich in flavor."
    
    },
    {
        title: "Marayoor",
        description: "Marayoor is a unique destination in Kerala known for its sprawling sandalwood forests, ancient dolmens, and rich cultural heritage. Nestled in the rain shadow region of the Western Ghats, Marayoor offers a blend of history, nature, and adventure. The town is famous for its naturally grown sandalwood trees and jaggery-making units, producing some of the best quality jaggery in India. With prehistoric rock paintings and caves, Marayoor is a paradise for history enthusiasts and nature lovers alike.",
        src: "../assets/marayoor.jpg",
    
        location: "Idukki, Kerala",
        latitude: 10.3193,
        longitude: 77.1445,
    
        bestTimeToVisit: "The ideal time to visit Marayoor is from October to March when the weather is pleasant, and the sandalwood forests are lush green after the monsoons.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (150 km away) or Coimbatore International Airport (160 km away)",
            "Nearest Railway Station: Pollachi Railway Station (100 km away) or Aluva Railway Station (140 km away)",
            "By Road: Well-connected to Munnar and Udumalpet via scenic road routes"
        ],
    
        entryFee: "No entry fee required",
        timings: "Open 24 hours (specific attractions may have different timings)",
    
        activities: [
            "Exploring Sandalwood Forests",
            "Visiting Ancient Dolmens (Muniyara)",
            "Trekking and Nature Walks",
            "Sightseeing at Waterfalls and Caves",
            "Jaggery Factory Tour"
        ],
    
        nearbyAttractions: [
            "Muniyara Dolmens",
            "Chinnar Wildlife Sanctuary",
            "Thoovanam Waterfalls",
            "Lakkam Waterfalls",
            "Kanthalloor Fruit Orchards"
        ],
    
        wildlife: [
            "Indian Bison (Gaur)",
            "Spotted Deer",
            "Indian Sloth Bear",
            "Bonnet Macaques",
            "Malabar Giant Squirrel"
        ],
    
        geography: {
            elevation: "1,000 meters (3,280 ft)",
            mountainRange: "Western Ghats",
            climate: "Dry and cool due to the rain shadow effect",
            terrain: "Rocky hills, valleys, and dense sandalwood forests"
        },
    
        weatherConditions: {
            summer: "March - May (Warm, 20°C - 30°C)",
            monsoon: "June - September (Moderate rainfall, lush greenery)",
            winter: "October - February (Pleasant, 15°C - 25°C, best time to visit)"
        },
    
        safetyPrecautions: [
            "Follow forest regulations while exploring sandalwood areas",
            "Wear comfortable shoes for trekking and nature walks",
            "Carry drinking water and snacks while visiting remote areas",
            "Avoid visiting dense forests alone; take a local guide",
            "Respect local traditions and do not damage historical sites"
        ],
    
        culturalSignificance: "Marayoor is famous for its prehistoric dolmens, believed to be burial sites of ancient tribes. The region also has strong ties to sandalwood cultivation and traditional jaggery production, making it a vital cultural and economic center in Kerala."
    
    },
    {
        title: "Mattupetty Dam",
        description: "Mattupetty Dam is a popular tourist attraction in Munnar, Kerala, known for its picturesque landscape, serene waters, and rich biodiversity. Built in the 1950s for hydroelectric and water conservation purposes, the dam has now become a hotspot for visitors seeking scenic beauty and adventure activities. Surrounded by lush green hills and forests, the dam provides a perfect backdrop for photography, boating, and picnics. It is also a haven for bird watchers as several species of birds and animals frequent the area.",
        src: "../assets/mattupetty-dam.avif",
    
        location: "Munnar, Kerala",
        latitude: 10.1060,
        longitude: 77.1188,
    
        bestTimeToVisit: "The best time to visit Mattupetty Dam is from September to May when the weather is pleasant and the surroundings are lush green. Monsoon season (June to August) also adds to the beauty, but activities may be limited due to heavy rainfall.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (110 km away)",
            "Nearest Railway Station: Aluva Railway Station (115 km away)",
            "By Road: Easily accessible from Munnar town (13 km away) via taxis and buses"
        ],
    
        entryFee: "No entry fee required (Boating charges applicable)",
        timings: "9:30 AM - 5:00 PM",
    
        activities: [
            "Boating (speed boats and pedal boats available)",
            "Photography",
            "Bird Watching",
            "Picnicking",
            "Nature Walks"
        ],
    
        nearbyAttractions: [
            "Echo Point",
            "Top Station",
            "Kundala Lake",
            "Tea Gardens of Munnar",
            "Eravikulam National Park"
        ],
    
        wildlife: [
            "Indian Elephants",
            "Nilgiri Tahr",
            "Gaurs (Indian Bison)",
            "Malabar Giant Squirrel",
            "Numerous bird species"
        ],
    
        geography: {
            elevation: "1,700 meters (5,577 ft)",
            mountainRange: "Western Ghats",
            climate: "Cool and misty throughout the year",
            terrain: "Rolling hills, forests, and a large reservoir"
        },
    
        weatherConditions: {
            summer: "March - May (Mild, 15°C - 25°C)",
            monsoon: "June - August (Heavy rains, lush greenery)",
            winter: "September - February (Cool, 10°C - 20°C, best for sightseeing)"
        },
    
        safetyPrecautions: [
            "Wear life jackets while boating",
            "Avoid leaning over the edges of the dam",
            "Do not litter or feed wild animals",
            "Carry an umbrella or raincoat during the monsoon",
            "Visit early to avoid crowds during peak season"
        ],
    
        culturalSignificance: "Mattupetty Dam plays a crucial role in water conservation and hydroelectric power generation for Kerala. The dam is also a major source of irrigation for nearby agricultural lands, making it an essential part of the region’s economy and sustainability."
    
    },
    {
        title: "Meesapulimala",
        description: "Meesapulimala is the second-highest peak in the Western Ghats and a dream destination for trekkers and nature lovers. Located near Munnar, Kerala, the mountain stands at an elevation of 2,640 meters and offers breathtaking views of rolling hills, mist-covered valleys, and dense forests. The trek to Meesapulimala is an exhilarating experience, taking adventurers through lush tea plantations, rhododendron forests, and grasslands. Recognized as a UNESCO World Heritage Site, it is a must-visit for those seeking adventure and scenic beauty.",
        src: "../assets/meeshapulimala.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.1140,
        longitude: 77.1645,
    
        bestTimeToVisit: "The best time to visit Meesapulimala is from September to May when the weather is cool and pleasant, making it ideal for trekking. Avoid the monsoon season (June to August) due to heavy rains and slippery trails.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (108 km away)",
            "Nearest Railway Station: Aluva Railway Station (120 km away)",
            "By Road: Accessible via Munnar town with local taxis and forest department vehicles available"
        ],
    
        entryFee: "INR 1,000 per person (includes guided trek and forest permit)",
        timings: "6:00 AM - 4:00 PM (Trekking slots available)",
    
        activities: [
            "Trekking (popular trail starts from Rhodo Valley)",
            "Photography",
            "Camping (with prior permission)",
            "Bird Watching",
            "Wildlife Spotting",
            "Nature Walks"
        ],
    
        nearbyAttractions: [
            "Kolukkumalai Tea Estate",
            "Silent Valley Tea Estate",
            "Eravikulam National Park",
            "Top Station",
            "Mattupetty Dam"
        ],
    
        wildlife: [
            "Nilgiri Tahr",
            "Indian Gaurs (Bison)",
            "Leopards (rare sightings)",
            "Elephants",
            "Various species of butterflies and birds"
        ],
    
        geography: {
            elevation: "2,640 meters (8,661 ft)",
            mountainRange: "Western Ghats",
            climate: "Cool and misty throughout the year",
            terrain: "Grasslands, rocky patches, and dense forests"
        },
    
        weatherConditions: {
            summer: "March - May (Mild, 10°C - 20°C)",
            monsoon: "June - August (Heavy rains, trekking not recommended)",
            winter: "September - February (Cold, 5°C - 15°C, best for trekking)"
        },
    
        safetyPrecautions: [
            "Wear sturdy trekking shoes and comfortable clothing",
            "Carry sufficient water and snacks",
            "Follow the designated trekking path to avoid getting lost",
            "Beware of leeches during monsoon season",
            "Carry a first-aid kit and inform someone before trekking",
            "Avoid trekking alone; opt for a guided trek"
        ],
    
        culturalSignificance: "Meesapulimala is part of the Western Ghats, a UNESCO World Heritage Site, known for its rich biodiversity. It holds ecological significance as a protected forest area, and efforts are made to conserve its flora and fauna."
    
    },
    {
        title: "Pothamedu View Point",
        description: "Pothamedu View Point is a mesmerizing hilltop destination in Munnar, offering panoramic views of the lush green valleys, tea plantations, and mist-covered mountains. It is a popular spot for nature lovers, photographers, and adventure seekers. The viewpoint is especially stunning at sunrise and sunset, when the golden hues paint the sky, creating a breathtaking spectacle. With its serene environment and refreshing breeze, Pothamedu is a must-visit for those seeking tranquility and scenic beauty.",
        src: "../assets/pothamedu-vp.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.0792,
        longitude: 77.0372,
    
        bestTimeToVisit: "The best time to visit Pothamedu View Point is from September to May when the weather is pleasant, and the sky remains clear, offering stunning views. Monsoon season (June to August) brings misty conditions, adding a mystical charm but limiting visibility.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (108 km away)",
            "Nearest Railway Station: Aluva Railway Station (120 km away)",
            "By Road: Located just 4 km from Munnar town, accessible by taxi or rented vehicle"
        ],
    
        entryFee: "No entry fee required",
        timings: "Open 24 hours (Best visited during sunrise or sunset)",
    
        activities: [
            "Photography",
            "Trekking",
            "Nature Walks",
            "Sunrise and Sunset Viewing",
            "Tea Plantation Exploration"
        ],
    
        nearbyAttractions: [
            "Attukad Waterfalls",
            "Tea Gardens of Munnar",
            "Chokramudi Peak",
            "Blossom Hydel Park",
            "Mattupetty Dam"
        ],
    
        wildlife: [
            "Nilgiri Langurs",
            "Malabar Giant Squirrels",
            "Various species of birds",
            "Butterflies",
            "Occasional sightings of elephants"
        ],
    
        geography: {
            elevation: "1,700 meters (5,577 ft)",
            mountainRange: "Western Ghats",
            climate: "Cool and misty throughout the year",
            terrain: "Hilly with tea gardens and dense forests"
        },
    
        weatherConditions: {
            summer: "March - May (Pleasant, 15°C - 25°C)",
            monsoon: "June - August (Heavy rains, misty atmosphere)",
            winter: "September - February (Cool, 10°C - 20°C, best time to visit)"
        },
    
        safetyPrecautions: [
            "Wear comfortable shoes for walking on uneven terrain",
            "Be cautious while standing near the edges of the viewpoint",
            "Visit early morning or late evening for the best experience",
            "Carry water and light snacks",
            "Avoid visiting during heavy rains as roads may become slippery"
        ],
    
        culturalSignificance: "Pothamedu View Point is known for its connection to Munnar’s rich tea plantation history. It offers a glimpse into Kerala’s lush landscape and is an important attraction for eco-tourism."
    
    },
    {
        title: "Tea Museum",
        description: "The Tea Museum in Munnar, also known as the Tata Tea Museum, is a tribute to the rich tea heritage of the region. It showcases the history, evolution, and significance of tea plantations in Munnar, offering visitors an insight into the tea-making process. The museum houses old machinery, photographs, and artifacts that depict the legacy of tea cultivation. Visitors can also witness live demonstrations of tea processing and taste freshly brewed tea. This museum is a must-visit for tea enthusiasts and history lovers.",
        src: "../assets/tea-museum.png",
    
        location: "Munnar, Kerala",
        latitude: 10.0889,
        longitude: 77.0596,
    
        bestTimeToVisit: "The best time to visit the Tea Museum is from September to May, when the weather is pleasant for exploring Munnar’s scenic beauty. The monsoon months (June to August) bring lush greenery, adding charm to the surroundings.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (108 km away)",
            "Nearest Railway Station: Aluva Railway Station (120 km away)",
            "By Road: Located just 2 km from Munnar town, easily accessible by taxi or auto-rickshaw"
        ],
    
        entryFee: "₹75 for adults, ₹35 for children",
        timings: "9:00 AM - 5:00 PM (Closed on Mondays)",
    
        activities: [
            "Tea Tasting",
            "Exploring the History of Tea Cultivation",
            "Watching the Tea Processing Demonstration",
            "Photography",
            "Learning about Antique Tea Machinery"
        ],
    
        nearbyAttractions: [
            "Pothamedu View Point",
            "Blossom Hydel Park",
            "Mattupetty Dam",
            "Eravikulam National Park",
            "Kolukkumalai Tea Estate"
        ],
    
        wildlife: [
            "Various species of birds",
            "Butterflies",
            "Occasional sightings of Nilgiri Tahr in surrounding areas"
        ],
    
        geography: {
            elevation: "1,450 meters (4,757 ft)",
            mountainRange: "Western Ghats",
            climate: "Cool and misty throughout the year",
            terrain: "Hilly with tea plantations"
        },
    
        weatherConditions: {
            summer: "March - May (Pleasant, 15°C - 25°C)",
            monsoon: "June - August (Heavy rains, lush greenery)",
            winter: "September - February (Cool, 10°C - 20°C, best time to visit)"
        },
    
        safetyPrecautions: [
            "Wear comfortable footwear as there may be walking involved",
            "Follow museum guidelines while exploring exhibits",
            "Avoid touching fragile artifacts",
            "Visit in the morning to avoid large crowds",
            "Carry water and light snacks if needed"
        ],
    
        culturalSignificance: "The Tea Museum highlights the historical and economic importance of tea plantations in Munnar. It celebrates the legacy of the British-era tea industry and the hard work of plantation workers who contributed to Munnar’s tea empire."
    
    },
    {
        title: "Vattavada",
        description: "Vattavada, often referred to as the 'Vegetable Bowl of Kerala,' is a serene village located near Munnar. Nestled in the Western Ghats, this picturesque destination is known for its terraced farms, growing a variety of fruits and vegetables such as strawberries, carrots, and plums. Unlike other parts of Munnar, Vattavada enjoys a unique ecosystem with a cooler climate and abundant sunshine, making it perfect for trekking and nature exploration. This untouched paradise is ideal for travelers seeking solitude and a deep connection with nature.",
        src: "../assets/vattavada.jpg",
    
        location: "Munnar, Kerala",
        latitude: 10.1723,
        longitude: 77.2154,
    
        bestTimeToVisit: "The best time to visit Vattavada is from September to May when the weather is cool and perfect for sightseeing, trekking, and exploring farms. The monsoon season (June - August) enhances the greenery but can make travel slightly challenging.",
    
        howToReach: [
            "Nearest Airport: Cochin International Airport (130 km away)",
            "Nearest Railway Station: Aluva Railway Station (140 km away)",
            "By Road: Well-connected via Munnar (45 km away) with taxis and private vehicles available"
        ],
    
        entryFee: "No entry fee required",
        timings: "Open throughout the day",
    
        activities: [
            "Trekking through scenic trails",
            "Exploring vegetable and fruit farms",
            "Camping amidst nature",
            "Photography of breathtaking landscapes",
            "Bird Watching",
            "Interacting with tribal communities"
        ],
    
        nearbyAttractions: [
            "Top Station",
            "Mattupetty Dam",
            "Pampadum Shola National Park",
            "Kolukkumalai Tea Estate",
            "Eravikulam National Park"
        ],
    
        wildlife: [
            "Nilgiri Tahr",
            "Indian Gaurs",
            "Malabar Giant Squirrel",
            "Varieties of exotic birds",
            "Leopards (rare sightings)"
        ],
    
        geography: {
            elevation: "2,100 meters (6,890 ft)",
            mountainRange: "Western Ghats",
            climate: "Cool and pleasant throughout the year",
            terrain: "Terraced farmlands with rolling hills and forests"
        },
    
        weatherConditions: {
            summer: "March - May (Mild, 15°C - 25°C)",
            monsoon: "June - August (Heavy rains, lush greenery)",
            winter: "September - February (Cool, 5°C - 20°C, ideal for travel)"
        },
    
        safetyPrecautions: [
            "Wear comfortable trekking shoes for uneven terrain",
            "Carry warm clothes, as nights can be chilly",
            "Avoid littering to preserve the pristine environment",
            "Stay hydrated and carry light snacks",
            "If trekking, inform a local guide about your plans"
        ],
    
        culturalSignificance: "Vattavada is home to indigenous tribal communities who have preserved their traditional way of farming for generations. The region's eco-friendly practices and sustainable agriculture make it a unique and culturally rich destination."
    
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


