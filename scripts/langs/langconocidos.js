document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");

  // ======================================
  // 🌐 Traducciones — CONOCIDOS
  // ======================================
  const tKnown = {
    "en-US": {
      section_title: "⭐ Historically Known Meteorites",
      section_desc: "List of the most relevant meteorites documented by international observatories.",

      // Card 0 — Chicxulub
      cxx_title: "☄️ Chicxulub (Mexico)",
      cxx_dt: [
        "Location:",
        "Geological age:",
        "Asteroid size:",
        "Crater diameter:",
        "Energy released:",
        "Impact consequences:",
      ],
      cxx_dd: [
        "Yucatan Peninsula, Mexico",
        "≈ 66 million years",
        "Between 10 and 15 km in diameter",
        "≈ 180 km",
        "Equivalent to several billion Hiroshima atomic bombs",
        "Caused global fires, tsunamis and drastic climate change leading to the extinction of ~75% of species, including dinosaurs.",
      ],
      cxx_risk: "🔴 Mass extinction event (Cretaceous–Paleogene)",
      cxx_canvas: "3D model of Chicxulub crater",

      // Card 1 — Hoba
      hoba_title: "🪨 Hoba Meteorite (Namibia)",
      hoba_dt: [
        "Location:",
        "Discovery:",
        "Type:",
        "Size:",
        "Estimated weight:",
        "Notable features:",
      ],
      hoba_dd: [
        "Near Grootfontein, Namibia",
        "1920",
        "Siderite (iron–nickel)",
        "≈ 2.7 meters wide",
        "≈ 60 tons",
        "Largest intact meteorite found on Earth. No visible crater — likely due to low fall velocity.",
      ],
      hoba_risk: "🟢 Impact risk: None (meteorite already found on surface)",
      hoba_canvas: "3D model of Hoba meteorite",

      // Card 2 — Bennu
      bennu_title: "☄️ Asteroid Bennu (101955)",
      bennu_dt: [
        "Location:",
        "Discovery:",
        "Type:",
        "Size:",
        "Space mission:",
        "Notable features:",
      ],
      bennu_dd: [
        "Near-Earth orbit (NEA, Near-Earth Asteroid)",
        "1999",
        "Siderite (rocky–metallic)",
        "≈ 482 meters in diameter",
        "Target of NASA's OSIRIS-REx mission; samples returned to Earth in 2023.",
        "Nearly spherical asteroid with rocky surface; scientifically valuable; low probability of future impact (late 21st century).",
      ],
      bennu_risk: "🟢 Impact risk: Very low (monitored by NASA)",
      bennu_canvas: "3D model of Bennu meteorite",

      // Card 3 — 4 Vesta
      vesta_title: "🪐 Asteroid (4) Vesta",
      vesta_dt: [
        "Location:",
        "Discovery:",
        "Type:",
        "Dimension:",
        "Notable features:",
      ],
      vesta_dd: [
        "Main asteroid belt (between Mars and Jupiter)",
        "1807 by Heinrich Olbers",
        "Rocky (type V)",
        "≈ 525 km in diameter",
        "One of the largest bodies in the asteroid belt; source of HED meteorites; visited by NASA's DAWN probe (2011–2012).",
      ],
      vesta_risk: "🟢 Impact risk: None (stable orbit in asteroid belt)",
      vesta_canvas: "3D model of asteroid 4 Vesta",

      // Card 4 — Chelyabinsk
      chely_title: "☄️ Chelyabinsk Meteorite (Russia)",
      chely_dt: [
        "Location:",
        "Discovery / Event:",
        "Type:",
        "Dimension:",
        "Notable features:",
      ],
      chely_dd: [
        "Chelyabinsk region, Russia",
        "February 15, 2013",
        "Ordinary chondrite (LL5)",
        "≈ 20 meters in diameter",
        "Exploded in the atmosphere; shock wave damaged thousands of buildings and injured 1,000+ people; one of the most documented impact events.",
      ],
      chely_risk: "🟡 Impact risk: Low (atmospheric event already occurred)",
      chely_canvas: "3D model of Chelyabinsk meteorite",
    },

    "es-AR": {
      section_title: "⭐ Meteoritos Históricamente Conocidos",
      section_desc: "Listado de los meteoritos más relevantes documentados por observatorios internacionales.",

      // Card 0 — Chicxulub
      cxx_title: "☄️ Chicxulub (México)",
      cxx_dt: [
        "Ubicación:",
        "Edad geológica:",
        "Tamaño del asteroide:",
        "Diámetro del cráter:",
        "Energía liberada:",
        "Consecuencias del impacto:",
      ],
      cxx_dd: [
        "Península de Yucatán, México",
        "≈ 66 millones de años",
        "Entre 10 y 15 km de diámetro",
        "≈ 180 km",
        "Equivalente a varios miles de millones de bombas de Hiroshima",
        "Provocó incendios globales, tsunamis y un cambio climático drástico que derivó en la extinción de ~75% de las especies, incluidos los dinosaurios.",
      ],
      cxx_risk: "🔴 Evento de extinción masiva (Cretácico–Paleógeno)",
      cxx_canvas: "Modelo 3D del cráter de Chicxulub",

      // Card 1 — Hoba
      hoba_title: "🪨 Meteorito Hoba (Namibia)",
      hoba_dt: [
        "Ubicación:",
        "Descubrimiento:",
        "Tipo:",
        "Tamaño:",
        "Peso estimado:",
        "Características destacadas:",
      ],
      hoba_dd: [
        "Cerca de Grootfontein, Namibia",
        "1920",
        "Siderito (hierro–níquel)",
        "≈ 2,7 metros de ancho",
        "≈ 60 toneladas",
        "El meteorito intacto más grande hallado en la Tierra. No dejó cráter visible, probablemente por su baja velocidad de caída.",
      ],
      hoba_risk: "🟢 Riesgo de impacto: Nulo (meteorito ya encontrado en superficie)",
      hoba_canvas: "Modelo 3D del meteorito Hoba",

      // Card 2 — Bennu
      bennu_title: "☄️ Asteroide Bennu (101955)",
      bennu_dt: [
        "Ubicación:",
        "Descubrimiento:",
        "Tipo:",
        "Tamaño:",
        "Misión espacial:",
        "Características destacadas:",
      ],
      bennu_dd: [
        "Órbita cercana a la Tierra (NEA, Near-Earth Asteroid)",
        "1999",
        "Siderito (rocoso–metálico)",
        "≈ 482 metros de diámetro",
        "Objetivo de la misión OSIRIS-REx (NASA), que trajo muestras a la Tierra en 2023.",
        "Asteroide casi esférico con superficie rocosa; de alto valor científico; muy baja probabilidad de impacto futuro (fines del siglo XXI).",
      ],
      bennu_risk: "🟢 Riesgo de impacto: Muy bajo (monitoreado por la NASA)",
      bennu_canvas: "Modelo 3D del meteorito Bennu",

      // Card 3 — 4 Vesta
      vesta_title: "🪐 Asteroide (4) Vesta",
      vesta_dt: [
        "Ubicación:",
        "Descubrimiento:",
        "Tipo:",
        "Dimensión:",
        "Características destacadas:",
      ],
      vesta_dd: [
        "Cinturón principal de asteroides (entre Marte y Júpiter)",
        "1807 por Heinrich Olbers",
        "Rocoso (tipo V)",
        "≈ 525 km de diámetro",
        "Uno de los cuerpos más grandes del cinturón; fuente de meteoritos HED; visitado por la sonda DAWN (NASA, 2011–2012).",
      ],
      vesta_risk: "🟢 Riesgo de impacto: Nulo (órbita estable en el cinturón)",
      vesta_canvas: "Modelo 3D del asteroide 4 Vesta",

      // Card 4 — Chelyabinsk
      chely_title: "☄️ Meteorito de Chelyabinsk (Rusia)",
      chely_dt: [
        "Ubicación:",
        "Descubrimiento / Evento:",
        "Tipo:",
        "Dimensión:",
        "Características destacadas:",
      ],
      chely_dd: [
        "Región de Chelyabinsk, Rusia",
        "15 de febrero de 2013",
        "Condrita ordinaria (LL5)",
        "≈ 20 metros de diámetro",
        "Explotó en la atmósfera; la onda expansiva dañó miles de edificios e hirió a más de 1.000 personas; uno de los eventos mejor documentados.",
      ],
      chely_risk: "🟡 Riesgo de impacto: Bajo (evento atmosférico ya ocurrido)",
      chely_canvas: "Modelo 3D del meteorito Chelyabinsk",
    },

    "pt-BR": {
      section_title: "⭐ Meteoritos Historicamente Conhecidos",
      section_desc: "Lista dos meteoritos mais relevantes documentados por observatórios internacionais.",

      // Card 0 — Chicxulub
      cxx_title: "☄️ Chicxulub (México)",
      cxx_dt: [
        "Localização:",
        "Idade geológica:",
        "Tamanho do asteroide:",
        "Diâmetro da cratera:",
        "Energia liberada:",
        "Consequências do impacto:",
      ],
      cxx_dd: [
        "Península de Yucatán, México",
        "≈ 66 milhões de anos",
        "Entre 10 e 15 km de diâmetro",
        "≈ 180 km",
        "Equivalente a vários bilhões de bombas de Hiroshima",
        "Causou incêndios globais, tsunamis e mudanças climáticas drásticas que levaram à extinção de ~75% das espécies, incluindo os dinossauros.",
      ],
      cxx_risk: "🔴 Evento de extinção em massa (Cretáceo–Paleógeno)",
      cxx_canvas: "Modelo 3D da cratera de Chicxulub",

      // Card 1 — Hoba
      hoba_title: "🪨 Meteorito Hoba (Namíbia)",
      hoba_dt: [
        "Localização:",
        "Descoberta:",
        "Tipo:",
        "Tamanho:",
        "Peso estimado:",
        "Características notáveis:",
      ],
      hoba_dd: [
        "Perto de Grootfontein, Namíbia",
        "1920",
        "Siderito (ferro–níquel)",
        "≈ 2,7 metros de largura",
        "≈ 60 toneladas",
        "Maior meteorito intacto encontrado na Terra. Não deixou cratera visível — provavelmente devido à baixa velocidade de queda.",
      ],
      hoba_risk: "🟢 Risco de impacto: Nulo (meteorito já encontrado na superfície)",
      hoba_canvas: "Modelo 3D do meteorito Hoba",

      // Card 2 — Bennu
      bennu_title: "☄️ Asteroide Bennu (101955)",
      bennu_dt: [
        "Localização:",
        "Descoberta:",
        "Tipo:",
        "Tamanho:",
        "Missão espacial:",
        "Características notáveis:",
      ],
      bennu_dd: [
        "Órbita próxima da Terra (NEA, Near-Earth Asteroid)",
        "1999",
        "Siderito (rochoso–metálico)",
        "≈ 482 metros de diâmetro",
        "Alvo da missão OSIRIS-REx (NASA); amostras retornadas à Terra em 2023.",
        "Asteroide quase esférico com superfície rochosa; alto valor científico; baixíssima probabilidade de impacto futuro (final do século XXI).",
      ],
      bennu_risk: "🟢 Risco de impacto: Muito baixo (monitorado pela NASA)",
      bennu_canvas: "Modelo 3D do meteorito Bennu",

      // Card 3 — 4 Vesta
      vesta_title: "🪐 Asteroide (4) Vesta",
      vesta_dt: [
        "Localização:",
        "Descoberta:",
        "Tipo:",
        "Dimensão:",
        "Características notáveis:",
      ],
      vesta_dd: [
        "Cinturão principal de asteroides (entre Marte e Júpiter)",
        "1807 por Heinrich Olbers",
        "Rochoso (tipo V)",
        "≈ 525 km de diâmetro",
        "Um dos maiores corpos do cinturão; fonte de meteoritos HED; visitado pela sonda DAWN (NASA, 2011–2012).",
      ],
      vesta_risk: "🟢 Risco de impacto: Nulo (órbita estável no cinturão)",
      vesta_canvas: "Modelo 3D do asteroide 4 Vesta",

      // Card 4 — Chelyabinsk
      chely_title: "☄️ Meteorito de Chelyabinsk (Rússia)",
      chely_dt: [
        "Localização:",
        "Descoberta / Evento:",
        "Tipo:",
        "Dimensão:",
        "Características notáveis:",
      ],
      chely_dd: [
        "Região de Chelyabinsk, Rússia",
        "15 de fevereiro de 2013",
        "Condrito ordinário (LL5)",
        "≈ 20 metros de diâmetro",
        "Explodiu na atmosfera; onda de choque danificou milhares de prédios e feriu mais de 1.000 pessoas; um dos eventos mais documentados.",
      ],
      chely_risk: "🟡 Risco de impacto: Baixo (evento atmosférico já ocorrido)",
      chely_canvas: "Modelo 3D do meteorito Chelyabinsk",
    },
  };

  // ============================================
  // 🛠 Helpers
  // ============================================
  const setText = (el, txt) => { if (el) el.textContent = txt; };

  function applyKnownCard(cardEl, title, dts, dds, risk) {
    if (!cardEl) return;
    const titleEls = cardEl.querySelectorAll("h3");
    if (titleEls && titleEls.length) setText(titleEls[titleEls.length - 1], title);

    const dtEls = cardEl.querySelectorAll("dl dt");
    const ddEls = cardEl.querySelectorAll("dl dd");
    dts.forEach((t, i) => setText(dtEls[i], t));
    dds.forEach((t, i) => setText(ddEls[i], t));

    // Riesgo: puede ser .alerta-alta/.alerta-baja/.alerta-media
    const riskEl = cardEl.querySelector("[class^='alerta-']");
    setText(riskEl, risk);
  }

  // ==================================================
  // 🔄 Aplicar idioma a la sección #conocidos
  // ==================================================
  function applyConocidosLanguage(lang) {
    const t = tKnown[lang];
    const section = document.getElementById("conocidos");
    if (!section) return;

    // Título + descripción
    setText(section.querySelector("#conocidos-title"), t.section_title);
    setText(section.querySelector(".lead"), t.section_desc);

    // Todas las tarjetas
    const cards = section.querySelectorAll(".meteorite-section");
    if (cards.length < 5) return;

    // Card 0 — Chicxulub
    applyKnownCard(cards[0], t.cxx_title, t.cxx_dt, t.cxx_dd, t.cxx_risk);
    const canvasCxx = section.querySelector("#model-chicxulub");
    if (canvasCxx) canvasCxx.setAttribute("aria-label", t.cxx_canvas);

    // Card 1 — Hoba
    applyKnownCard(cards[1], t.hoba_title, t.hoba_dt, t.hoba_dd, t.hoba_risk);
    const canvasHoba = section.querySelector("#model-hoba");
    if (canvasHoba) canvasHoba.setAttribute("aria-label", t.hoba_canvas);

    // Card 2 — Bennu
    applyKnownCard(cards[2], t.bennu_title, t.bennu_dt, t.bennu_dd, t.bennu_risk);
    const canvasBennu = section.querySelector("#model-bennu");
    if (canvasBennu) canvasBennu.setAttribute("aria-label", t.bennu_canvas);

    // Card 3 — 4 Vesta
    applyKnownCard(cards[3], t.vesta_title, t.vesta_dt, t.vesta_dd, t.vesta_risk);
    const canvasVesta = section.querySelector("#model-4vesta");
    if (canvasVesta) canvasVesta.setAttribute("aria-label", t.vesta_canvas);

    // Card 4 — Chelyabinsk
    applyKnownCard(cards[4], t.chely_title, t.chely_dt, t.chely_dd, t.chely_risk);
    const canvasChely = section.querySelector("#model-chelyabinsk");
    if (canvasChely) canvasChely.setAttribute("aria-label", t.chely_canvas);
  }

  // 🌎 Cambio + persistencia
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("selectedLang", lang);
    applyConocidosLanguage(lang);
  });

  const savedLang = localStorage.getItem("selectedLang") || "en-US";
  langSelect.value = savedLang;
  applyConocidosLanguage(savedLang);
});