document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");

  // ==============================
  // 🌐 Traducciones — MITIGACIÓN
  // ==============================
  const tMit = {
    "en-US": {
      title: "Mitigation",
      intro_lead:
        "NASA leads global efforts to protect Earth from possible asteroid impacts. In 2016 it created the Planetary Defense Office, responsible for detecting, tracking and, if necessary, deflecting dangerous objects that may come too close to our planet.",

      neo_h2: "What are Near-Earth Objects (NEO)?",
      neo_p:
        "They are asteroids or comets that orbit the Sun and that, in certain trajectories, can pass close to or even collide with Earth.",

      nasa_h2: "What does NASA do to prevent impacts?",
      nasa_li: [
        "<strong>Detect and track asteroids:</strong> Uses telescopes, radars and space missions like <em>NEO Surveyor</em> to find them, measure their size and know their trajectory.",
        "<strong>Develop ways to deflect them:</strong> Creates simulations and technology to modify their course, as demonstrated by the <strong>DART</strong> mission.",
        "<strong>Prepare for emergencies:</strong> Coordinates with agencies like <em>FEMA</em> to define response protocols for potential threats.",
        "<strong>Collaborate with the world:</strong> Works with other international space agencies and educates the public about risks and possible solutions."
      ],

      dart_h2: "Real case: the DART mission",
      dart_p:
        "In 2022, NASA launched the <strong>DART</strong> mission, the first real test to check if it's possible to deflect an asteroid by impacting a spacecraft against it. The target was <strong>Dimorphos</strong>, a small asteroid that orbits <strong>Didymos</strong>. The spacecraft successfully impacted and managed to modify its orbit, demonstrating that, with sufficient time, a catastrophe can be avoided.",

      tech_h3: "Featured technology in DART",
      tech_li: [
        "<strong>SMART Nav:</strong> autonomous navigation system that guided the spacecraft and corrected its course in real time.",
        "<strong>DRACO:</strong> high-precision optical camera to identify the target before impact.",
        "<strong>NEXT-C ion propulsion:</strong> efficient engine designed for prolonged missions."
      ],

      outro_lead:
        "These technologies mark the beginning of a new era in <strong>planetary defense</strong>, showing that humanity can prepare and act against real cosmic threats."
    },

    "es-AR": {
      title: "Mitigación y Defensa Planetaria",
      intro_lead:
        "La NASA lidera los esfuerzos globales para proteger la Tierra de posibles impactos de asteroides. En 2016 creó la <strong>Oficina de Coordinación de Defensa Planetaria</strong>, responsable de detectar, rastrear y, si es necesario, desviar objetos peligrosos que puedan acercarse demasiado a nuestro planeta.",

      neo_h2: "¿Qué son los Objetos Cercanos a la Tierra (NEO)?",
      neo_p:
        "Son asteroides o cometas que orbitan el Sol y que, en ciertas trayectorias, pueden pasar cerca o incluso colisionar con la Tierra.",

      nasa_h2: "¿Qué hace la NASA para prevenir impactos?",
      nasa_li: [
        "<strong>Detectar y rastrear asteroides:</strong> Utiliza telescopios, radares y misiones espaciales como <em>NEO Surveyor</em> para encontrarlos, medir su tamaño y conocer su trayectoria.",
        "<strong>Desarrollar formas de desviarlos:</strong> Crea simulaciones y tecnología para modificar su curso, como lo demostró la misión <strong>DART</strong>.",
        "<strong>Prepararse para emergencias:</strong> Coordina con agencias como <em>FEMA</em> para definir protocolos de respuesta ante amenazas potenciales.",
        "<strong>Colaborar con el mundo:</strong> Trabaja con otras agencias espaciales internacionales y educa al público sobre riesgos y soluciones posibles."
      ],

      dart_h2: "Caso real: la misión DART",
      dart_p:
        "En 2022, la NASA lanzó la misión <strong>DART</strong>, la primera prueba real para verificar si es posible desviar un asteroide impactando una nave contra él. El objetivo fue <strong>Dimorphos</strong>, un pequeño asteroide que orbita a <strong>Didymos</strong>. La nave impactó con éxito y logró modificar su órbita, demostrando que, con suficiente tiempo, se puede evitar una catástrofe.",

      tech_h3: "Tecnologías destacadas en DART",
      tech_li: [
        "<strong>SMART Nav:</strong> sistema de navegación autónoma que guió la nave y corrigió su rumbo en tiempo real.",
        "<strong>DRACO:</strong> cámara óptica de alta precisión para identificar el objetivo antes del impacto.",
        "<strong>Propulsión iónica NEXT-C:</strong> motor eficiente diseñado para misiones prolongadas."
      ],

      outro_lead:
        "Estas tecnologías marcan el inicio de una nueva era en la <strong>defensa planetaria</strong>, mostrando que la humanidad puede prepararse y actuar frente a amenazas cósmicas reales."
    },

    "pt-BR": {
      title: "Mitigação e Defesa Planetária",
      intro_lead:
        "A NASA lidera os esforços globais para proteger a Terra de possíveis impactos de asteroides. Em 2016 criou o <strong>Escritório de Coordenação de Defesa Planetária</strong>, responsável por detectar, rastrear e, se necessário, desviar objetos perigosos que possam se aproximar demais do nosso planeta.",

      neo_h2: "O que são Objetos Próximos da Terra (NEO)?",
      neo_p:
        "São asteroides ou cometas que orbitam o Sol e que, em certas trajetórias, podem passar perto ou até colidir com a Terra.",

      nasa_h2: "O que a NASA faz para evitar impactos?",
      nasa_li: [
        "<strong>Detectar e rastrear asteroides:</strong> Usa telescópios, radares e missões espaciais como <em>NEO Surveyor</em> para encontrá-los, medir seu tamanho e conhecer sua trajetória.",
        "<strong>Desenvolver formas de desviá-los:</strong> Cria simulações e tecnologia para modificar sua rota, como demonstrado pela missão <strong>DART</strong>.",
        "<strong>Preparar-se para emergências:</strong> Coordena com agências como a <em>FEMA</em> para definir protocolos de resposta.",
        "<strong>Colaborar com o mundo:</strong> Trabalha com outras agências espaciais e educa o público sobre riscos e soluções."
      ],

      dart_h2: "Caso real: a missão DART",
      dart_p:
        "Em 2022, a NASA lançou a missão <strong>DART</strong>, o primeiro teste real para verificar se é possível desviar um asteroide impactando uma nave contra ele. O alvo foi <strong>Dimorphos</strong>, um pequeno asteroide que orbita <strong>Didymos</strong>. A nave impactou com sucesso e conseguiu modificar sua órbita, demonstrando que, com tempo suficiente, é possível evitar uma catástrofe.",

      tech_h3: "Tecnologias em destaque na DART",
      tech_li: [
        "<strong>SMART Nav:</strong> sistema de navegação autônoma que guiou a nave e corrigiu o curso em tempo real.",
        "<strong>DRACO:</strong> câmera óptica de alta precisão para identificar o alvo antes do impacto.",
        "<strong>Propulsão iônica NEXT-C:</strong> motor eficiente projetado para missões prolongadas."
      ],

      outro_lead:
        "Essas tecnologias marcam o início de uma nova era na <strong>defesa planetária</strong>, mostrando que a humanidade pode se preparar e agir contra ameaças cósmicas reais."
    }
  };

  // =========================
  // 🛠 Helpers DOM
  // =========================
  const setHTML = (el, html) => { if (el) el.innerHTML = html; };

  // ==========================================
  // 🔄 Aplicar idioma a #mitigacion
  // ==========================================
  function applyMitigacionLanguage(lang) {
    const t = tMit[lang];
    const sec = document.getElementById("mitigacion");
    if (!sec) return;

    // Título principal
    const h1 = sec.querySelector(".hero-content .hero-title");
    if (h1) h1.textContent = t.title;

    // Párrafo intro (lead) — primer .lead dentro de hero-content
    const leads = sec.querySelectorAll(".hero-content .lead");
    if (leads[0]) setHTML(leads[0], t.intro_lead);

    // NEO
    const neoH2 = sec.querySelector(".hero-content h2:nth-of-type(1)");
    const neoP  = neoH2 ? neoH2.nextElementSibling : null;
    if (neoH2) neoH2.textContent = t.neo_h2;
    if (neoP && neoP.tagName === "P") neoP.textContent = t.neo_p;

    // ¿Qué hace la NASA…?
    const nasaH2 = sec.querySelector(".hero-content h2:nth-of-type(2)");
    const nasaUL = nasaH2 ? nasaH2.nextElementSibling : null;
    if (nasaH2) nasaH2.textContent = t.nasa_h2;
    if (nasaUL && nasaUL.tagName === "UL") {
      const items = nasaUL.querySelectorAll("li");
      t.nasa_li.forEach((html, i) => { if (items[i]) setHTML(items[i], html); });
    }

    // DART
    const dartH2 = sec.querySelector(".hero-content h2:nth-of-type(3)");
    const dartP  = dartH2 ? dartH2.nextElementSibling : null;
    if (dartH2) dartH2.textContent = t.dart_h2;
    if (dartP && dartP.tagName === "P") setHTML(dartP, t.dart_p);

    // Tecnologías
    const techH3 = sec.querySelector(".hero-content h3");
    const techUL = techH3 ? techH3.nextElementSibling : null;
    if (techH3) techH3.textContent = t.tech_h3;
    if (techUL && techUL.tagName === "UL") {
      const items = techUL.querySelectorAll("li");
      t.tech_li.forEach((html, i) => { if (items[i]) setHTML(items[i], html); });
    }

    // Párrafo cierre (segundo .lead)
    if (leads[1]) setHTML(leads[1], t.outro_lead);

    // Accesibilidad del video (opcional)
    const bgVideo = document.getElementById("bg-video-mitigacion");
    if (bgVideo) {
      bgVideo.setAttribute(
        "aria-label",
        lang === "es-AR" ? "Video de fondo para la sección de mitigación" :
        lang === "pt-BR" ? "Vídeo de fundo para a seção de mitigação" :
                           "Background video for mitigation section"
      );
    }
  }

  // 🌎 Cambio + persistencia
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("selectedLang", lang);
    applyMitigacionLanguage(lang);
  });

  const saved = localStorage.getItem("selectedLang") || "en-US";
  langSelect.value = saved;
  applyMitigacionLanguage(saved);
});