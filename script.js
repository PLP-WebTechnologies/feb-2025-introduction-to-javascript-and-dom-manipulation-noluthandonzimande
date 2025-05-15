document.addEventListener('DOMContentLoaded', function() {
    // Flower facts array
    const flowerFacts = [
        "Sunflowers track the sun's movement across the sky (heliotropism).",
        "The world's largest flower is the Rafflesia, which can grow up to 3 feet wide!",
        "Chrysanthemums are associated with the sun in Chinese culture.",
        "Orchids have the smallest seeds of all flowering plants.",
        "The lotus flower can regulate its temperature like warm-blooded animals."
    ];

    // Change flower fact text
    const changeFactBtn = document.getElementById('change-fact-btn');
    const flowerFact = document.getElementById('flower-fact');
    
    changeFactBtn.addEventListener('click', function() {
        const randomFact = flowerFacts[Math.floor(Math.random() * flowerFacts.length)];
        flowerFact.textContent = randomFact;
    });

    // Modify flower card styles
    const changeStyleBtn = document.getElementById('change-style-btn');
    const flowerDisplay = document.getElementById('flower-display');
    const flowers = [
        { name: "Rose", desc: "Symbol of love and passion", color: "#ff6b6b", bg: "#fff5f5" },
        { name: "Lavender", desc: "Represents purity, silence, and calmness", color: "#b399d4", bg: "#f8f5ff" },
        { name: "Sunflower", desc: "Symbol of adoration, loyalty, and longevity", color: "#ffd166", bg: "#fff9e6" }
    ];
    let currentFlower = 0;
    
    changeStyleBtn.addEventListener('click', function() {
        currentFlower = (currentFlower + 1) % flowers.length;
        const flower = flowers[currentFlower];
        flowerDisplay.innerHTML = `<h2>${flower.name}</h2><p>${flower.desc}</p>`;
        flowerDisplay.style.backgroundColor = flower.bg;
        flowerDisplay.style.color = flower.color;
        flowerDisplay.style.border = `2px solid ${flower.color}`;
    });

    // Toggle seasonal flower display
    const toggleFlowerBtn = document.getElementById('toggle-flower-btn');
    const seasonalFlower = document.getElementById('seasonal-flower');
    let isVisible = true;
    
    toggleFlowerBtn.addEventListener('click', function() {
        if (isVisible) {
            seasonalFlower.style.display = "none";
            toggleFlowerBtn.textContent = "Show Seasonal Flower";
        } else {
            seasonalFlower.style.display = "block";
            toggleFlowerBtn.textContent = "Hide Seasonal Flower";
        }
        isVisible = !isVisible;
    });
});