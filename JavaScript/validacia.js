document.getElementById('courseForm').addEventListener('submit', function(e) {
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const email = this.email.value.trim();
  let valid = true;
  // Имя и телефон обязательны
  if (!name || name.length < 2) {
    alert("Пожалуйста, введите корректное имя.");
    valid = false;
  }
  if (!phone.match(/^\+?\d{7,15}$/)) {
    alert("Пожалуйста, введите корректный телефон.");
    valid = false;
  }
  // Email, если введён, должен быть корректным
  if (email && !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    alert("Пожалуйста, введите корректный email.");
    valid = false;
  }
  if (!valid) e.preventDefault();
});