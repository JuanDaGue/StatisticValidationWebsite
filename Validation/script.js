// Toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Scroll to top when home button is clicked
document.getElementById('home-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    location.hash='#home'
});
