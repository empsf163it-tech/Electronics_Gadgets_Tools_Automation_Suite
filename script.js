// Mobile navigation menu toggle
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelector('.main-nav')?.classList.toggle('mobile-open');
  document.querySelector('.auth-links')?.classList.toggle('mobile-open');
});

// Demo form submissions
document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Demo form submitted. Connect this form to your authentication backend.');
  });
});

// Active Navigation Menu Highlight on Scroll
const sections = document.querySelectorAll('section[id], main[id]');
const navLinks = document.querySelectorAll('.main-nav a');

function updateActiveNav() {
  let scrollY = window.scrollY || window.pageYOffset;
  let currentSectionId = 'home';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (sectionId && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = sectionId;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === `#${currentSectionId}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('DOMContentLoaded', updateActiveNav);