window.addEventListener('load', function () {
const popup = document.getElementById('supportPopup');
const closeBtn = document.getElementById('closeSupport');

// Если ранее не закрывали — показываем
if (!localStorage.getItem('supportPopupClosed')) {
  popup.style.display = 'block';
}

// Закрытие окна
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  localStorage.setItem('supportPopupClosed', 'true');
});
});