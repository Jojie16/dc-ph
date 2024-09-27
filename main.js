
const playButtons = document.querySelectorAll('.play-button');
const modal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const iframe = document.getElementById('videoFrame');
const navbar = document.getElementById('navbar');

// Open modal for each movie
playButtons.forEach(button => {
    button.addEventListener('click', function() {
        const movieElement = this.closest('.movie');
        const videoUrl = movieElement.getAttribute('data-video-url');
        iframe.src = videoUrl;
        modal.style.display = 'block';
        navbar.style.display = 'none';
    });
});
// Close modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    navbar.style.display = 'flex';
    iframe.src = '';
});
// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        navbar.style.display = 'flex';
        iframe.src = ''; 
    }
});
// FOR LATEST
document.querySelector('.play-button').addEventListener('click', function() {
    const videoUrl = this.getAttribute('data-video-url');
    // window.open(videoUrl, '_blank');
    iframe.src = videoUrl;
    modal.style.display = 'block';
    navbar.style.display = 'none';
    
});

const menuBtn = document.getElementById('hamburger');
const menuLinks = document.getElementById('menuLinks');

// MOBILE NAV
menuBtn.addEventListener('click', function(){
    if (menuLinks.style.display === 'flex') {
        menuLinks.style.display = 'none';
    } else {
        menuLinks.style.display = 'flex';
    }
});