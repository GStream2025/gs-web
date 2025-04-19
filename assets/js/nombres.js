// Efecto de entrada suave para todos los elementos con la clase "animado"
document.addEventListener("DOMContentLoaded", () => {
  const animados = document.querySelectorAll(".animado");
  animados.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.6s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 100 * i);
  });
});

// Generador de nombres creativos
document.getElementById("generarNombres").addEventListener("click", () => {
  const input = document.getElementById("palabrasClave").value.trim().toLowerCase();
  const resultadosDiv = document.getElementById("resultados");

  if (input === "") {
    resultadosDiv.innerHTML = "<p>Por favor ingresá al menos una palabra clave.</p>";
    return;
  }

  const palabras = input.split(/[\s,]+/).filter(Boolean);
  const sugerencias = generarNombresCreativos(palabras);

  resultadosDiv.innerHTML = ""; // Limpia resultados anteriores

  sugerencias.forEach((nombre, i) => {
    const div = document.createElement("div");
    div.classList.add("nombre-sugerido");
    div.textContent = nombre;
    div.style.opacity = 0;
    div.style.transform = "translateY(10px)";
    resultadosDiv.appendChild(div);

    // Animación de aparición
    setTimeout(() => {
      div.style.transition = "all 0.4s ease";
      div.style.opacity = 1;
      div.style.transform = "translateY(0)";
    }, i * 80);
  });

  // Scroll suave a los resultados
  resultadosDiv.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Función que genera nombres creativos basados en las palabras clave
function generarNombresCreativos(palabras) {
  const prefijos = ["Neo", "Innova", "Smart", "Eco", "Digital", "Next", "Meta", "Ultra"];
  const sufijos = ["Lab", "Tech", "Space", "Studio", "Works", "Boost", "Flow", "Hub"];
  const combinaciones = [];

  for (let i = 0; i < 8; i++) {
    const palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];
    const prefijo = prefijos[Math.floor(Math.random() * prefijos.length)];
    const sufijo = sufijos[Math.floor(Math.random() * sufijos.length)];

    // Combos variados
    const opciones = [
      `${prefijo}${capitalizar(palabraRandom)}`,
      `${capitalizar(palabraRandom)}${sufijo}`,
      `${prefijo}${capitalizar(palabraRandom)}${sufijo}`,
      `${capitalizar(palabraRandom)}X`,
      `${capitalizar(palabraRandom)}ly`,
    ];

    const nombreFinal = opciones[Math.floor(Math.random() * opciones.length)];
    combinaciones.push(nombreFinal);
  }

  return combinaciones;
}

// Capitaliza la primera letra de una palabra
function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
