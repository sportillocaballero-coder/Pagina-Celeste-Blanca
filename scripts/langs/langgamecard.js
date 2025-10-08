// ==========================================================
// 🌐 Módulo de idioma para la página GameCard
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Buscar el selector de idioma (debe existir en el header)
  const langSelect = document.getElementById("langSelect");
  if (!langSelect) {
    console.error("❌ No se encontró el selector de idioma (langSelect).");
    return;
  }

  // =====================================
  // Diccionario de traducciones
  // =====================================
  const translations = {
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


      page_title: "GameCard",
      page_lead:
        "Welcome to the interactive module of Celeste & Blanca Space! Soon you'll be able to play, learn and earn points discovering the secrets of space.",
      zone_title: "Game zone",
      start_btn: "Start game",
      // Game translations
      lives: "Lives",
      round: "Round",
      points: "Points",
      select_defense: "Select your defense",
      resolve_btn: "Resolve round",
      next_btn: "Next",
      reset_btn: "Reset",
      success: "✅ Successful defense! Earth is safe.",
      fail: "💥 Failed impact. Earth suffers damage.",
      game_over: "☠️ Game over — Earth was impacted.",
      victory: "🌎 Victory! You defended Earth for 5 rounds.",
      size: "Size",
      speed: "Speed",
      type: "Type",
      km_s: "km/s",

      footer_contact: "Contact",
      footer_text:
        "Want to collaborate with the project or send scientific information?",
      email: "Email",
      project_info: "ARMET Project - NASA Space Apps Challenge",
    
    },

    "es-AR": {
      page_title: "Juego de Cartas",
      page_lead:
        "¡Bienvenido al módulo interactivo de Celeste y Blanca Space! Pronto vas a poder jugar, aprender y sumar puntos descubriendo los secretos del espacio.",
      zone_title: "Zona de Juego",
      start_btn: "Iniciar juego",

            // HEADER
      home: "Inicio",
      upcoming: "Meteoritos Próximos",
      known: "Meteoritos Conocidos",
      news: "Noticias",
      mitigation: "Mitigación",
      gamecard: "Juego de Cartas",
      contact: "Contacto",
      calendar: "🗓️ Calendario Astronómico",


      // Game translations
      lives: "Vidas",
      round: "Ronda",
      points: "Puntos",
      select_defense: "Selecciona tu defensa",
      resolve_btn: "Resolver ronda",
      next_btn: "Siguiente",
      reset_btn: "Reiniciar",
      success: "✅ ¡Defensa exitosa! La Tierra está a salvo.",
      fail: "💥 Impacto fallido. La Tierra sufre daño.",
      game_over: "☠️ Juego terminado — La Tierra fue impactada.",
      victory: "🌎 ¡Victoria! Defendiste la Tierra por 5 rondas.",
      size: "Tamaño",
      speed: "Velocidad",
      type: "Tipo",
      km_s: "km/s",

            // FOOTER
      footer_contact: "Contacto",
      footer_text:
        "¿Querés colaborar con el proyecto o enviar información científica?",
      email: "Correo",
      project_info: "Proyecto ARMET - NASA Space Apps Challenge",
    },

    "pt-BR": {
      page_title: "Jogo de Cartas",
      page_lead:
        "Bem-vindo ao módulo interativo do Celeste & Blanca Space! Em breve você poderá jogar, aprender e ganhar pontos descobrindo os segredos do espaço.",
      zone_title: "Zona de Jogo",
      start_btn: "Iniciar jogo",

            // HEADER
      home: "Início",
      upcoming: "Meteoritos Próximos",
      known: "Meteoritos Conhecidos",
      news: "Notícias",
      mitigation: "Mitigação",
      gamecard: "Jogo de Cartas",
      contact: "Contato",
      calendar: "🗓️ Calendário Astronômico",

      // Game translations
      lives: "Vidas",
      round: "Rodada",
      points: "Pontos",
      select_defense: "Selecione sua defesa",
      resolve_btn: "Resolver rodada",
      next_btn: "Próximo",
      reset_btn: "Reiniciar",
      success: "✅ Defesa bem-sucedida! A Terra está segura.",
      fail: "💥 Impacto falhou. A Terra sofre danos.",
      game_over: "☠️ Fim de jogo — A Terra foi impactada.",
      victory: "🌎 Vitória! Você defendeu a Terra por 5 rodadas.",
      size: "Tamanho",
      speed: "Velocidade",
      type: "Tipo",
      km_s: "km/s",

            // FOOTER
      footer_contact: "Contato",
      footer_text:
        "Quer colaborar com o projeto ou enviar informações científicas?",
      email: "E-mail",
      project_info: "Projeto ARMET - NASA Space Apps Challenge",
    },
  };

  // =====================================
  // Función para aplicar el idioma actual
  // =====================================
  function applyLanguage(lang) {
    const t = translations[lang] || translations["en-US"];

    // HEADER NAVIGATION
    const navLinks = document.querySelectorAll('.navbar a');
    if (navLinks.length >= 7) {
      navLinks[0].textContent = t.home; // Home
      navLinks[1].textContent = t.upcoming; // Upcoming Meteorites
      navLinks[2].textContent = t.known; // Known Meteorites
      navLinks[3].textContent = t.news; // News
      navLinks[4].textContent = t.mitigation; // Mitigation
      navLinks[5].textContent = t.gamecard; // GameCard
      navLinks[6].textContent = t.contact; // Contact
    }
    
    // CALENDAR BUTTON
    const calendarBtn = document.getElementById("calendar-btn");
    if (calendarBtn) calendarBtn.textContent = t.calendar;

    // MAIN CONTENT
    const title = document.getElementById("game-title");
    const lead = document.querySelector(".hero-section .lead");
    const zoneTitle = document.getElementById("game-zone-title");
    const startBtn = document.getElementById("start-btn");

    if (title) title.textContent = t.page_title;
    if (lead) lead.textContent = t.page_lead;
    if (zoneTitle) zoneTitle.textContent = t.zone_title;
    if (startBtn) startBtn.textContent = t.start_btn;

    // FOOTER
    const footerContactTitle = document.querySelector('.footer-section h3');
    const footerText = document.querySelector('.footer-section p');
    const emailLabel = document.querySelector('.footer-section p strong');
    const projectTitle = document.querySelectorAll('.footer-section h3')[1];
    const projectInfo = document.querySelectorAll('.footer-section p')[2];
    
    if (footerContactTitle) footerContactTitle.textContent = t.footer_contact;
    if (footerText) footerText.innerHTML = t.footer_text;
    if (emailLabel) emailLabel.textContent = t.email + ':';
    if (projectTitle) projectTitle.textContent = 'Celeste & Blanca Space';
    if (projectInfo) projectInfo.innerHTML = t.project_info + '<br>&copy; 2025 All rights reserved';
  }

  // =====================================
  // Función global para el juego
  // =====================================
  window.getGameStrings = function() {
    const currentLang = localStorage.getItem("selectedLang") || "en-US";
    return translations[currentLang] || translations["en-US"];
  };

  // =====================================
  // Cambio de idioma + persistencia local
  // =====================================
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("selectedLang", lang);
    applyLanguage(lang);
    
    // Si el juego está activo, actualizar sus textos también
    if (document.querySelector(".game-screen .status-bar")) {
      // Disparar evento personalizado para que gamecard.js sepa que cambió el idioma
      window.dispatchEvent(new CustomEvent('languageChanged'));
    }
  });

  // Idioma guardado o por defecto
  const savedLang = localStorage.getItem("selectedLang") || "en-US";
  langSelect.value = savedLang;
  applyLanguage(savedLang);
});
