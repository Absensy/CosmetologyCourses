const track = document.getElementById('sliderTrack');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;
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
// Навесить обработчики
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    goToSlide(parseInt(e.target.dataset.index));
  });
});
// Адаптивность
window.addEventListener('resize', updateSlider);
