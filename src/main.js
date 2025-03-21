// Animaciones con Intersection Observer
const animate = document.querySelectorAll(".animate__animated");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const animation = element.getAttribute("data-animate");
      element.classList.add("animate__animated", animation);

      // Remover las clases de animación al finalizar la animación
      element.addEventListener(
        "animationend",
        () => {
          element.classList.remove("animate__animated", animation);
        },
        { once: true }
      ); // Asegura que el evento solo se ejecute una vez
    }
  });
});

animate.forEach((element) => {
  observer.observe(element);
});

// Navbar
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

new VenoBox({
  selector: ".events-gallery",
});
