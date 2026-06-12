const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

reveals.forEach(el => {
  observer.observe(el);

  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.9) {
    el.classList.add('visible');
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  if (location.pathname.split('/').pop() === link.getAttribute('href')) {
    link.classList.add('active');
  }
});

/* SCALEUP ANIMATION */

const scaleupBanner = document.querySelector(".scaleup-banner");

if (scaleupBanner) {
  const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        scaleObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.25
  });

  scaleObserver.observe(scaleupBanner);
}