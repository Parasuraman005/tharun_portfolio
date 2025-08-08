// Video Editor Portfolio JavaScript
window.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded.');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Welcome message
    setTimeout(() => {
        alert('Welcome to R THARUN Portfolio!');
    }, 500);

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const track = carousel.querySelector('.carousel-track');
        const leftArrow = carousel.querySelector('.carousel-arrow.left');
        const rightArrow = carousel.querySelector('.carousel-arrow.right');
        const videoItems = carousel.querySelectorAll('.video-item');

        function getScrollAmount() {
            const trackWidth = track.clientWidth;
            const itemWidth = videoItems[0] ? videoItems[0].offsetWidth : trackWidth / 3;
            const gap = 32; // gap between items
            
            // Calculate how many items fit in the viewport
            const itemsPerView = Math.floor(trackWidth / (itemWidth + gap));
            const scrollAmount = (itemWidth + gap) * Math.max(1, itemsPerView);
            
            return scrollAmount;
        }

        function scrollLeft() {
            const amount = getScrollAmount();
            track.scrollBy({ left: -amount, behavior: 'smooth' });
        }

        function scrollRight() {
            const amount = getScrollAmount();
            track.scrollBy({ left: amount, behavior: 'smooth' });
        }

        // Add event listeners
        if (leftArrow) {
            leftArrow.addEventListener('click', scrollLeft);
        }
        if (rightArrow) {
            rightArrow.addEventListener('click', scrollRight);
        }

        // Handle window resize
        window.addEventListener('resize', () => {
            // Recalculate on resize
        });
    }
}); 