document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack2');
  const dots = document.querySelectorAll('.dot2');
  const prevBtn = document.getElementById('prev2');
  const nextBtn = document.getElementById('next2');
  let currentIndex = 0;
  let autoScrollInterval;
  function updateSlider() {
    const slideWidth = document.querySelector('.slide').offsetWidth;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    updateSlider();
  }
  function prevSlide() {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateSlider();
  }
  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }
  function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 4000); // каждые 4 секунды
  }
  function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
  }
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoScroll();
  });
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoScroll();
  });
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      goToSlide(parseInt(e.target.dataset.index));
      resetAutoScroll();
    });
  });
  window.addEventListener('resize', updateSlider);
  // начальная инициализация
  updateSlider();
  startAutoScroll();
});
