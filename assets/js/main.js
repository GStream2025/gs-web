document.addEventListener("DOMContentLoaded", () => {
  // MENÚ HAMBURGUESA
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("activo");
    });
  }

  // ANIMACIONES AL HACER SCROLL
  const elementosAnimados = document.querySelectorAll(".animado");

  const mostrarElemento = () => {
    const scrollTop = window.pageYOffset;

    elementosAnimados.forEach(el => {
      const offsetTop = el.offsetTop;
      if (scrollTop > offsetTop - window.innerHeight + 100) {
        el.classList.add("visible");
      }
    });
  };

  mostrarElemento();
  window.addEventListener("scroll", mostrarElemento);

  // BOTÓN "CONTAME MÁS"
  const mostrarInfoBtn = document.getElementById("mostrarInfoBtn");
  const infoExtra = document.getElementById("infoExtra");

  if (mostrarInfoBtn && infoExtra) {
    mostrarInfoBtn.addEventListener("click", () => {
      const visible = infoExtra.style.display === "block";

      if (!visible) {
        infoExtra.style.display = "block";
        infoExtra.style.animation = "fadeInUp 0.7s ease forwards";
        infoExtra.style.opacity = "1";
      } else {
        infoExtra.style.animation = "fadeOutDown 0.5s ease forwards";
        setTimeout(() => {
          infoExtra.style.display = "none";
        }, 400);
      }
    });
  }

  // BOTÓN FAQ flotante
  const botonFaq = document.getElementById("botonFaq");
  const faqContainer = document.getElementById("faqContainer");

  if (botonFaq && faqContainer) {
    botonFaq.addEventListener("click", () => {
      faqContainer.classList.toggle("activo");
    });
  }

  // PREGUNTAS FRECUENTES – Desplegables
  const preguntas = document.querySelectorAll(".pregunta");

  preguntas.forEach(pregunta => {
    pregunta.addEventListener("click", () => {
      const respuesta = pregunta.nextElementSibling;
      if (respuesta) {
        respuesta.classList.toggle("visible");
      }
    });
  });

  // 🌙 MODO OSCURO
  const toggleThemeBtn = document.getElementById("toggleTheme");
  const body = document.body;

  if (localStorage.getItem("modo") === "oscuro") {
    body.classList.add("modo-oscuro");
  }

  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
      body.classList.toggle("modo-oscuro");
      localStorage.setItem("modo", body.classList.contains("modo-oscuro") ? "oscuro" : "claro");
    });
  }

  // 🌊 EFECTO FONDO ANIMADO AZUL
  const fondoAnimado = document.createElement("div");
  fondoAnimado.className = "fondo-animado";
  document.body.prepend(fondoAnimado);

  for (let i = 0; i < 12; i++) {
    const capa = document.createElement("div");
    capa.className = "capa";
    capa.style.animationDelay = `${i * 1.5}s`;
    fondoAnimado.appendChild(capa);
  }
});
