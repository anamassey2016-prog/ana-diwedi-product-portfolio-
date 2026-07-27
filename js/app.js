/* ==========================================================================
   Ana Diwedi Portfolio - Main Application Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Switcher (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('ana_portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ana_portfolio_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.innerHTML = '☀️'; // Switch to light
      themeToggleBtn.setAttribute('title', 'Switch to Light Theme');
    } else {
      themeIcon.innerHTML = '🌙'; // Switch to dark
      themeToggleBtn.setAttribute('title', 'Switch to Dark Theme');
    }
  }

  // 2. Mobile Menu Toggle
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  // 3. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // 4. Contact Form Validation & Submission Feedback
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Message...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        if (formFeedback) {
          formFeedback.style.display = 'block';
          formFeedback.innerHTML = '✨ Thank you! Your message has been sent successfully. I will get back to you shortly.';
          setTimeout(() => {
            formFeedback.style.display = 'none';
          }, 6000);
        }
      }, 1200);
    });
  }
});

// Clean helper function for direct PDF access
function downloadResume() {
  window.open('assets/resume.pdf', '_blank');
}
