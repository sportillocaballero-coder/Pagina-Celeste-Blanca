document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");

  // ==============================
  // 🌐 Traducciones — CALENDARIO
  // ==============================
  const tCal = {
    "en-US": {
      title: "📅 Upcoming Astronomical Events",
      sub:   "🌟 Upcoming Astronomical Events",
      resources: "🔗 External Resources",
      btn: "➕ Add to Google Calendar",

      // Eventos por índice (0..5)
      events: [
        { desc: "Geminids meteor shower - Peak activity", type: "🌠 Meteor shower" },
        { desc: "Quadrantids meteor shower",               type: "🌠 Meteor shower" },
        { desc: "Perseids meteor shower - Peak activity",  type: "🌠 Meteor shower" },
        { desc: "NEO Surveyor mission launch (NASA)",      type: "🚀 Space mission" },
        { desc: "Apophis - Maximum approach to Earth (31,600 km)", type: "🔴 Critical NEO" },
        { desc: "Asteroid 2024 YR₄ - Lunar approach",      type: "🟡 Monitored NEO" },
      ],
    },

    "es-AR": {
      title: "📅 Próximos Eventos Astronómicos",
      sub:   "🌟 Próximos Eventos Astronómicos",
      resources: "🔗 Recursos Externos",
      btn: "➕ Agregar al Google Calendar",

      events: [
        { desc: "Lluvia de Gemínidas — Máxima actividad",  type: "🌠 Lluvia de meteoros" },
        { desc: "Lluvia de Cuadrántidas",                  type: "🌠 Lluvia de meteoros" },
        { desc: "Lluvia de Perseidas — Máxima actividad",  type: "🌠 Lluvia de meteoros" },
        { desc: "Lanzamiento de la misión NEO Surveyor (NASA)", type: "🚀 Misión espacial" },
        { desc: "Apophis — Máximo acercamiento a la Tierra (31.600 km)", type: "🔴 NEO crítico" },
        { desc: "Asteroide 2024 YR₄ — Aproximación lunar", type: "🟡 NEO monitoreado" },
      ],
    },

    "pt-BR": {
      title: "📅 Próximos Eventos Astronômicos",
      sub:   "🌟 Próximos Eventos Astronômicos",
      resources: "🔗 Recursos Externos",
      btn: "➕ Adicionar ao Google Calendar",

      events: [
        { desc: "Chuva de meteoros Gemínidas — Pico de atividade", type: "🌠 Chuva de meteoros" },
        { desc: "Chuva de meteoros Quadrântidas",                  type: "🌠 Chuva de meteoros" },
        { desc: "Chuva de meteoros Perseidas — Pico de atividade", type: "🌠 Chuva de meteoros" },
        { desc: "Lançamento da missão NEO Surveyor (NASA)",        type: "🚀 Missão espacial" },
        { desc: "Apophis — Máxima aproximação à Terra (31.600 km)", type: "🔴 NEO crítico" },
        { desc: "Asteroide 2024 YR₄ — Aproximação lunar",          type: "🟡 NEO monitorado" },
      ],
    },
  };

  // =========================
  // 🛠 Helpers DOM
  // =========================
  const setText = (el, txt) => { if (el) el.textContent = txt; };

  // ==========================================
  // 🔄 Aplicar idioma al modal del calendario
  // ==========================================
  function applyCalendarLanguage(lang) {
    const t = tCal[lang];
    const modal = document.getElementById("calendar-modal");
    if (!modal) return;

    // Títulos
    setText(modal.querySelector(".calendar-content h2"), t.title);
    setText(modal.querySelector(".astronomy-events h3"), t.sub);
    const resH3 = modal.querySelector(".external-links h3");
    if (resH3) setText(resH3, t.resources);

    // Botón
    const btn = document.getElementById("addGoogleEvent");
    if (btn) setText(btn, t.btn);

    // Eventos (usa el mismo orden/índices que calendar.js)
    const items = modal.querySelectorAll(".event-item");
    items.forEach((item, i) => {
      const descEl = item.querySelector(".event-desc");
      const typeEl = item.querySelector(".event-type");
      const tr = t.events[i];
      if (!tr) return;
      setText(descEl, tr.desc);
      setText(typeEl, tr.type);
    });
  }

  // 🌎 Cambio + persistencia (coherente con el resto de módulos)
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("selectedLang", lang);
    applyCalendarLanguage(lang);
  });

  const savedLang = localStorage.getItem("selectedLang") || "en-US";
  langSelect.value = savedLang;
  applyCalendarLanguage(savedLang);
});