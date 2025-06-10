
document.addEventListener('DOMContentLoaded', () => {
    
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update URL without refreshing
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          window.location.hash = targetId;
        }
      }
    });
  });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('#accueil');
  const heroHeight = heroSection.offsetHeight;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > heroHeight * 0.8) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-title, .project-card, .skill-item');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementPosition < windowHeight - elementVisible) {
        element.classList.add('animate');
      }
    });
  };
  
  // Initialize scroll animations
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
  
  // Typewriter effect for hero title
  const titleElement = document.querySelector('.title span');
  const titles = ['Développeur', 'Backend', 'Spring Boot', 'Java'];
  let currentTitleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  const typeWriter = () => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isDeleting) {
      titleElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      titleElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(typeWriter, typingSpeed);
  };
  
  // Start typewriter effect after initial animation
  setTimeout(typeWriter, 2000);
  
  // Form submission handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Simulate form submission (replace with actual AJAX call)
      console.log('Form submitted:', data);
      
      // Show success message
      const submitButton = contactForm.querySelector('button[type="submit"]');
      submitButton.innerHTML = '<i class="fas fa-check"></i> Message envoyé';
      submitButton.style.backgroundColor = 'var(--success)';
      
      // Reset form after delay
      setTimeout(() => {
        contactForm.reset();
        submitButton.innerHTML = 'Envoyer';
        submitButton.style.backgroundColor = '';
      }, 3000);
    });
  }
  
  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const link = card.querySelector('.project-link');
    
    card.addEventListener('mouseenter', () => {
      link.style.transform = 'translateX(5px)';
    });
    
    card.addEventListener('mouseleave', () => {
      link.style.transform = 'translateX(0)';
    });
  });
});

// Ajouter au début du DOMContentLoaded
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

