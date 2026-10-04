// Mobile navigation menu toggle
const menuToggleBtn = document.querySelector('.menu-toggle');
const navWrapper = document.querySelector('.nav-wrapper');

menuToggleBtn?.addEventListener('click', () => {
  if (navWrapper) {
    navWrapper.classList.toggle('mobile-open');
    const isOpen = navWrapper.classList.contains('mobile-open');
    menuToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuToggleBtn.innerHTML = isOpen ? '✕' : '☰';
  } else {
    document.querySelector('.main-nav')?.classList.toggle('mobile-open');
    document.querySelector('.auth-links')?.classList.toggle('mobile-open');
  }
});

// Close mobile navigation menu on link click
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (navWrapper?.classList.contains('mobile-open')) {
      navWrapper.classList.remove('mobile-open');
      menuToggleBtn?.setAttribute('aria-expanded', 'false');
      if (menuToggleBtn) menuToggleBtn.innerHTML = '☰';
    }
  });
});

// Password Visibility Toggle
document.querySelectorAll('.toggle-password-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling || btn.parentElement.querySelector('input');
    if (!input) return;
    
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    
    if (isPassword) {
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;
      btn.setAttribute('aria-label', 'Hide password');
    } else {
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
      btn.setAttribute('aria-label', 'Show password');
    }
  });
});

// Social Login Demo Handlers
document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = btn.innerText.trim();
    alert(`Connecting to ${provider} authentication...`);
  });
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