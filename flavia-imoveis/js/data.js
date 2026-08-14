/* =========================================================
   FLÁVIA IMÓVEIS — Dados
   ---------------------------------------------------------
   IMPORTANTE: os imóveis abaixo são DADOS DE DEMONSTRAÇÃO
   (marcados com demo: true), usados apenas para mostrar como
   o site funciona. Substitua pelos imóveis reais da imobiliária.
   Veja o README.md para instruções detalhadas.
========================================================= */

const COMPANY = {
  name: "Flávia Imóveis",
  tagline: "Painel online de imóveis",
  experience: "Há 17 anos realizando sonhos em Santa Rita do Sapucaí e região",
  phoneDisplay: "(35) 99854-4406",
  phoneWhats: "5535998544406",
  whatsDefaultMessage: "Olá! Encontrei a Flávia Imóveis pelo site e gostaria de saber mais sobre os imóveis disponíveis.",
  instagramHandle: "@painelflaviaimoveis",
  instagramUrl: "https://instagram.com/painelflaviaimoveis",
  addressLine1: "R. Cel. Joaquim Neto, 121 - Centro",
  addressLine2: "Santa Rita do Sapucaí - MG, 37540-000",
  addressFull: "R. Cel. Joaquim Neto, 121 - Centro, Santa Rita do Sapucaí - MG, 37540-000",
  mapsQuery: "R. Cel. Joaquim Neto, 121 - Centro, Santa Rita do Sapucaí - MG, 37540-000",
  oldSite: "https://flaviaimoveis.com.br"
};

function whatsappLink(customMessage) {
  const msg = encodeURIComponent(customMessage || COMPANY.whatsDefaultMessage);
  return `https://wa.me/${COMPANY.phoneWhats}?text=${msg}`;
}

/* Paleta usada nas ilustrações placeholder dos imóveis (sem fotos reais) */
const PLACEHOLDER_PALETTES = [
  ["#1E3A2E", "#2E5240"],
  ["#C89A4B", "#A97F36"],
  ["#2E5240", "#1E3A2E"],
  ["#57554C", "#1B1B18"],
];

/* Gera uma ilustração SVG simples (linha de casa) como imagem placeholder */
function propertyPlaceholderSVG(seed = 0) {
  const [c1, c2] = PLACEHOLDER_PALETTES[seed % PLACEHOLDER_PALETTES.length];
  return `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g${seed}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#g${seed})"/>
    <g opacity="0.5" stroke="#F1EBDD" stroke-width="2" fill="none">
      <polyline points="110,190 110,120 200,70 290,120 290,190"/>
      <line x1="95" y1="190" x2="305" y2="190"/>
      <rect x="150" y="140" width="35" height="50"/>
      <rect x="215" y="140" width="35" height="35"/>
      <line x1="200" y1="70" x2="200" y2="45"/>
    </g>
  </svg>`;
}

const PROPERTIES = [
  {
    id: "p1",
    demo: true,
    code: "FI-1024",
    title: "Casa térrea com quintal amplo",
    purpose: "venda",
    type: "Casa",
    price: 420000,
    city: "Santa Rita do Sapucaí",
    neighborhood: "Centro",
    address: "Próximo à Praça Central",
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    garage: 2,
    area: 180,
    areaLot: 240,
    description: "Casa térrea bem localizada, próxima ao comércio do Centro, com quintal amplo, ótima ventilação e acabamento de qualidade. Ideal para quem busca espaço e praticidade.",
    features: ["Quintal", "Churrasqueira", "Portão eletrônico", "Área de serviço", "Próximo ao comércio"],
  },
  {
    id: "p2",
    demo: true,
    code: "FI-1031",
    title: "Apartamento 2 quartos com varanda",
    purpose: "aluguel",
    type: "Apartamento",
    price: 1450,
    city: "Santa Rita do Sapucaí",
    neighborhood: "Jardim América",
    address: "Próximo às faculdades",
    bedrooms: 2,
    suites: 0,
    bathrooms: 1,
    garage: 1,
    area: 62,
    areaLot: null,
    description: "Apartamento com boa localização, próximo às faculdades e fácil acesso ao Centro. Varanda integrada, sala ampla e ótima luz natural.",
    features: ["Varanda", "Elevador", "Portaria", "Próximo às faculdades"],
  },
  {
    id: "p3",
    demo: true,
    code: "FI-1042",
    title: "Sobrado alto padrão com suíte master",
    purpose: "venda",
    type: "Casa",
    price: 780000,
    city: "Santa Rita do Sapucaí",
    neighborhood: "Vila Nova",
    address: "Bairro residencial",
    bedrooms: 4,
    suites: 2,
    bathrooms: 3,
    garage: 3,
    area: 260,
    areaLot: 300,
    description: "Sobrado moderno em bairro residencial tranquilo, com suíte master, área gourmet e acabamento de alto padrão. Excelente opção para famílias.",
    features: ["Suíte master", "Área gourmet", "Piscina", "Portão eletrônico", "Bairro tranquilo"],
  },
  {
    id: "p4",
    demo: true,
    code: "FI-1055",
    title: "Terreno plano em condomínio fechado",
    purpose: "venda",
    type: "Terreno",
    price: 195000,
    city: "Santa Rita do Sapucaí",
    neighborhood: "Recanto Verde",
    address: "Condomínio fechado",
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    garage: 0,
    area: null,
    areaLot: 360,
    description: "Terreno plano, pronto para construir, em condomínio fechado com segurança 24h e infraestrutura completa.",
    features: ["Condomínio fechado", "Segurança 24h", "Terreno plano", "Infraestrutura completa"],
  },
  {
    id: "p5",
    demo: true,
    code: "FI-1063",
    title: "Sala comercial no Centro",
    purpose: "aluguel",
    type: "Comercial",
    price: 1800,
    city: "Santa Rita do Sapucaí",
    neighborhood: "Centro",
    address: "Rua comercial movimentada",
    bedrooms: 0,
    suites: 0,
    bathrooms: 1,
    garage: 1,
    area: 55,
    areaLot: null,
    description: "Sala comercial em rua de grande movimento no Centro, ideal para consultórios, escritórios ou pequenas lojas.",
    features: ["Rua movimentada", "Fácil acesso", "Banheiro privativo"],
  },
  {
    id: "p6",
    demo: true,
    code: "FI-1071",
    title: "Chácara com casa sede e área de lazer",
    purpose: "venda",
    type: "Rural",
    price: 650000,
    city: "Santa Rita do Sapucaí",
    neighborhood: "Zona Rural",
    address: "A 10 minutos do Centro",
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    garage: 4,
    area: 150,
    areaLot: 5000,
    description: "Chácara a poucos minutos do Centro, com casa sede confortável, área de lazer com piscina e amplo espaço verde.",
    features: ["Piscina", "Casa sede", "Área verde", "Espaço para eventos"],
  },
];

function formatPrice(value, purpose) {
  const formatted = value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
  return purpose === "aluguel" ? `${formatted}<small>/mês</small>` : formatted;
}
