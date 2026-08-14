/* =========================================================
   FLÁVIA IMÓVEIS — Comportamento compartilhado
========================================================= */

/* ---------- Header ---------- */
function renderHeader(activePage) {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const links = [
    { href: "index.html", label: "Início", key: "inicio" },
    { href: "imoveis.html?finalidade=venda", label: "Comprar", key: "comprar" },
    { href: "imoveis.html?finalidade=aluguel", label: "Alugar", key: "alugar" },
    { href: "imoveis.html", label: "Imóveis", key: "imoveis" },
    { href: "sobre.html", label: "Sobre nós", key: "sobre" },
    { href: "contato.html", label: "Contato", key: "contato" },
  ];
  const navHtml = links
    .map((l) => `<a href="${l.href}" class="${l.key === activePage ? "active" : ""}">${l.label}</a>`)
    .join("");

  mount.innerHTML = `
    <header class="site-header" id="siteHeader">
      <div class="container header-inner">
        <a href="index.html" class="logo">
          <span class="logo-name">Flávia Imóveis</span>
          <span class="logo-sub">Santa Rita do Sapucaí</span>
        </a>
        <nav class="nav-desktop">${navHtml}</nav>
        <div class="header-cta">
          <a class="btn btn-whats btn-sm btn-desktop-only" href="${whatsappLink()}" target="_blank" rel="noopener">
            ${ICONS.whats} Falar no WhatsApp
          </a>
          <button class="menu-toggle" id="menuToggle" aria-label="Abrir menu" aria-expanded="false"><span></span></button>
        </div>
      </div>
    </header>
    <div class="nav-scrim" id="navScrim"></div>
    <nav class="nav-mobile" id="navMobile">
      ${navHtml}
      <a class="btn btn-whats btn-block" href="${whatsappLink()}" target="_blank" rel="noopener">${ICONS.whats} Falar no WhatsApp</a>
    </nav>
  `;

  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("menuToggle");
  const navMobile = document.getElementById("navMobile");
  const scrim = document.getElementById("navScrim");

  function closeMenu() {
    toggle.classList.remove("is-open");
    navMobile.classList.remove("is-open");
    scrim.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  function toggleMenu() {
    const open = navMobile.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    scrim.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  toggle.addEventListener("click", toggleMenu);
  scrim.addEventListener("click", closeMenu);
  navMobile.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  if (document.body.dataset.pageHeader === "true") {
    header.classList.add("page-header");
  }
}

/* ---------- Footer ---------- */
function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;
  const year = new Date().getFullYear();
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="logo-name">Flávia Imóveis</span>
            <p>${COMPANY.experience}.</p>
          </div>
          <div class="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><a href="index.html">Início</a></li>
              <li><a href="imoveis.html?finalidade=venda">Comprar</a></li>
              <li><a href="imoveis.html?finalidade=aluguel">Alugar</a></li>
              <li><a href="imoveis.html">Imóveis</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Institucional</h4>
            <ul>
              <li><a href="sobre.html">Sobre</a></li>
              <li><a href="sobre.html#servicos">Serviços</a></li>
              <li><a href="contato.html">Contato</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h4>Contato</h4>
            <ul>
              <li>${COMPANY.phoneDisplay}</li>
              <li>${COMPANY.instagramHandle}</li>
              <li>${COMPANY.addressLine1}<br>${COMPANY.addressLine2}</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${year} Flávia Imóveis. Todos os direitos reservados.</span>
          <span>CRECI: informar número de registro</span>
        </div>
      </div>
    </footer>
  `;
}

/* ---------- Botão flutuante WhatsApp ---------- */
function renderWhatsFloat() {
  const mount = document.getElementById("whats-float");
  if (!mount) return;
  mount.innerHTML = `<a class="whats-float" href="${whatsappLink()}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${ICONS.whats}</a>`;
}

/* ---------- Card de imóvel ---------- */
function propertyCardHtml(p, index) {
  const specs = [];
  if (p.bedrooms) specs.push(`<span>${ICONS.bed} ${p.bedrooms} qtos</span>`);
  if (p.bathrooms) specs.push(`<span>${ICONS.bath} ${p.bathrooms} banh.</span>`);
  if (p.garage) specs.push(`<span>${ICONS.garage} ${p.garage} vagas</span>`);
  const area = p.area || p.areaLot;
  if (area) specs.push(`<span>${ICONS.area} ${area} m²</span>`);

  return `
  <article class="property-card">
    <a href="imovel.html?id=${p.id}" class="property-media">
      ${propertyPlaceholderSVG(index)}
      <div class="property-badges">
        <span class="badge ${p.purpose === "venda" ? "badge-venda" : "badge-aluguel"}">${p.purpose === "venda" ? "Venda" : "Aluguel"}</span>
      </div>
      ${p.demo ? `<span class="badge badge-demo">Exemplo</span>` : ""}
    </a>
    <div class="property-body">
      <div class="property-price">${formatPrice(p.price, p.purpose)}</div>
      <a href="imovel.html?id=${p.id}" class="property-title">${p.title}</a>
      <div class="property-loc">${ICONS.pin} ${p.neighborhood}, ${p.city}</div>
      <div class="property-specs">${specs.join("")}</div>
      <div class="property-actions">
        <a href="imovel.html?id=${p.id}" class="btn btn-ghost btn-sm">Ver detalhes</a>
        <a class="icon-btn" href="${whatsappLink(`Olá! Tenho interesse no imóvel ${p.title} (código ${p.code}).`)}" target="_blank" rel="noopener" aria-label="Falar sobre este imóvel no WhatsApp">${ICONS.whats}</a>
      </div>
    </div>
  </article>`;
}

function renderPropertyGrid(mountId, properties) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  if (!properties.length) {
    mount.innerHTML = `<div class="results-empty">Nenhum imóvel encontrado com esses filtros. Tente ajustar sua busca ou fale com um corretor.</div>`;
    return;
  }
  mount.innerHTML = properties.map((p, i) => propertyCardHtml(p, i)).join("");
}

/* ---------- Formulários (demonstrativo, sem backend) ---------- */
function bindDemoForm(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (success) {
      success.classList.add("is-visible");
      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    form.reset();
  });
}

/* ---------- Preenche ícones (elementos <span data-icon="nome">) ---------- */
function fillIcons(scope) {
  const root = scope || document;
  root.querySelectorAll("[data-icon]").forEach((el) => {
    const key = el.getAttribute("data-icon");
    if (ICONS[key]) el.innerHTML = ICONS[key];
  });
}

/* ---------- Preenche links do WhatsApp (elementos [data-whats-link]) ---------- */
function fillWhatsLinks(scope) {
  const root = scope || document;
  root.querySelectorAll("[data-whats-link]").forEach((el) => {
    const customMsg = el.getAttribute("data-whats-message");
    el.href = whatsappLink(customMsg || undefined);
  });
}

/* ---------- Utilidades de querystring ---------- */
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
