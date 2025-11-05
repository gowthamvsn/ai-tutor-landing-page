// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            let count = 0;
            const inc = target / 100;
            const timer = setInterval(() => {
                count += inc;
                if (count >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(count);
                }
            }, 20);
        });
        observer.unobserve(entries[0].target);
    }
});
observer.observe(document.querySelector('#results'));

// SLIDER DOTS
const slider = document.getElementById('proofSlider');
const dotsContainer = document.getElementById('sliderDots');
slider.querySelectorAll('.proof-card').forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'slider-dot';
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        slider.scrollTo({ left: slider.children[i].offsetLeft, behavior: 'smooth' });
    });
    dotsContainer.appendChild(dot);
});
slider.addEventListener('scroll', () => {
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    let idx = 0;
    Array.from(slider.children).forEach((card, i) => {
        if (slider.scrollLeft >= card.offsetLeft - 50) idx = i;
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
});


