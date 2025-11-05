// CALENDLY – AUTO LOAD
document.addEventListener('DOMContentLoaded', () => {
    const widget = document.querySelector('.calendly-inline-widget');
    if (widget) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }
});

// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');
const resultsSection = document.querySelector('#results');

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            const suffix = counter.dataset.suffix || '';
            let count = 0;
            const inc = target / 80;
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

if (resultsSection) observer.observe(resultsSection);
