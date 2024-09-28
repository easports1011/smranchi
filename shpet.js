function showImage(imageId) {
    // Hide all images
    const images = document.querySelectorAll('.image');
    images.forEach(image => {
        image.classList.remove('active');
    });

    // Show the selected image
    const selectedImage = document.getElementById(imageId);
    if (selectedImage) {
        selectedImage.classList.add('active');
    }
}

// Optionally, you can set a default image to show on page load
document.addEventListener('DOMContentLoaded', () => {
    showImage('image6'); // Default image to show
});


//Health Bar JS
let health = 100;
let mood = 100;
let energy = 100;


function updateBars() {
    
    const healthBar = document.getElementById('health-bar');
    const moodBar = document.getElementById('mood-bar');
    const energyBar = document.getElementById('energy-bar');

    healthBar.style.width = health + '%';
    moodBar.style.width = mood + '%';
    energyBar.style.width = energy + '%';
            
    updateBarColor(healthBar, health);
    updateBarColor(moodBar, mood);
    updateBarColor(energyBar, energy);
}

function increaseHealth() {
    if (health < 100 && (health + 10) <101) health += 10;
    else if(health < 100 && health > 90) health = 100;
    updateBars();
}

function increaseMood() {
    if (mood < 100 && (mood + 10) <101) mood += 10;
    else if(mood < 100 && mood > 90) mood = 100;
    updateBars();
}

function increaseEnergy() {
    if (energy < 100 && (energy + 10) <101) energy += 10;
    else if(energy < 100 && energy > 90) energy = 100;
    updateBars();
}

function decreaseBars() {
    if (health > 0) health -= 0.5;
    if (mood > 0) mood -= 0.5;
    if (energy > 0) energy -= 0.5;
    updateBars();
}

// Update bars every second
setInterval(decreaseBars, 1000);

function updateBarColor(bar, value) {
    let color;
    if (value > 75) {
        color = '#4caf50'; // Green
    } else if (value > 25) {
        color = '#ff9800'; // Orange
    } else {
        color = '#f44336'; // Red
    }
    bar.style.backgroundColor = color;
}

// Initial update
updateBars();


//Toast JS Start

function showToast(toastId, timer) {

    var allToasts = document.querySelectorAll('.toast');

    // Hide all toasts
    allToasts.forEach(toast => {
        toast.classList.remove('show');
    });
                
    const toast = document.getElementById(toastId);
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, timer);
}

document.getElementById('good-boi-btn').addEventListener('click', () => showToast('good-boi-toast', 3000));
document.getElementById('spank-btn').addEventListener('click', () => showToast('spank-toast', 1500));
document.getElementById('health-btn').addEventListener('click', () => showToast('health-toast', 1500));
document.getElementById('mood-btn').addEventListener('click', () => showToast('mood-toast', 1500));
//Toast JS Ends

//His Background 
function changeBackground(location) {
    const article = document.querySelector('.article');
    switch (location) {
        case 'park':
            article.style.backgroundImage = "url('park.png')";
            article.style.backgroundColor = "transparent"; // Override default background color
            break;
        case 'room':
            article.style.backgroundImage = "url('room.jpg')";
            article.style.backgroundColor = "transparent"; // Override default background color
            break;
        case 'company':
            article.style.backgroundImage = "url('company.jpg')";
            article.style.backgroundColor = "transparent"; // Override default background color
            break;
        case 'original':
            article.style.backgroundImage = "none"; // Remove any background image
            article.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Reset to original background color
            break;
        default:
            article.style.backgroundImage = "none"; // Remove any background image
            article.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Reset to original background color
            break;
    }
    
    article.style.backgroundSize = "cover"; // Ensure the image covers the area
    article.style.backgroundPosition = "center"; // Center the image
    article.style.backgroundRepeat = "no-repeat"; // Prevent image repetition
}


