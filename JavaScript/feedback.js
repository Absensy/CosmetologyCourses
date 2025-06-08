  document.addEventListener('DOMContentLoaded', function () {
    const feedbackBtn = document.getElementById('feedback-icon');
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.querySelector('.close-btn-modal');
    const form = document.getElementById('feedback-form');

    // Открыть
    feedbackBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });

    // Закрыть по кнопке
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // Закрыть по фону
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });

    // Отправка формы
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Спасибо за отзыв!');
      form.reset();
      modal.classList.remove('show');
    });
  });