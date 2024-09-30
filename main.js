
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

// JSON FETCH FILE
document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector("main");

    // Load video data from JSON
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            // Render videos dynamically
            data.forEach(video => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');
                movieElement.dataset.videoUrl = video.url;

                movieElement.innerHTML = `
                    <div class="img-container">
                        <img src="${video.image}" alt="${video.title}">
                        ${video.badgeDubUnreleased ? `<span class="badgeDubUnreleased">${video.badgeDubUnreleased}</span>` : ''}
                        ${video.badge ? `<span class="badge-dub">${video.badge}</span>` : ''}
                    </div>
                    <div class="play-button"></div>
                    <div class="movie-info">
                        <h3>${video.titleNumber}</h3>
                    </div>
                    <div class="overview">
                        <h3>${video.title}</h3>
                        <p>${video.description}</p>
                    </div>
                `;


                movieElement.querySelector('.play-button').addEventListener('click', function () {
                    openModal(video.url);
                });

                videoContainer.appendChild(movieElement);
            });
        })
        .catch(error => console.error('Error loading videos:', error));

    // Modal functionality
    const modal = document.getElementById("videoModal");
    const closeModalBtn = document.getElementById("closeModal");
    const videoFrame = document.getElementById("videoFrame");
    const playButtons = document.querySelectorAll('.play-button');
    

    function openModal(videoUrl) {
        modal.style.display = "block";
        navbar.style.display = 'none';
        videoFrame.src = videoUrl;
    }

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
        navbar.style.display = 'flex';
        videoFrame.src = "";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoFrame.src = "";
        }
    });

});
