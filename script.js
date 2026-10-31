/**
 * =========================================================
 * PERSONAL PORTFOLIO - JAVASCRIPT
 * Author: Syed Mahammad Irfan
 * Features:
 *  1. Mobile Navigation Toggle & Auto-Close
 *  2. Header Scroll Effect (Backdrop & Shadow)
 *  3. Scroll Spy (Active Navigation Links)
 *  4. Client-Side Contact Form Handler (Honest fallback & mailto)
 *  5. Dynamic Copyright Year
 * =========================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Mobile Navigation Toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when any navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // --- 2. Header Scroll Effect ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // --- 3. Scroll Spy (Highlight Active Nav Link) ---
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink(); // Initial check on page load

  // --- 4. Contact Form Handler ---
  // Notice: Since this portfolio website is a static site (HTML/CSS/JS) without a backend,
  // this script captures the inputs and prepares a pre-filled direct mailto link.
  const contactForm = document.getElementById('contact-form');
  const statusModal = document.getElementById('form-status-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalMailtoBtn = document.getElementById('modal-mailto-btn');
  const targetEmail = 'syedirfan61944@gmail.com'; // Change to your preferred email address

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-sender-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill out all fields before sending.');
        return;
      }

      // Prepare mailto link with encoded subject and body
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
      const mailtoBody = encodeURIComponent(
        `Hi Syed,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
      );
      const mailtoUrl = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Update modal link & display modal
      if (modalMailtoBtn && statusModal) {
        modalMailtoBtn.setAttribute('href', mailtoUrl);
        statusModal.style.display = 'flex';
      } else {
        // Fallback directly to mailto
        window.location.href = mailtoUrl;
      }
    });
  }

  // Close modal when close button is clicked
  if (modalCloseBtn && statusModal) {
    modalCloseBtn.addEventListener('click', () => {
      statusModal.style.display = 'none';
    });
  }

  // --- 5. Dynamic Footer Copyright Year ---
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

});

