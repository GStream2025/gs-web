const resenas = [
  {
    texto: "¡Increíble trabajo! Captaron justo lo que quería para mi tienda.",
    autor: "Camila S.",
    avatar: "https://i.pravatar.cc/40?img=32"
  },
  {
    texto: "Súper profesionales, atentos y rápidos. Recomendadísimos.",
    autor: "Lucas M.",
    avatar: "https://i.pravatar.cc/40?img=23"
  },
  {
    texto: "Mi blog quedó hermoso, mil gracias al equipo de GStream 💜",
    autor: "Florencia R.",
    avatar: "https://i.pravatar.cc/40?img=15"
  },
  {
    texto: "Buenísima comunicación y excelente diseño. ¡10/10!",
    autor: "Iván G.",
    avatar: "https://i.pravatar.cc/40?img=48"
  },
  {
    texto: "Me ayudaron con todo, incluso branding. ¡Los amo!",
    autor: "Sofía P.",
    avatar: "https://i.pravatar.cc/40?img=11"
  }
];

const container = document.getElementById("resenas-container");

resenas.forEach(resena => {
  const div = document.createElement("div");
  div.className = "nota-resena";
  div.innerHTML = `
    <div class="clip-visual"></div>
    <p>${resena.texto}</p>
    <div class="autor">
      <img src="${resena.avatar}" class="avatar" alt="avatar">
      ${resena.autor}
    </div>
  `;
  container.appendChild(div);
});
