  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  
  // Close menu when clicking a link
  const links = navLinks.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  }
  
  // Animate planets
  document.addEventListener('DOMContentLoaded', () => {
    // Animation speeds for planets (in seconds)
    const speeds = {
      mercury: 10,
      venus: 15,
      earth: 20,
      mars: 25,
      jupiter: 35,
      saturn: 45,
      uranus: 60,
      neptune: 75
    };
    
    // Set animation durations
    for (const planet in speeds) {
      const elem = document.getElementById(planet);
      if (elem) {
        elem.style.animationDuration = `${speeds[planet]}s`;
      }
    }
    
    // Interactive planet info
    const planetCards = document.querySelectorAll('.planet-card');
    planetCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('active');
      });
      
      card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
      });
    });
  });
