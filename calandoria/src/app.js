document.addEventListener('DOMContentLoaded', () => {

  /* ─── Lucide icons ─── */
  if (typeof lucide !== 'undefined') lucide.createIcons();

  /* ─── Scroll reveal animations ─── */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('visible');
          el.classList.remove('hidden-above');
        } else {
          const rect = el.getBoundingClientRect();
          if (rect.top < 0) {
            el.classList.add('hidden-above');
            el.classList.remove('visible');
          } else {
            el.classList.remove('visible');
            el.classList.remove('hidden-above');
          }
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ─── Active nav link ─── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const hrefFile = href.split('/').pop();
    if (
      hrefFile === currentPath ||
      (currentPath === '' && hrefFile === 'index.html') ||
      (currentPath === '/' && hrefFile === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  /* ─── Contact form ─── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formEl = document.getElementById('formFields');
      const successEl = document.getElementById('formSuccess');
      if (formEl && successEl) {
        formEl.style.display = 'none';
        successEl.style.display = 'block';
      }
    });
  }

});
