document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const randomBgClass = getRandomBackgroundClass();
    body.classList.add(randomBgClass);
});

function getRandomBackgroundClass() {
    const backgrounds = ['background1', 'background2', 'background3']; // Add more background classes if needed
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
}

