document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");

  // ==============================
  // 🌐 Traducciones de INICIO
  // ==============================
  const translations_inicio = {
    "en-US": {
      // HEADER
      home: "Home",
      upcoming: "Upcoming Meteorites",
      known: "Known Meteorites",
      news: "News",
      mitigation: "Mitigation",
      gamecard: "GameCard",
      contact: "Contact",
      calendar: "🗓️ Astronomical Calendar",

      // HERO SECTION
      hero_title: "ARMET",
      hero_sub: "Active Research for Meteor Targeting",
      hero_text:
        "We are Celeste y Blanca Space. We provide an educational and visual web tool capable of informing, raising awareness, and preparing for possible threats from nearby asteroids.",
      audio_play: "🔊 Ambient Audio",
      audio_pause: "🔇 Pause Audio",

      // FOOTER
      footer_contact: "Contact",
      footer_text:
        "Want to collaborate with the project or send scientific information?",
      email: "Email",
      project_info: "ARMET Project - NASA Space Apps Challenge",
    },

    "es-AR": {
      // HEADER
      home: "Inicio",
      upcoming: "Meteoritos Próximos",
      known: "Meteoritos Conocidos",
      news: "Noticias",
      mitigation: "Mitigación",
      gamecard: "Juego de Cartas",
      contact: "Contacto",
      calendar: "🗓️ Calendario Astronómico",

      // HERO SECTION
      hero_title: "ARMET",
      hero_sub: "Investigación Activa de Meteoritos y Asteroides Cercanos",
      hero_text:
        "Somos Celeste y Blanca Space. Creamos una herramienta web educativa y visual que informa, concientiza y prepara frente a posibles amenazas de asteroides cercanos a la Tierra.",
      audio_play: "🔊 Audio Ambiental",
      audio_pause: "🔇 Pausar Audio",

      // FOOTER
      footer_contact: "Contacto",
      footer_text:
        "¿Querés colaborar con el proyecto o enviar información científica?",
      email: "Correo",
      project_info: "Proyecto ARMET - NASA Space Apps Challenge",
    },

    "pt-BR": {
      // HEADER
      home: "Início",
      upcoming: "Meteoritos Próximos",
      known: "Meteoritos Conhecidos",
      news: "Notícias",
      mitigation: "Mitigação",
      gamecard: "Jogo de Cartas",
      contact: "Contato",
      calendar: "🗓️ Calendário Astronômico",

      // HERO SECTION
      hero_title: "ARMET",
      hero_sub: "Pesquisa Ativa de Meteoros e Asteroides Próximos à Terra",
      hero_text:
        "Somos Celeste y Blanca Space. Fornecemos uma ferramenta web educativa e visual para informar, conscientizar e preparar sobre possíveis ameaças de asteroides próximos.",
      audio_play: "🔊 Áudio Ambiental",
      audio_pause: "🔇 Pausar Áudio",

      // FOOTER
      footer_contact: "Contato",
      footer_text:
        "Quer colaborar com o projeto ou enviar informações científicas?",
      email: "E-mail",
      project_info: "Projeto ARMET - NASA Space Apps Challenge",
    },
  };

  // =========================================
  // 🔄 Aplicar idioma (solo inicio y footer)
  // =========================================
  function applyInicioLanguage(lang) {
    const t = translations_inicio[lang];

    // HEADER
    const nav = document.querySelectorAll(".navbar a");
    if (nav.length >= 7) {
      nav[0].textContent = t.home;
      nav[1].textContent = t.upcoming;
      nav[2].textContent = t.known;
      nav[3].textContent = t.news;
      nav[4].textContent = t.mitigation;
      nav[5].textContent = t.gamecard;
      nav[6].textContent = t.contact;
    }

    const calendarBtn = document.getElementById("calendar-btn");
    if (calendarBtn) calendarBtn.textContent = t.calendar;

    // HERO
    const heroTitle = document.querySelector(".hero-title");
    const heroSub = document.querySelector(".section-title");
    const heroText = document.querySelector(".lead");
    const audioBtn = document.getElementById("audio-toggle");

    if (heroTitle) heroTitle.textContent = t.hero_title;
    if (heroSub) heroSub.textContent = t.hero_sub;
    if (heroText) heroText.textContent = t.hero_text;
    if (audioBtn)
      audioBtn.textContent = audioBtn.classList.contains("playing")
        ? t.audio_pause
        : t.audio_play;

    // FOOTER
    const footerSections = document.querySelectorAll(".footer-section");
    if (footerSections.length >= 2) {
      footerSections[0].querySelector("h3").textContent = t.footer_contact;
      footerSections[0].querySelector("p").textContent = t.footer_text;
      const emailStrong = footerSections[0].querySelector("strong");
      if (emailStrong) emailStrong.textContent = t.email + ":";
      footerSections[1].querySelector("p").textContent = t.project_info;
    }
  }

  // 🌎 Cambio de idioma + persistencia
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("selectedLang", lang);
    applyInicioLanguage(lang);
  });

  const savedLang = localStorage.getItem("selectedLang") || "en-US";
  langSelect.value = savedLang;
  applyInicioLanguage(savedLang);
});