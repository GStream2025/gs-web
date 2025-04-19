document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("activo");
    });
  }

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

  const mostrarInfoBtn = document.getElementById("mostrarInfoBtn");
  const infoExtra = document.getElementById("infoExtra");
  if (mostrarInfoBtn && infoExtra) {
    mostrarInfoBtn.addEventListener("click", () => {
      const visible = infoExtra.classList.contains("mostrar");
      if (!visible) {
        infoExtra.style.display = "block";
        setTimeout(() => infoExtra.classList.add("mostrar"), 50);
      } else {
        infoExtra.classList.remove("mostrar");
        setTimeout(() => {
          infoExtra.style.display = "none";
        }, 400);
      }
    });
  }

  const botonFaq = document.getElementById("botonFaq");
  const faqContainer = document.getElementById("faqContainer");
  if (botonFaq && faqContainer) {
    botonFaq.addEventListener("click", () => {
      faqContainer.classList.toggle("activo");
    });
  }

  const preguntas = document.querySelectorAll(".pregunta");
  preguntas.forEach(pregunta => {
    pregunta.addEventListener("click", () => {
      const respuesta = pregunta.nextElementSibling;
      if (respuesta) {
        respuesta.classList.toggle("visible");
      }
    });
  });

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

  const fondoAnimado = document.createElement("div");
  fondoAnimado.className = "fondo-animado";
  document.body.prepend(fondoAnimado);
  for (let i = 0; i < 12; i++) {
    const capa = document.createElement("div");
    capa.className = "capa";
    capa.style.animationDelay = `${i * 1.5}s`;
    fondoAnimado.appendChild(capa);
  }

  const noti = document.createElement("div");
  noti.className = "notificacion-sorteo";
  noti.textContent = "🎉 ¡Nuevo sorteo cada 100 seguidores!";
  document.body.appendChild(noti);
  setTimeout(() => {
    noti.style.opacity = "1";
    noti.style.transform = "translateY(0)";
  }, 800);
  setTimeout(() => {
    noti.style.opacity = "0";
    noti.style.transform = "translateY(-20px)";
  }, 7000);

  const whatsapp = document.createElement("a");
  whatsapp.href = "https://wa.me/59893589404";
  whatsapp.className = "whatsapp-float";
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener noreferrer";
  const icono = document.createElement("img");
  icono.src = "assets/img/whatsapp_icono.png";
  icono.alt = "WhatsApp";
  icono.style.width = "60px";
  icono.style.height = "60px";
  whatsapp.appendChild(icono);
  document.body.appendChild(whatsapp);
});
