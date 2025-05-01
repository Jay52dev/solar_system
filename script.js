// Generate random stars
document.addEventListener('DOMContentLoaded', function () {
  const starsContainer = document.querySelector('.stars');
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random size
    const size = Math.random() * 3;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random twinkle animation delay
    star.style.animationDelay = `${Math.random() * 5}s`;

    starsContainer.appendChild(star);
  }
});