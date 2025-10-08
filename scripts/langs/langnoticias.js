document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");

  const tNews = {
    "en-US": {
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
    },
    "es-AR": {
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
    },
    "pt-BR": {
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