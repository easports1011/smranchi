// Popup
const inputElement = document.getElementById('custom-input');
const popup = document.getElementById('popup');
const computedStyle = window.getComputedStyle(popup);
const overlay = document.getElementById('overlay');

// Define the key that triggers the popup
const triggerKey = 'shubhiandcoco';

inputElement.addEventListener('input', () => {
    const inputText = inputElement.value.trim();
    if (inputText === triggerKey) {
        popup.classList.add('show');
        overlay.style.display = 'block';
    } else {
        popup.classList.remove('show');
    }
});


// Close popup when clicking outside of it
document.addEventListener('click', (event) => {
    if (!popup.contains(event.target) && !inputElement.contains(event.target)) {
        popup.classList.remove('show');
        overlay.style.display = 'none';
        inputElement.value = ""; // Optionally clear the input
    }
});