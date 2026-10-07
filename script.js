const PRODUCTS = [
  // ---- Diabetes e Insulinas ----
  { id: 1, name: "Insulex N", category: "Diabetes e Insulinas", presentation: "Suspensión inyectable 100 UI/mL · Frasco 10mL", img: "img/productos/insulex-n.jpg",
    description: "Insulina isófana (NPH) de acción intermedia. PiSA Biotec." },
  { id: 2, name: "Humalog", category: "Diabetes e Insulinas", presentation: "Solución inyectable 100 UI/mL", img: "img/productos/humalog.jpg",
    description: "Insulina lispro de acción rápida. Laboratorios Lilly." },
  { id: 3, name: "Humalog Mix 25", category: "Diabetes e Insulinas", presentation: "Suspensión inyectable 100 UI/mL", img: "img/productos/humalog-mix-25.jpg",
    description: "Insulina lispro / lispro protamina. Laboratorios Lilly." },
  { id: 4, name: "Insulina Glargina", category: "Diabetes e Insulinas", presentation: "Cartucho 3mL · 100 UI/mL · Con pluma desechable", img: "img/productos/insulina-glargina.jpg",
    description: "Insulina basal de acción prolongada (Galactus). PharmaLife." },
  { id: 5, name: "Tresiba", category: "Diabetes e Insulinas", presentation: "Caja con 5 plumas FlexTouch 3mL · 100 U/mL", img: "img/productos/tresiba.jpg",
    description: "Insulina degludec de acción ultra-prolongada. Novo Nordisk." },
  { id: 6, name: "Argliptin-D", category: "Diabetes e Insulinas", presentation: "Tableta 50mg/850mg · Caja con 28", img: "img/productos/argliptin-d.jpg",
    description: "Sitagliptina / Metformina. Mexar Pharma." },
  { id: 7, name: "Galvus", category: "Diabetes e Insulinas", presentation: "Comprimido 50mg · Caja con 28", img: "img/productos/galvus.jpg",
    description: "Vildagliptina. Novartis." },
  { id: 8, name: "Jardianz", category: "Diabetes e Insulinas", presentation: "Tableta 25mg · Caja con 30", img: "img/productos/jardianz.jpg",
    description: "Empagliflozina. Boehringer Ingelheim." },
  { id: 9, name: "Jardianz Duo", category: "Diabetes e Insulinas", presentation: "Tableta 12.5mg/850mg · Caja con 60", img: "img/productos/jardianz-duo.jpg",
    description: "Empagliflozina / Metformina. Boehringer Ingelheim." },
  { id: 10, name: "Jardianz DPP", category: "Diabetes e Insulinas", presentation: "Tableta 25mg/5mg · Caja con 30", img: "img/productos/jardianz-dpp.jpg",
    description: "Empagliflozina / Linagliptina. Boehringer Ingelheim." },
  { id: 11, name: "Trayenta", category: "Diabetes e Insulinas", presentation: "Tableta 5mg · Caja con 30", img: "img/productos/trayenta.jpg",
    description: "Linagliptina. Boehringer Ingelheim / Lilly." },
  { id: 12, name: "Trayenta Duo", category: "Diabetes e Insulinas", presentation: "Tableta 2.5mg/850mg · Caja con 60", img: "img/productos/trayenta-duo.jpg",
    description: "Linagliptina / Metformina. Boehringer Ingelheim." },
  { id: 13, name: "Xigduo XR", category: "Diabetes e Insulinas", presentation: "Tableta 10mg/1000mg · Caja con 28", img: "img/productos/xigduo-xr.jpg",
    description: "Dapagliflozina / Metformina de liberación prolongada. AstraZeneca." },
  { id: 14, name: "Forxiga", category: "Diabetes e Insulinas", presentation: "Tableta 10mg · Caja con 28", img: "img/productos/forxiga.jpg",
    description: "Dapagliflozina. AstraZeneca." },
  { id: 15, name: "Rybelsus", category: "Diabetes e Insulinas", presentation: "Tableta 7mg / 14mg · Caja con 30", img: "img/productos/rybelsus.jpg",
    description: "Semaglutida oral (análogo de GLP-1). Novo Nordisk." },
  { id: 16, name: "Sitagliptina / Metformina", category: "Diabetes e Insulinas", presentation: "Tableta 50mg/850mg · Frasco con 56", img: "img/productos/sitagliptina-camber.jpg",
    description: "Sitagliptina / Metformina genérica. Camber Pharma." },
  { id: 17, name: "Accu-Chek Softclix", category: "Diabetes e Insulinas", presentation: "Caja con 100 lancetas", img: "img/productos/accuchek-softclix.jpg",
    description: "Lancetas para punción capilar. Roche." },
  { id: 18, name: "Accu-Chek Safe-T-Pro Plus", category: "Diabetes e Insulinas", presentation: "Caja con 200 dispositivos", img: "img/productos/accuchek-safetpro.jpg",
    description: "Dispositivos de punción estériles de un solo uso. Roche." },

  // ---- Cardiología ----
  { id: 19, name: "Daflon 1000mg", category: "Cardiología", presentation: "Tableta 900mg/100mg · Caja con 30", img: "img/productos/daflon.jpg",
    description: "Diosmina / Hesperidina, insuficiencia venosa. Sanfer." },
  { id: 20, name: "Entresto", category: "Cardiología", presentation: "Comprimido 50/100/200mg · Caja con 30-60", img: "img/productos/entresto.jpg",
    description: "Sacubitrilo / Valsartán, insuficiencia cardiaca. Novartis." },
  { id: 21, name: "Provasc", category: "Cardiología", presentation: "Tableta · Caja con 28", img: "img/productos/provasc.jpg",
    description: "Irbesartán / Amlodipino. Sanofi." },
  { id: 22, name: "Exforge HCT", category: "Cardiología", presentation: "Comprimido 5/160/12.5mg · Caja con 28", img: "img/productos/exforge-hct.jpg",
    description: "Amlodipino / Valsartán / Hidroclorotiazida. Novartis." },
  { id: 23, name: "Blopress Plus", category: "Cardiología", presentation: "Tableta 16mg/12.5mg · Caja con 28", img: "img/productos/blopress-plus.jpg",
    description: "Candesartán / Hidroclorotiazida. Abbott." },
  { id: 24, name: "Elicuis", category: "Cardiología", presentation: "Tableta 2.5mg/5mg · Caja con 60", img: "img/productos/elicuis.jpg",
    description: "Apixabán, anticoagulante oral. Pfizer." },
  { id: 25, name: "Firialta", category: "Cardiología", presentation: "Tableta 20mg · Caja con 28", img: "img/productos/firialta.jpg",
    description: "Finerenona, protección cardio-renal." },

  // ---- Oncología ----
  { id: 26, name: "Sutivin", category: "Oncología", presentation: "Solución inyectable 1mg", img: "img/productos/sutivin.jpg",
    description: "Vincristina. Incluye diluyente. Zurich Pharma." },

  // ---- Hematología ----
  { id: 27, name: "Alveritin", category: "Hematología", presentation: "Solución inyectable 2000 UI · Caja con 12", img: "img/productos/alveritin.jpg",
    description: "Eritropoyetina humana recombinante. Alvartis Pharma." },
  { id: 28, name: "Exetin-A", category: "Hematología", presentation: "Solución inyectable 4000 UI/mL · Caja con 6", img: "img/productos/exetin-a.jpg",
    description: "Eritropoyetina humana recombinante. PiSA Biotec." },

  // ---- Especialidades Hospitalarias ----
  { id: 29, name: "Octalbin", category: "Especialidades Hospitalarias", presentation: "Solución inyectable 25%", img: "img/productos/octalbin.jpg",
    description: "Albúmina humana. Octapharma." },
  { id: 30, name: "Someral", category: "Especialidades Hospitalarias", presentation: "Tableta 630mg · Caja con 100", img: "img/productos/someral.jpg",
    description: "Alfa cetoanálogos de aminoácidos, apoyo renal. Nucitec." },
  { id: 31, name: "Tacrolimus", category: "Especialidades Hospitalarias", presentation: "Cápsula 1mg · Caja con 50", img: "img/productos/tacrolimus.jpg",
    description: "Inmunosupresor, uso en trasplantes. Vanquish." },

  // ---- Antibióticos ----
  { id: 32, name: "Monurol", category: "Antibióticos", presentation: "Granulado 3g · Caja con 1 sobre", img: "img/productos/monurol.jpg",
    description: "Fosfomicina, infección urinaria. Zambon." },
  { id: 33, name: "Finatak", category: "Antibióticos", presentation: "Solución inyectable 1g", img: "img/productos/finatak.jpg",
    description: "Ertapenem, antibiótico hospitalario. Kener." },

  // ---- Gastrointestinal ----
  { id: 34, name: "Racecadotrilo", category: "Gastrointestinal", presentation: "Granulado 30mg · Caja con 18 sobres", img: "img/productos/racecadotrilo-30.jpg",
    description: "Antidiarreico. Maver." },
  { id: 35, name: "Racecadotrilo Pediátrico", category: "Gastrointestinal", presentation: "Granulado 10mg · Caja con 18 sobres", img: "img/productos/racecadotrilo-pediatrico.jpg",
    description: "Antidiarreico presentación infantil. Maver." },
  { id: 36, name: "Hidrasec", category: "Gastrointestinal", presentation: "Granulado 30mg · Caja con 18 sobres", img: "img/productos/hidrasec.jpg",
    description: "Racecadotrilo. Ferrer." },
  { id: 37, name: "Regulact", category: "Gastrointestinal", presentation: "Polvo 5g · Caja con 15 sobres", img: "img/productos/regulact.jpg",
    description: "Lactulosa. Valeant." },

  // ---- Salud Reproductiva ----
  { id: 38, name: "Noristerat", category: "Salud Reproductiva", presentation: "Solución inyectable 200mg · Ampolleta 1mL", img: "img/productos/noristerat.jpg",
    description: "Noretisterona, anticonceptivo inyectable. Bayer." },
  { id: 39, name: "Implanon NXT", category: "Salud Reproductiva", presentation: "Implante subdérmico 68mg", img: "img/productos/implanon-nxt.jpg",
    description: "Etonogestrel, anticonceptivo de larga duración. Organon." },

  // ---- Suplementos ----
  { id: 40, name: "Lact1", category: "Suplementos", presentation: "Suspensión oral · Caja con 10 sobres", img: "img/productos/lact1.jpg",
    description: "Lactobacillus LB inactivados + Zinc + Selenio. Carnot." },
  { id: 41, name: "Avetal-12", category: "Suplementos", presentation: "Solución inyectable, liofilizado + diluyente 5mL", img: "img/productos/avetal-12.jpg",
    description: "Presentación adulto. Vitalis." },

  // ---- Dermocosmética ----
  { id: 42, name: "ISDIN Eryfotona AK-NMSC", category: "Dermocosmética", presentation: "Fluid 50ml", img: "img/productos/isdin-eryfotona.jpg",
    description: "Fotoprotector para daño actínico y queratosis actínica. ISDIN." },
  { id: 43, name: "Elidel", category: "Dermocosmética", presentation: "Crema 1% · Tubo 30g", img: "img/productos/elidel.jpg",
    description: "Pimecrolimus, tratamiento de dermatitis. Valeant." },
  { id: 44, name: "Garnier Super UV", category: "Dermocosmética", presentation: "Sérum FPS 50+ · 40ml", img: "img/productos/garnier-superuv.jpg",
    description: "Protector solar anti-manchas con vitamina C. Garnier." },
  { id: 45, name: "ISDIN Woman", category: "Dermocosmética", presentation: "Gel íntimo 200ml", img: "img/productos/isdin-woman.jpg",
    description: "Higiene íntima diaria con prebiótico, pH fisiológico. ISDIN." },
  { id: 46, name: "Mesoheal+", category: "Dermocosmética", presentation: "Jeringa 25mg / 2.5ml · Caja con 5", img: "img/productos/mesoheal.jpg",
    description: "Ácido hialurónico sódico para uso estético." },
  { id: 47, name: "Ultra Bengue", category: "Dermocosmética", presentation: "Gel tópico · Tubo 35g", img: "img/productos/ultra-bengue.jpg",
    description: "Naproxeno, lidocaína, salicilato de metilo y mentol. Alivio muscular." },

  // ---- Cuidado Bucal ----
  { id: 48, name: "Bexident Encías", category: "Cuidado Bucal", presentation: "Colutorio 250ml", img: "img/productos/bexident-encias.jpg",
    description: "Clorhexidina 0.12% + Dexpantenol, acción inmediata. ISDIN." },
  { id: 49, name: "Bexident Dientes Sensibles", category: "Cuidado Bucal", presentation: "Pasta dentífrica 75ml", img: "img/productos/bexident-dientes.jpg",
    description: "CPC + Cymenol, nitrato potásico, dexpantenol. ISDIN." },
  { id: 50, name: "Bexident Aftas", category: "Cuidado Bucal", presentation: "Gel con ácido hialurónico", img: "img/productos/bexident-aftas.jpg",
    description: "Alivio rápido y duradero desde la primera aplicación. ISDIN." },
  { id: 51, name: "Bexident Post", category: "Cuidado Bucal", presentation: "Colutorio 250ml", img: "img/productos/bexident-post.jpg",
    description: "Clorhexidina 0.2% + Chitosán, tratamiento post-quirúrgico. ISDIN." },

  // ---- Material de Curación e Insumos ----
  { id: 52, name: "Sutura Atramat Polipropileno", category: "Material de Curación e Insumos", presentation: "USP 3-0 · Caja con 12 piezas", img: "img/productos/sutura-polipropileno.jpg",
    description: "Sutura no absorbible, monofilamento. Atramat." },
  { id: 53, name: "Sutura Atramat PGA", category: "Material de Curación e Insumos", presentation: "USP 3-0 · Caja con 12 piezas", img: "img/productos/sutura-pga.jpg",
    description: "Ácido poliglicólico, sutura absorbible trenzada. Atramat." },
  { id: 54, name: "Sutura Atramat Nylon 3-0", category: "Material de Curación e Insumos", presentation: "USP 3-0 · Caja con 12 piezas", img: "img/productos/sutura-nylon-3.jpg",
    description: "Sutura no absorbible, monofilamento. Atramat." },
  { id: 55, name: "Sutura Atramat Nylon 4-0", category: "Material de Curación e Insumos", presentation: "USP 4-0 · Caja con 12 piezas", img: "img/productos/sutura-nylon-4.jpg",
    description: "Sutura no absorbible, monofilamento fino. Atramat." },
  { id: 56, name: "Sutura Atramat Chromic Gut", category: "Material de Curación e Insumos", presentation: "USP 2-0 · Caja con 12 piezas", img: "img/productos/sutura-chromic-gut.jpg",
    description: "Catgut crómico, sutura absorbible. Atramat." },
  { id: 57, name: "Sutura Covidien", category: "Material de Curación e Insumos", presentation: "MCR 37 · Caja con 12 piezas", img: "img/productos/sutura-covidien.jpg",
    description: "Sutura absorbible sintética trenzada." },
  { id: 58, name: "Tegaderm Film", category: "Material de Curación e Insumos", presentation: "6.0 x 7.0 cm · Caja con 50 piezas", img: "img/productos/tegaderm.jpg",
    description: "Apósito de fijación transparente, libre de látex. 3M." },
  { id: 59, name: "Vendalastic", category: "Material de Curación e Insumos", presentation: "Venda elástica", img: "img/productos/vendalastic.jpg",
    description: "Ajuste perfecto, máxima elasticidad y sujeción." },
  { id: 60, name: "Protec Jeringa", category: "Material de Curación e Insumos", presentation: "3ml con aguja 22G x 32mm · Caja con 100", img: "img/productos/protec-jeringa.jpg",
    description: "Jeringa desechable estéril, un solo uso." },
  { id: 61, name: "Protec Guantes de Exploración", category: "Material de Curación e Insumos", presentation: "100% látex natural, ambidiestros", img: "img/productos/protec-guantes.jpg",
    description: "Guantes estériles para exploración, uso exclusivo sector salud." },
  { id: 62, name: "Estomach", category: "Material de Curación e Insumos", presentation: "Caja con 10 piezas, talla adulto", img: "img/productos/estomach.jpg",
    description: "Bolsa para colostomía, ileostomía y urostomía." },
];

