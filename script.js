
// Modo claro/oscuro
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Mostrar/Ocultar ropas extras
const verMasBtn = document.getElementById('ver-mas-btn');
const extras = document.querySelectorAll('.extra');
let expanded = false;
verMasBtn.addEventListener('click', () => {
  expanded = !expanded;
  extras.forEach(el => {
    el.classList.toggle('mostrar', expanded);
  });
  verMasBtn.textContent = expanded ? 'Ver menos' : 'Ver más';
});

// Mostrar/Ocultar UrbanMods
const urbanBtn = document.querySelector('.toggle-urban');
const urbanContent = document.querySelector('.urban-content');
urbanBtn.addEventListener('click', () => {
  const visible = urbanContent.classList.toggle('show');
  urbanBtn.querySelector('.flecha').style.transform = visible ? 'rotate(180deg)' : 'rotate(0deg)';
  if (visible) urbanContent.scrollIntoView({ behavior: 'smooth' });
});

// Botón subir arriba
const btnSubir = document.getElementById('btn-subir');
window.addEventListener('scroll', () => {
  btnSubir.style.display = window.scrollY > 400 ? 'block' : 'none';
});
btnSubir.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Botón explorar → hace scroll a trabajos
document.querySelector('.btn-explorar').addEventListener('click', () => {
  const galeria = document.querySelector('.productos');
  galeria.scrollIntoView({ behavior: 'smooth' });
});

// Modal UrbanMods
const modal = document.getElementById('urban-modal');
const abrirModal = document.getElementById('abrir-modal');
const cerrarModal = document.getElementById('cerrar-modal');

abrirModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});
cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
