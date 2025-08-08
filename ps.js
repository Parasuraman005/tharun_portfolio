window.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const leftArrow = carousel.querySelector('.carousel-arrow.left');
    const rightArrow = carousel.querySelector('.carousel-arrow.right');
    const projectItem = carousel.querySelector('.carousel-track > *');
    let scrollAmount = projectItem ? projectItem.offsetWidth + 32 : 350; // 32px gap

    leftArrow.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    rightArrow.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    window.addEventListener('resize', () => {
      scrollAmount = projectItem ? projectItem.offsetWidth + 32 : 350;
    });
  }
});