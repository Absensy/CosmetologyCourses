document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mobileMenu");
    const openBtn = document.getElementById("openMenu"); // бургер
    const closeBtn = document.getElementById("closeMenu"); // крестик
    const overlay = document.getElementById("menuOverlay");
    const burgerBtn = document.querySelector('.burger-adap');
    const mobileMenu = document.getElementById('mobileMenu');

    burgerBtn.addEventListener('click', () => { mobileMenu.classList.add('active');});

    closeBtn.addEventListener('click', () => { mobileMenu.classList.remove('active');});
    function openMenu() {
      menu.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden"; // блокируем прокрутку
    }

    function closeMenu() {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = ""; // возвращаем прокрутку
    }

    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  });