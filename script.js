// Smooth-center any hash target (works with scroll-snap)
function smoothScrollToHashTarget() {
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
}
window.addEventListener('load', smoothScrollToHashTarget);
window.addEventListener('hashchange', smoothScrollToHashTarget);

// Make hero pills scroll smoothly to the specific role card
document.querySelectorAll('.ai-role-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      history.pushState(null, '', href);
    }
  });
});

// COUNTER ANIMATION for "Our Promise"
const counters = document.querySelectorAll('.counter');
const resultsSection = document.querySelector('#results');

if (resultsSection) {
  const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          counters.forEach(counter => {
              const target = +counter.dataset.target;
              const suffix = counter.dataset.suffix || '';
              let count = 0;
              const inc = Math.max(1, target / 80);
              const timer = setInterval(() => {
                  count += inc;
                  if (count >= target) {
                      counter.textContent = target + suffix;
                      clearInterval(timer);
                  } else {
                      counter.textContent = Math.floor(count) + suffix;
                  }
              }, 25);
          });
          observer.unobserve(resultsSection);
      }
  }, { threshold: 0.5 });

  observer.observe(resultsSection);
}
