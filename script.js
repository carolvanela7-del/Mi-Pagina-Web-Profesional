// ============ ICONOS POR SECCION (para la animacion de transicion) ============
const ICONS = {
  "inicio": `<svg viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M5 10v10h14V10" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  "sobre-mi": `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="currentColor" stroke-width="1.6"/></svg>`,
  "habilidades": `<svg viewBox="0 0 24 24" fill="none"><path d="M8 9l-5 3 5 3M16 9l5 3-5 3M13 5l-2 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "proyectos": `<svg viewBox="0 0 24 24" fill="none"><path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M3 7v10l9 4 9-4V7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  "certificados": `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2l3 6 6 .9-4.5 4.4 1 6.2L12 16l-5.5 3.5 1-6.2L3 8.9 9 8l3-6z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  "experiencia": `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.6"/></svg>`,
  "contacto": `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M2 6l10 8 10-8" stroke="currentColor" stroke-width="1.6"/></svg>`
};
const overlay = document.getElementById("transitionOverlay");
const overlayIcon = document.getElementById("transitionIcon");
const navLinksEl = document.getElementById("navLinks");
const burger = document.getElementById("burger");
let isAnimating = false;
function goToScreen(targetId){
  if (isAnimating) return;
  const target = document.getElementById(targetId);
  const current = document.querySelector(".screen.active");
  if (!target || target === current) return;
  isAnimating = true;
  overlayIcon.innerHTML = ICONS[targetId] || "";
  overlay.classList.add("show");
  document.querySelectorAll(".nav-link").forEach(link=>{
    link.classList.toggle("active", link.dataset.nav === targetId);
  });
  setTimeout(()=>{
    if (current) current.classList.remove("active");
    target.classList.add("active");
    window.scrollTo({top:0, behavior:"instant"});
  }, 260);
  setTimeout(()=>{
    overlay.classList.remove("show");
    isAnimating = false;
  }, 560);
  navLinksEl.classList.remove("open");
}
document.querySelectorAll("[data-nav]").forEach(el=>{
  el.addEventListener("click", (e)=>{
    e.preventDefault();
    goToScreen(el.dataset.nav);
  });
});
burger.addEventListener("click", ()=>{
  navLinksEl.classList.toggle("open");
});
const contactForm = document.getElementById("contactForm");
if (contactForm){
  contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("¡Gracias por tu mensaje! (Aquí conectaremos el envío real más adelante)");
    contactForm.reset();
  });
}