document.addEventListener("DOMContentLoaded", () => {
  const tipoSitio = document.getElementById("tipoSitio");
  const checkboxesExtras = document.querySelectorAll('input[name="extras[]"]');
  const checkboxesMarca = document.querySelectorAll('input[name="marca[]"]');
  const totalSpan = document.getElementById("total");
  const inputTotal = document.getElementById("inputTotal");

  const precios = {
    tipoSitio: {
      "Sitio institucional simple": 70,
      "Landing Page": 50,
      "Blog personal / profesional": 80,
      "Tienda online": 120,
      "Portfolio / CV online": 60,
      "Página de eventos / reservas": 90
    },
    extras: {
      "Formulario de contacto": 10,
      "WhatsApp": 5,
      "Instagram": 10,
      "Galería de imágenes": 15,
      "Login": 20,
      "Animaciones": 10
    },
    marca: {
      "Logo": 20,
      "Paleta": 10,
      "Asesoramiento": 10
    }
  };

  function calcularTotal() {
    let total = 0;

    // Tipo de sitio
    const sitioSeleccionado = tipoSitio.value;
    if (precios.tipoSitio[sitioSeleccionado]) {
      total += precios.tipoSitio[sitioSeleccionado];
    }

    // Extras seleccionados
    checkboxesExtras.forEach((checkbox) => {
      if (checkbox.checked && precios.extras[checkbox.value]) {
        total += precios.extras[checkbox.value];
      }
    });

    // Marca seleccionada
    checkboxesMarca.forEach((checkbox) => {
      if (checkbox.checked && precios.marca[checkbox.value]) {
        total += precios.marca[checkbox.value];
      }
    });

    // Actualizamos en pantalla y en el formulario
    totalSpan.textContent = `$${total} USD`;
    inputTotal.value = `$${total} USD`;
  }

  // Eventos que recalculan cuando hay cambios
  tipoSitio.addEventListener("change", calcularTotal);
  checkboxesExtras.forEach(cb => cb.addEventListener("change", calcularTotal));
  checkboxesMarca.forEach(cb => cb.addEventListener("change", calcularTotal));

  calcularTotal(); // Por si hay algo ya seleccionado al cargar
});
