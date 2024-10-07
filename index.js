// Initial values
let lovePercentage = 75;
let trustPercentage = 80;
let intimacyPercentage = 70;
let vulnerabilityPercentage = 65;
let communicationPercentage = 85;
let compassionPercentage = 75;
let angerPercentage = 20;
let resentmentPercentage = 15;
let jealousyPercentage = 10;
let contemptPercentage = 5;
let regretPercentage = 0;

// Function to update the displayed values on the HTML page
function updateDisplay() {
    document.getElementById('lovePercentage').innerText = lovePercentage;
    document.getElementById('trustPercentage').innerText = trustPercentage;
    document.getElementById('intimacyPercentage').innerText = intimacyPercentage;
    document.getElementById('vulnerabilityPercentage').innerText = vulnerabilityPercentage;
    document.getElementById('communicationPercentage').innerText = communicationPercentage;
    document.getElementById('compassionPercentage').innerText = compassionPercentage;
    document.getElementById('angerPercentage').innerText = angerPercentage;
    document.getElementById('resentmentPercentage').innerText = resentmentPercentage;
    document.getElementById('jealousyPercentage').innerText = jealousyPercentage;
    document.getElementById('contemptPercentage').innerText = contemptPercentage;
    document.getElementById('regretPercentage').innerText = regretPercentage;
}

// Positive event function
function positiveEvent() {
    // Increase positive emotions
    lovePercentage += 10;
    trustPercentage += 5;
    intimacyPercentage += 5;
    vulnerabilityPercentage += 3;
    communicationPercentage += 4;
    compassionPercentage += 5;

    // Decrease negative emotions
    angerPercentage = Math.max(0, angerPercentage - (Math.floor(Math.random() * 3) + 3)); // Decrease by 3-5%
    resentmentPercentage = Math.max(0, resentmentPercentage - (Math.floor(Math.random() * 3) + 3)); // Decrease by 3-5%
    jealousyPercentage = Math.max(0, jealousyPercentage - (Math.floor(Math.random() * 3) + 3)); // Decrease by 3-5%
    contemptPercentage = Math.max(0, contemptPercentage - (Math.floor(Math.random() * 3) + 3)); // Decrease by 3-5%

    updateDisplay();
    console.log("Positive event triggered! Negative emotions decreased.");
}

// Negative event function
function negativeEvent() {
    // Decrease positive emotions
    lovePercentage -= 15;
    trustPercentage -= 10;
    intimacyPercentage -= 10;
    vulnerabilityPercentage -= 5;
    communicationPercentage -= 8;
    compassionPercentage -= 10;

    // Increase negative emotions
    angerPercentage += 5;
    resentmentPercentage += 5;
    jealousyPercentage += 3;
    contemptPercentage += 3;
    regretPercentage += 5;

    updateDisplay();
    console.log("Negative event triggered!");
}

// Initial display update
updateDisplay();
