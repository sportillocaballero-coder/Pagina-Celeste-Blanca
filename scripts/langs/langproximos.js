document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");

  // ==============================
  // 🌐 Traducciones — PROXIMOS
  // ==============================
  const tProx = {
    "en-US": {
      section_title: "🌍 Meteorites Near Earth",
      section_desc: "Updated data of the closest celestial bodies detected during the present.",

      // Apophis
      apophis_title: "☄️ 99942 Apophis",
      apophis_dt: [
        "Minimum distance:",
        "Relative velocity:",
        "Estimated size:",
        "Approximate mass:",
        "Composition:",
        "Date of maximum approach:",
      ],
      apophis_dd: [
        "31,600 km (above Earth's surface)",
        "≈ (to be defined)",
        "≈ 340 m diameter",
        "≈ (to be defined)",
        "Silicate (olivine, pyroxene, iron and nickel)",
        "April 13, 2029 — ~32,000 km",
      ],
      apophis_risk: "🟢 Impact risk: Very low (0 on Turin scale)",

      // 2024 YR4
      yr4_title: "☄️ Asteroid 2024 YR₄",
      yr4_dt: [
        "Minimum distance:",
        "Relative velocity:",
        "Estimated size:",
        "Approximate mass:",
        "Type and composition:",
        "Date of maximum approach:",
      ],
      yr4_dd: [
        "≈ 384,000 km (approximately Moon's distance)",
        "(to be defined)",
        "≈ 40–90 m diameter",
        "Not precisely determined (estimated in millions of tons)",
        "Apollo-type asteroid, rocky (silicates with metallic traces)",
        "2032 (will pass near lunar orbit)",
      ],
      yr4_risk: "🟢 Impact risk: Very low (monitored by NASA)",
    },

    "es-AR": {
      section_title: "🌍 Meteoritos Cercanos a la Tierra",
      section_desc: "Datos actualizados de los cuerpos celestes más próximos detectados en el presente.",

      // Apophis
      apophis_title: "☄️ 99942 Apophis",
      apophis_dt: [
        "Distancia mínima:",
        "Velocidad relativa:",
        "Tamaño estimado:",
        "Masa aproximada:",
        "Composición:",
        "Fecha de máximo acercamiento:",
      ],
      apophis_dd: [
        "31.600 km (sobre la superficie terrestre)",
        "≈ (a definir)",
        "≈ 340 m de diámetro",
        "≈ (a definir)",
        "Silicatos (olivino, piroxeno), hierro y níquel",
        "13 de abril de 2029 — ~32.000 km",
      ],
      apophis_risk: "🟢 Riesgo de impacto: Muy bajo (0 en la escala de Turín)",

      // 2024 YR4
      yr4_title: "☄️ Asteroide 2024 YR₄",
      yr4_dt: [
        "Distancia mínima:",
        "Velocidad relativa:",
        "Tamaño estimado:",
        "Masa aproximada:",
        "Tipo y composición:",
        "Fecha de máximo acercamiento:",
      ],
      yr4_dd: [
        "≈ 384.000 km (aprox. distancia a la Luna)",
        "(a definir)",
        "≈ 40–90 m de diámetro",
        "No determinada con precisión (estimada en millones de toneladas)",
        "Tipo Apolo, rocoso (silicatos con trazas metálicas)",
        "2032 (pasará cerca de la órbita lunar)",
      ],
      yr4_risk: "🟢 Riesgo de impacto: Muy bajo (monitoreado por la NASA)",
    },

    "pt-BR": {
      section_title: "🌍 Meteoritos Próximos da Terra",
      section_desc: "Dados atualizados dos corpos celestes mais próximos detectados no presente.",

      // Apophis
      apophis_title: "☄️ 99942 Apophis",
      apophis_dt: [
        "Distância mínima:",
        "Velocidade relativa:",
        "Tamanho estimado:",
        "Massa aproximada:",
        "Composição:",
        "Data de máxima aproximação:",
      ],
      apophis_dd: [
        "31.600 km (acima da superfície terrestre)",
        "≈ (a definir)",
        "≈ 340 m de diâmetro",
        "≈ (a definir)",
        "Silicatos (olivina, piroxênio), ferro e níquel",
        "13 de abril de 2029 — ~32.000 km",
      ],
      apophis_risk: "🟢 Risco de impacto: Muito baixo (0 na escala de Turim)",

      // 2024 YR4
      yr4_title: "☄️ Asteroide 2024 YR₄",
      yr4_dt: [
        "Distância mínima:",
        "Velocidade relativa:",
        "Tamanho estimado:",
        "Massa aproximada:",
        "Tipo e composição:",
        "Data de máxima aproximação:",
      ],
      yr4_dd: [
        "≈ 384.000 km (aprox. distância da Lua)",
        "(a definir)",
        "≈ 40–90 m de diâmetro",
        "Não determinada com precisão (estimada em milhões de toneladas)",
        "Tipo Apolo, rochoso (silicatos com traços metálicos)",
        "2032 (passará perto da órbita lunar)",
      ],
      yr4_risk: "🟢 Risco de impacto: Muito baixo (monitorado pela NASA)",
    },
  };

  // ============================================
  // 🛠 Helpers para aplicar textos en el DOM
  // ============================================
  function setText(el, txt) {
    if (el) el.textContent = txt;
  }

  function applyCard(cardEl, titleTxt, dtList, ddList, riskTxt) {
    if (!cardEl) return;

    // Título
    const h3 = cardEl.querySelector("h3");
    setText(h3, titleTxt);

    // Etiquetas y valores
    const dts = cardEl.querySelectorAll("dl dt");
    const dds = cardEl.querySelectorAll("dl dd");

    dtList.forEach((txt, i) => setText(dts[i], txt));
    ddList.forEach((txt, i) => setText(dds[i], txt));

    // Riesgo
    const riskP = cardEl.querySelector(".alerta-baja");
    setText(riskP, riskTxt);
  }

  // ==================================================
  // 🔄 Aplicar idioma a la sección #proximos
  // ==================================================
  function applyProximosLanguage(lang) {
    const t = tProx[lang];
    const section = document.getElementById("proximos");
    if (!section) return;

    // Título y descripción de la sección
    const title = section.querySelector("#proximos-title");
    const lead = section.querySelector(".lead");
    setText(title, t.section_title);
    setText(lead, t.section_desc);

    // Tarjetas
    const cards = section.querySelectorAll(".meteorite-card-next");
    // Card 0: Apophis
    applyCard(cards[0], t.apophis_title, t.apophis_dt, t.apophis_dd, t.apophis_risk);
    // Card 1: 2024 YR4
    applyCard(cards[1], t.yr4_title, t.yr4_dt, t.yr4_dd, t.yr4_risk);

    // (Opcional) aria-label del canvas
    const model1 = section.querySelector("#model-proximo1");
    const model2 = section.querySelector("#model-proximo2");
    if (model1) model1.setAttribute("aria-label", lang === "es-AR" ? "Modelo 3D del asteroide Apophis" :
                                     lang === "pt-BR" ? "Modelo 3D do asteroide Apophis" :
                                     "3D model of asteroid Apophis");
    if (model2) model2.setAttribute("aria-label", lang === "es-AR" ? "Modelo 3D del asteroide 2024 YR4" :
                                     lang === "pt-BR" ? "Modelo 3D do asteroide 2024 YR4" :
                                     "3D model of asteroid 2024 YR4");
  }

  // 🌎 Cambio + persistencia
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("selectedLang", lang);
    applyProximosLanguage(lang);
  });

  const savedLang = localStorage.getItem("selectedLang") || "en-US";
  langSelect.value = savedLang;
  applyProximosLanguage(savedLang);
});