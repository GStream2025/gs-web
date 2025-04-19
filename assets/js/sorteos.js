document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-sorteo");
  const galeria = document.getElementById("galeria");
  const contadorEl = document.getElementById("contador");
  const gracias = document.getElementById("gracias");

  let contador = 0;

  // Obtener contador actual
  fetch("contador.php")
    .then((res) => res.json())
    .then((data) => {
      contador = data.contador || 0;
      contadorEl.textContent = contador;
    });

  // Cargar imágenes ya subidas
  fetch("galeria.php")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data.imagenes)) {
        data.imagenes.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = "Captura previa";
          img.style.opacity = 0;
          galeria.appendChild(img);
          setTimeout(() => img.style.opacity = 1, 100);
        });
      }
    });

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(formulario);

    try {
      const response = await fetch("upload.php", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success && data.imagePath) {
        contador++;
        contadorEl.textContent = contador;

        contadorEl.classList.add("anim-contador");
        setTimeout(() => contadorEl.classList.remove("anim-contador"), 300);

        const img = document.createElement("img");
        img.src = data.imagePath;
        img.alt = "Nueva captura";
        img.style.opacity = 0;
        galeria.prepend(img);
        setTimeout(() => img.style.opacity = 1, 100);

        gracias.classList.remove("hidden");
        setTimeout(() => gracias.classList.add("hidden"), 5000);

        formulario.reset();
      } else {
        alert("Hubo un error al subir la imagen.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error de conexión.");
    }
  });
});
