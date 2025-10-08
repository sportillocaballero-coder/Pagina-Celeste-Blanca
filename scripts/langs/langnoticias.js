document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");

  const tNews = {
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
      page_title: "Astronomical News",
      page_lead: "Real-time updates and today's featured image.",
      today_sr: "Featured news of the day",
      loading_today: "Loading today's news...",
      latest_title: "Latest news",
      loading_recent: "Loading recent news",
      apod_prefix: "🛰️ Picture of the day:",
      date_label: "Date:",
      view_hd: "View in high resolution",
      read_more: "Read more on NASA.gov",
      apod_error: "Could not load picture of the day.",
      recent_error: "Could not load recent news.",

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

      page_title: "Noticias Astronómicas",
      page_lead: "Actualizaciones en tiempo real y la imagen destacada de hoy.",
      today_sr: "Noticia destacada del día",
      loading_today: "Cargando la noticia de hoy...",
      latest_title: "Últimas noticias",
      loading_recent: "Cargando noticias recientes...",
      apod_prefix: "🛰️ Imagen del día:",
      date_label: "Fecha:",
      view_hd: "Ver en alta resolución",
      read_more: "Leer más en NASA.gov",
      apod_error: "No se pudo cargar la imagen del día.",
      recent_error: "No se pudieron cargar las noticias recientes.",

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

      page_title: "Notícias Astronômicas",
      page_lead: "Atualizações em tempo real e a imagem em destaque de hoje.",
      today_sr: "Notícia em destaque do dia",
      loading_today: "Carregando a notícia de hoje...",
      latest_title: "Últimas notícias",
      loading_recent: "Carregando notícias recentes...",
      apod_prefix: "🛰️ Imagem do dia:",
      date_label: "Data:",
      view_hd: "Ver em alta resolução",
      read_more: "Ler mais em NASA.gov",
      apod_error: "Não foi possível carregar a imagem do dia.",
      recent_error: "Não foi possível carregar as últimas notícias.",

            // FOOTER
      footer_contact: "Contato",
      footer_text:
        "Quer colaborar com o projeto ou enviar informações científicas?",
      email: "E-mail",
      project_info: "Projeto ARMET - NASA Space Apps Challenge",
    },
  };

  // Exponemos las strings para noticias.js
  function getNewsStrings(lang) {
    const fallback = "en-US";
    return tNews[lang] || tNews[fallback];
  }
  window.getNewsStrings = () => getNewsStrings(localStorage.getItem("selectedLang") || "en-US");

  // Aplica textos estáticos de la página Noticias
  function applyNoticiasLanguage(lang) {

    const t = getNewsStrings(lang);
    
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
    const heroTitle = document.getElementById("hero-title");
    const lead = document.querySelector(".hero-section .lead");
    const todaySr = document.getElementById("noticia-dia-title");
    const todayLoading = document.querySelector("#noticia-dia [role='status'] p");
    const latestTitle = document.getElementById("ultimas-noticias-title");
    const latestLoading = document.querySelector("#news-container [role='status'] p");

    if (heroTitle) heroTitle.textContent = t.page_title;
    if (lead) lead.textContent = t.page_lead;
    if (todaySr) todaySr.textContent = t.today_sr;
    if (todayLoading) todayLoading.textContent = t.loading_today;
    if (latestTitle) latestTitle.textContent = t.latest_title;
    if (latestLoading) latestLoading.textContent = t.loading_recent + "...";
    
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

  // Cambios y persistencia
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("selectedLang", lang);
    applyNoticiasLanguage(lang);
  });

  const saved = localStorage.getItem("selectedLang") || "en-US";
  langSelect.value = saved;
  applyNoticiasLanguage(saved);
});