const grid = document.getElementById("productGrid");
const filtersEl = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

let activeCategory = "Todos";

function getCategories() {
  return ["Todos", ...new Set(PRODUCTS.map(p => p.category))];
}

function renderFilters() {
  filtersEl.innerHTML = getCategories().map(cat =>
    `<button class="chip ${cat === activeCategory ? "active" : ""}" data-cat="${cat}">${cat}</button>`
  ).join("");
}

function renderGrid() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
    const matchesTerm = p.name.toLowerCase().includes(term);
    return matchesCategory && matchesTerm;
  });

  grid.innerHTML = filtered.map((p, i) => `
    <article class="card reveal" data-id="${p.id}" role="button" tabindex="0"
             aria-label="Ver detalles de ${p.name}" style="transition-delay:${Math.min(i, 8) * 60}ms">
      <div class="card-photo"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <span class="badge">${p.category}</span>
      <h3>${p.name}</h3>
      <p class="card-presentation">${p.presentation}</p>
      <p class="card-desc">${p.description}</p>
    </article>
  `).join("");

  emptyState.hidden = filtered.length > 0;
  observeReveals();
}

// Elemento que abrio el modal, para devolverle el foco al cerrarlo.
let modalTrigger = null;

// Marcar el resto de la pagina como inerte mientras el modal esta abierto
// hace que el Tab no pueda salirse del dialogo.
function setPageInert(inert) {
  document.querySelectorAll("header, main, footer").forEach(el => { el.inert = inert; });
}

function openModal(product, trigger) {
  const backdrop = document.getElementById("modalBackdrop");
  document.getElementById("modalIcon").innerHTML = `<img src="${product.img}" alt="${product.name}">`;
  document.getElementById("modalCategory").textContent = product.category;
  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalPresentation").textContent = product.presentation;
  document.getElementById("modalDescription").textContent = product.description;

  modalTrigger = trigger || null;
  backdrop.inert = false;
  backdrop.classList.add("open");
  setPageInert(true);
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  const backdrop = document.getElementById("modalBackdrop");
  if (!backdrop.classList.contains("open")) return;

  backdrop.classList.remove("open");
  backdrop.inert = true;
  setPageInert(false);
  document.body.style.overflow = "";

  // La rejilla se vuelve a dibujar al filtrar, asi que la tarjeta que abrio
  // el modal puede haber desaparecido del DOM.
  if (modalTrigger && document.contains(modalTrigger)) modalTrigger.focus();
  modalTrigger = null;
}

// Eventos
filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  renderFilters();
  renderGrid();
  document.getElementById("productGrid").scrollIntoView({ behavior: "smooth", block: "start" });
});

searchInput.addEventListener("input", renderGrid);

function openFromCard(card) {
  const product = PRODUCTS.find(p => p.id === Number(card.dataset.id));
  if (product) openModal(product, card);
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openFromCard(card);
});

// role="button" no trae activacion por teclado: hay que implementarla.
grid.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".card");
  if (!card) return;
  e.preventDefault(); // evita que el espacio haga scroll
  openFromCard(card);
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "modalBackdrop") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Menú móvil
document.getElementById("menuToggle").addEventListener("click", (e) => {
  const open = document.getElementById("header").classList.toggle("menu-open");
  e.currentTarget.setAttribute("aria-expanded", String(open));
  e.currentTarget.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

// Animación al hacer scroll: observa elementos ".reveal" y les agrega
// la clase "visible" apenas entran en el área visible de la pantalla.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}

// Stats animadas
function animateCount(el, target, prefix = "") {
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = prefix + current;
  }, 30);
}

// Init
renderFilters();
renderGrid();
observeReveals();
animateCount(document.getElementById("statCount"), 100, "+");
animateCount(document.getElementById("statCat"), getCategories().length - 1);
document.getElementById("year").textContent = new Date().getFullYear();
