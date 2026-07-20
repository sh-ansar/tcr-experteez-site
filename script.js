(() => {
  'use strict';

  const translations = {
    en: {
      nav: { company: 'Company', expertise: 'Expertise', advantages: 'Advantages', process: 'How We Work', contact: 'Contact' },
      common: { contactUs: 'Contact Us' },
      hero: {
        eyebrow: 'International equipment & technology brokerage',
        title: 'Advanced Equipment. Drone Components. Global Brokerage Expertise.',
        point1: 'Global Connection', point2: 'Technology Focus', point3: 'Practical Support',
        copyRest: ' provides consulting and\u00A0brokerage support for\u00A0international equipment supply, drone-related components, and\u00A0specialist technology parts — connecting companies, countries, and people\u00A0through reliable cross-border cooperation.'
      },
      manifesto: {
        eyebrow: 'Our vision', line1: 'We envision being a\u00A0leading force', line2: 'in\u00A0the\u00A0industry, driven by\u00A0innovation,', line3: 'integrity, and\u00A0inclusivity, creating', line4: 'a\u00A0brighter financial future', line5: 'for\u00A0individuals and\u00A0businesses while', line6: 'maintaining a\u00A0strong commitment', line7: 'to\u00A0customer satisfaction', line8: 'and\u00A0community development.'
      },
      mission: { kicker: 'Purpose', title: 'Mission', copy: 'Our role is to make complex sourcing easier: from\u00A0the\u00A0first inquiry and\u00A0specification alignment to\u00A0supplier communication, offer coordination, and\u00A0transaction support.' },
      vision: { kicker: 'Direction', title: 'Vision', copy: 'We help businesses, manufacturers, distributors, and\u00A0professional buyers find the\u00A0right partners, clarify technical requirements, and\u00A0coordinate commercial communication across markets.' },
      services: {
        title1: 'What We', title2: 'Offer',
        item1: { title: 'Consulting &\u00A0Brokerage', b1: 'International equipment sourcing advisory', b2: 'Supplier and buyer communication support', b3: 'Coordination of commercial terms and requests' },
        item2: { title: 'Advanced Equipment Supply Support', b1: 'Search for suitable equipment and components', b2: 'Specification clarification and product matching', b3: 'Multi-country sourcing route planning' },
        item3: { title: 'Drone Components &\u00A0Technology Parts', b1: 'Brokerage support for drone-related parts and accessories', b2: 'Supplier search and offer coordination', b3: 'Support with technical and procurement documentation' },
        item4: { title: 'Cross-Border Trade Mediation', b1: 'Connecting manufacturers, distributors, and end clients', b2: 'Negotiation support between international parties', b3: 'Assistance with purchase requests, offers, and logistics data' },
        item5: { title: 'Compliance &\u00A0Documentation Support', b1: 'Preliminary document and specification checks', b2: 'Coordination of invoices, certificates, and product data where applicable', b3: 'Support aligned with applicable trade and export-control requirements' }
      },
      advantages: {
        title1: 'Why', title2: 'Work', title3: 'With Us',
        card1: { title: 'Global Connection', copy: 'We bridge markets, suppliers, and\u00A0clients across countries with\u00A0reliable international coordination.' },
        card2: { title: 'Technology Focus', copy: 'Equipment, drone components, and\u00A0specialist parts for\u00A0complex technical procurement needs.' },
        card3: { title: 'Flexible Brokerage Model', copy: 'Support from initial inquiry to\u00A0final agreement, with\u00A0flexible deal coordination.' },
        card4: { title: 'Clear Alignment', copy: 'Requirements, specifications, and\u00A0expectations aligned between all involved parties.' },
        card5: { title: 'Practical Support', copy: 'Efficient coordination without\u00A0unnecessary layers, delays, or\u00A0duplicated communication.' }
      },
      process: {
        step1: { title: 'Request &\u00A0Specification', copy: 'We clarify the\u00A0business need, technical parameters, target market, and\u00A0delivery expectations.' },
        step2: { title: 'Partner Search', copy: 'We identify relevant suppliers, manufacturers, distributors, or\u00A0buyers.' },
        step3: { title: 'Offer Coordination', copy: 'We help collect offers, compare terms, and\u00A0align commercial communication.' },
        step4: { title: 'Documentation Support', copy: 'We coordinate product data, invoices, certificates, and\u00A0trade documents where applicable.' },
        step5: { title: 'Ongoing Cooperation', copy: 'We support long-term communication between parties and\u00A0future supply requests.' }
      },
      uk: { kicker: 'International base', title1: 'Why in the', title2: 'UK', p1: 'Operating from\u00A0London, TCR Experteez Ltd is\u00A0positioned to\u00A0support international partnerships, negotiations, and\u00A0cross-border business communication.', p2: 'The UK business environment adds credibility for\u00A0global commercial relationships, while\u00A0London gives companies access to\u00A0diverse markets, professional services, and\u00A0international business networks.' },
      footer: { kicker: 'Ready to discuss a request?', rights: 'All Rights Reserved', privacy: 'Privacy\u00A0Policy' },
      form: { kicker: 'New business inquiry', title: 'Tell us what you need', intro: 'Describe the equipment, components, or commercial support required. We will respond using the contact details provided.', name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', message: 'Request details', consent: 'I agree to the processing of the submitted information in accordance with the Privacy Policy.', submit: 'Send Request', sending: 'Sending…', success: 'Thank you. Your request has been sent.', error: 'The request could not be sent. Please try again or email us directly.', validation: 'Please complete the required fields correctly.' }
    },
    ru: {
      nav: { company: 'Компания', expertise: 'Компетенции', advantages: 'Преимущества', process: 'Как мы работаем', contact: 'Контакты' },
      common: { contactUs: 'Связаться' },
      hero: {
        eyebrow: 'Международный брокеридж оборудования и\u00A0технологий',
        title: 'Передовое оборудование. Компоненты для\u00A0дронов. Международная брокерская экспертиза.',
        point1: 'Глобальные связи', point2: 'Технологическая специализация', point3: 'Практическое сопровождение',
        copyRest: ' оказывает консультационную и\u00A0брокерскую поддержку в\u00A0сфере международных поставок оборудования, компонентов для\u00A0беспилотных систем и\u00A0специализированных технологических решений, объединяя компании, страны и\u00A0специалистов посредством надежного трансграничного взаимодействия.'
      },
      manifesto: {
        eyebrow: 'Наше видение', line1: 'Мы стремимся стать одной из\u00A0ведущих сил', line2: 'отрасли, развиваясь на\u00A0основе инноваций,', line3: 'добросовестности и\u00A0открытого сотрудничества,', line4: 'создавая устойчивые возможности', line5: 'для\u00A0компаний и\u00A0профессиональных участников рынка,', line6: 'сохраняя последовательную ориентацию', line7: 'на\u00A0удовлетворенность клиентов', line8: 'и\u00A0развитие делового сообщества.'
      },
      mission: { kicker: 'Назначение', title: 'Миссия', copy: 'Наша задача — сделать сложные закупки понятнее и\u00A0управляемее: от\u00A0первичного запроса и\u00A0согласования спецификации до\u00A0взаимодействия с\u00A0поставщиками, координации предложений и\u00A0сопровождения сделки.' },
      vision: { kicker: 'Направление', title: 'Видение', copy: 'Мы помогаем компаниям, производителям, дистрибьюторам и\u00A0профессиональным заказчикам находить подходящих партнеров, уточнять технические требования и\u00A0выстраивать коммерческое взаимодействие на\u00A0международных рынках.' },
      services: {
        title1: 'Что мы', title2: 'предлагаем',
        item1: { title: 'Консалтинг и\u00A0брокеридж', b1: 'Консультации по\u00A0международному поиску оборудования', b2: 'Организация коммуникации между поставщиком и\u00A0заказчиком', b3: 'Координация коммерческих условий и\u00A0запросов' },
        item2: { title: 'Сопровождение поставок оборудования', b1: 'Поиск подходящего оборудования и\u00A0компонентов', b2: 'Уточнение спецификаций и\u00A0подбор соответствующих решений', b3: 'Планирование маршрутов поставки из\u00A0нескольких стран' },
        item3: { title: 'Компоненты для\u00A0дронов и\u00A0технологические изделия', b1: 'Брокерское сопровождение поставок деталей и\u00A0аксессуаров для\u00A0дронов', b2: 'Поиск поставщиков и\u00A0координация предложений', b3: 'Поддержка при\u00A0подготовке технической и\u00A0закупочной документации' },
        item4: { title: 'Посредничество во внешней торговле', b1: 'Взаимодействие производителей, дистрибьюторов и конечных заказчиков', b2: 'Поддержка международных переговоров', b3: 'Сопровождение запросов, предложений и\u00A0логистических данных' },
        item5: { title: 'Документационное и\u00A0комплаенс-сопровождение', b1: 'Предварительная проверка документов и\u00A0спецификаций', b2: 'Координация счетов, сертификатов и сведений о\u00A0продукции', b3: 'Поддержка с\u00A0учетом применимых торговых и\u00A0экспортных требований' }
      },
      advantages: {
        title1: 'Почему', title2: 'работают', title3: 'с\u00A0нами',
        card1: { title: 'Глобальные связи', copy: 'Мы объединяем рынки, поставщиков и\u00A0заказчиков, обеспечивая надежную международную координацию.' },
        card2: { title: 'Фокус на\u00A0технологиях', copy: 'Оборудование, компоненты для\u00A0дронов и\u00A0специализированные изделия для\u00A0сложных технических закупок.' },
        card3: { title: 'Гибкая модель брокериджа', copy: 'Сопровождение от\u00A0первичного запроса до\u00A0итогового соглашения с\u00A0учетом особенностей конкретной сделки.' },
        card4: { title: 'Единое понимание', copy: 'Согласование требований, спецификаций и\u00A0ожиданий между всеми участниками взаимодействия.' },
        card5: { title: 'Практическая поддержка', copy: 'Эффективная координация без\u00A0лишних уровней, задержек и\u00A0дублирования коммуникаций.' }
      },
      process: {
        step1: { title: 'Запрос и\u00A0спецификация', copy: 'Мы уточняем бизнес-задачу, технические параметры, целевой рынок и\u00A0требования к\u00A0поставке.' },
        step2: { title: 'Поиск партнеров', copy: 'Мы определяем подходящих поставщиков, производителей, дистрибьюторов или\u00A0покупателей.' },
        step3: { title: 'Координация предложений', copy: 'Мы помогаем собрать предложения, сравнить условия и\u00A0согласовать коммерческое взаимодействие.' },
        step4: { title: 'Помощь с\u00A0документами', copy: 'Мы координируем сведения о\u00A0продукции, счета, сертификаты и\u00A0торговые документы, когда это применимо.' },
        step5: { title: 'Долгосрочное сотрудничество', copy: 'Мы поддерживаем долгосрочную коммуникацию между сторонами и\u00A0последующие запросы на\u00A0поставку.' }
      },
      uk: { kicker: 'Международная база', title1: 'Почему', title2: 'Англия', p1: 'Расположение TCR Experteez Ltd в\u00A0Лондоне создает удобную основу для\u00A0международных партнерств, переговоров и\u00A0трансграничных деловых коммуникаций.', p2: 'Британская деловая среда укрепляет доверие в\u00A0международных коммерческих отношениях, а\u00A0Лондон обеспечивает доступ к\u00A0различным рынкам, профессиональным услугам и\u00A0глобальным бизнес-сетям.' },
      footer: { kicker: 'Готовы обсудить запрос?', rights: 'Все права защищены', privacy: 'Политика конфиденциальности' },
      form: { kicker: 'Новый деловой запрос', title: 'Расскажите, что вам требуется', intro: 'Опишите необходимое оборудование, компоненты или формат коммерческого сопровождения. Мы свяжемся с вами по указанным контактным данным.', name: 'Имя', company: 'Компания', email: 'Электронная почта', phone: 'Телефон', message: 'Описание запроса', consent: 'Я согласен на обработку переданной информации в соответствии с Политикой конфиденциальности.', submit: 'Отправить запрос', sending: 'Отправка…', success: 'Спасибо. Ваш запрос отправлен.', error: 'Не удалось отправить запрос. Повторите попытку или напишите нам напрямую.', validation: 'Корректно заполните обязательные поля.' }
    }
  };


  const getNested = (obj, path) => path.split('.').reduce((acc, key) => acc && acc[key], obj);
  let currentLang = localStorage.getItem('tcr-lang') === 'ru' ? 'ru' : 'en';

  const languageSelect = document.getElementById('language-select');
  const languageCurrent = document.getElementById('language-current');
  const languageCurrentLabel = document.getElementById('language-current-label');
  const languageMenu = document.getElementById('language-menu');
  const languageOptions = [...document.querySelectorAll('.language-option')];
  const processBackgroundTitle = document.querySelector('.process-background-title');

  function closeLanguageMenu() {
    languageSelect.classList.remove('is-open');
    languageCurrent.setAttribute('aria-expanded', 'false');
    languageMenu.setAttribute('aria-hidden', 'true');
  }

  function renderProcessTitle(lang) {
    const label = lang === 'ru' ? 'КАК МЫ РАБОТАЕМ' : 'HOW WE WORK';
    processBackgroundTitle.replaceChildren(...[...label].map(char => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00a0' : char;
      return span;
    }));
  }

  function applyLanguage(lang) {
    currentLang = lang === 'ru' ? 'ru' : 'en';
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = getNested(translations[currentLang], el.dataset.i18n);
      if (typeof value === 'string') el.textContent = value;
    });
    languageCurrentLabel.textContent = currentLang.toUpperCase();
    languageOptions.forEach(btn => btn.classList.toggle('is-active', btn.dataset.lang === currentLang));
    document.querySelectorAll('.step-label').forEach((label, index) => {
      label.textContent = currentLang === 'ru' ? `Шаг №${index + 1}` : `Step #${index + 1}`;
    });
    renderProcessTitle(currentLang);
    const formLanguage = document.getElementById('form-language');
    if (formLanguage) formLanguage.value = currentLang;
    localStorage.setItem('tcr-lang', currentLang);
    closeLanguageMenu();
  }

  languageCurrent.addEventListener('click', () => {
    const open = !languageSelect.classList.contains('is-open');
    languageSelect.classList.toggle('is-open', open);
    languageCurrent.setAttribute('aria-expanded', String(open));
    languageMenu.setAttribute('aria-hidden', String(!open));
  });
  languageOptions.forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
  document.addEventListener('pointerdown', event => {
    if (!languageSelect.contains(event.target)) closeLanguageMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeLanguageMenu();
  });
  applyLanguage(currentLang);

  function startAmbientSquares() {
    const squares = [...document.querySelectorAll('.ambient-square')];
    const initialDelays = [800, 1200, 1600, 2000];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      squares.forEach(square => { square.style.opacity = '.06'; });
      return;
    }
    squares.forEach((square, index) => {
      const pulse = () => {
        const animation = square.animate([
          { opacity: 0 },
          { opacity: .12, offset: .22 },
          { opacity: .12, offset: .55 },
          { opacity: 0 }
        ], { duration: 600, easing: 'ease-in-out', fill: 'forwards' });
        animation.finished.then(() => window.setTimeout(pulse, 400)).catch(() => {});
      };
      window.setTimeout(pulse, initialDelays[index] || 800);
    });
  }

  window.addEventListener('load', () => {
    requestAnimationFrame(() => document.body.classList.add('is-ready'));
    const startedAt = document.getElementById('started-at');
    if (startedAt) startedAt.value = String(Date.now());
    startAmbientSquares();
  });

  const header = document.getElementById('site-header');
  const onScrollHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  const menu = document.getElementById('mobile-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }
  menuToggle.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
  menu.querySelectorAll('a,button').forEach(el => el.addEventListener('click', closeMenu));

  const navLinks = [...document.querySelectorAll('.desktop-nav a')];
  const navLinkById = new Map(navLinks.map(link => [link.getAttribute('href').slice(1), link]));
  const companyPanels = document.querySelector('.company-panels');

  function setActiveNavigation() {
    const probe = window.scrollY + window.innerHeight * .36;
    const companyStart = document.getElementById('company').offsetTop;
    const companyEnd = companyPanels.offsetTop + companyPanels.offsetHeight;
    let activeId = null;

    if (probe >= companyStart && probe < companyEnd) activeId = 'company';
    else {
      for (const id of ['expertise', 'advantages', 'process', 'contact']) {
        const section = document.getElementById(id);
        if (!section) continue;
        const start = section.offsetTop;
        const end = start + section.offsetHeight;
        if (probe >= start && probe < end) { activeId = id; break; }
      }
    }

    navLinks.forEach(link => link.classList.toggle('is-active', link === navLinkById.get(activeId)));
  }
  setActiveNavigation();
  window.addEventListener('scroll', setActiveNavigation, { passive: true });
  window.addEventListener('resize', setActiveNavigation);
  window.addEventListener('load', setActiveNavigation);

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target; 
      function finishReveal(event) {
        if (event.target !== card) return;
        if (event.propertyName !== 'transform') return;
        
        card.classList.add('reveal-complete');
        card.removeEventListener('transitionend', finishReveal); }
      card.addEventListener('transitionend', finishReveal);
      card.classList.add('is-visible');
      if (!entry.target.classList.contains('media-zoom')) revealObserver.unobserve(entry.target);
    });
  }, { threshold: .14, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal-row,.reveal-card,.reveal-title,.media-zoom').forEach(el => revealObserver.observe(el));

  const manifestoSection = document.querySelector('.manifesto');
  const manifestoLines = [...document.querySelectorAll('.manifesto-text span')];

  function updateManifesto() {
    if (!manifestoSection || !manifestoLines.length) return;
    const rect = manifestoSection.getBoundingClientRect();
    const travel = rect.height + window.innerHeight * .35;
    const clamp01 = value => Math.max(0, Math.min(1, value));
    const progress = clamp01((window.innerHeight * .88 - rect.top) / Math.max(1, travel));

    manifestoLines.forEach((line, index) => {
      const start = index * .075;
      const lineProgress = clamp01((progress - start) / .24);
      const eased = lineProgress * lineProgress * (3 - 2 * lineProgress);
      line.style.opacity = String(.14 + eased * .86);
      line.style.transform = `translateY(${(1 - eased) * 24}px)`;
      line.style.filter = `blur(${(1 - eased) * 5}px)`;
      line.style.color = line.dataset.tone === 'yellow' ? '#ffd100' : '#f6f6f3';
    });
  }
  updateManifesto();
  window.addEventListener('scroll', updateManifesto, { passive: true });
  window.addEventListener('resize', updateManifesto);
  window.addEventListener('load', updateManifesto);

  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const willOpen = !item.classList.contains('is-open');
      document.querySelectorAll('.accordion-item').forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const hasFinePointer = matchMedia('(pointer:fine)').matches;
  if (hasFinePointer) {
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - .5) * 13;
        const rotateX = (.5 - y) * 11;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        card.style.setProperty('--mx', `${x * 100}%`);
        card.style.setProperty('--my', `${y * 100}%`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
        card.style.setProperty('--mx', '50%');
        card.style.setProperty('--my', '50%');
      });
    });
  }

  // Scroll-driven process globe.
  const processSection = document.querySelector('.process');
  const processCards = [...document.querySelectorAll('.process-card')];
  const processCardsContainer = document.querySelector('.process-cards');
  const processCurrent = document.getElementById('process-current');
  const processBar = document.getElementById('process-progress-bar');
  const globeStage = document.querySelector('.globe-stage');
  const globeCanvas = document.getElementById('globe-canvas');
  const ctx = globeCanvas.getContext('2d', { alpha: true });
  const handoffGlobe = document.getElementById('globe-handoff');
  const handoffCanvas = document.getElementById('handoff-canvas');
  const handoffCtx = handoffCanvas.getContext('2d', { alpha: true });
  const ukTarget = document.querySelector('.uk-globe-target');
  const ukSection = document.querySelector('.uk-section');
  let landPoints = [];
  let canvasSize = 700;
  let processProgress = 0;
  let activeIndex = 0;
  let rotation = 0;
  let rotationTarget = 0;
  let lastTime = performance.now();
  let handoffArrival = 0;

  const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
  const smoothstep = value => {
    const x = clamp(value);
    return x * x * (3 - 2 * x);
  };
  const lerp = (a, b, p) => a + (b - a) * p;

  function isLand(r, g, b) {
    const ocean = b > r * 1.18 && b > g * 1.08 && b > 55;
    return !ocean && (r + g + b > 60);
  }

  function buildLandPoints(image) {
    const sample = document.createElement('canvas');
    sample.width = 420;
    sample.height = 210;
    const sctx = sample.getContext('2d', { willReadFrequently: true });
    sctx.drawImage(image, 0, 0, sample.width, sample.height);
    const data = sctx.getImageData(0, 0, sample.width, sample.height).data;
    const points = [];
    for (let lat = -79; lat <= 82; lat += 1.9) {
      for (let lon = -180; lon < 180; lon += 1.9) {
        const px = clamp(Math.floor((lon + 180) / 360 * sample.width), 0, sample.width - 1);
        const py = clamp(Math.floor((90 - lat) / 180 * sample.height), 0, sample.height - 1);
        const idx = (py * sample.width + px) * 4;
        if (!isLand(data[idx], data[idx + 1], data[idx + 2])) continue;
        const la = lat * Math.PI / 180;
        const lo = lon * Math.PI / 180;
        const c = Math.cos(la);
        points.push({ x: c * Math.sin(lo), y: Math.sin(la), z: c * Math.cos(lo), seed: (lat * 17 + lon * 11) % 13 });
      }
    }
    landPoints = points;
  }

  function resizeGlobe() {
    const rect = globeStage.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 1.7);
    canvasSize = Math.max(320, Math.round(rect.width * dpr));
    globeCanvas.width = canvasSize;
    globeCanvas.height = canvasSize;
  }

  const earth = new Image();
  earth.src = 'assets/earth-map.jpg';
  earth.onload = () => buildLandPoints(earth);
  earth.onerror = () => { landPoints = []; };
  resizeGlobe();
  window.addEventListener('resize', resizeGlobe);

  function drawGlobe(time) {
    const size = canvasSize;
    const cx = size / 2;
    const cy = size / 2;
    const radius = size * .292;
    ctx.clearRect(0, 0, size, size);

    const atmosphere = ctx.createRadialGradient(cx, cy, radius * .78, cx, cy, radius * 1.16);
    atmosphere.addColorStop(0, 'rgba(255,209,0,0)');
    atmosphere.addColorStop(.75, 'rgba(255,209,0,.018)');
    atmosphere.addColorStop(.92, 'rgba(112,174,213,.08)');
    atmosphere.addColorStop(1, 'rgba(112,174,213,0)');
    ctx.fillStyle = atmosphere;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.16, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();
    const globeFill = ctx.createRadialGradient(cx - radius * .38, cy - radius * .42, radius * .05, cx, cy, radius);
    globeFill.addColorStop(0, '#242424');
    globeFill.addColorStop(.38, '#111111');
    globeFill.addColorStop(.76, '#070707');
    globeFill.addColorStop(1, '#010101');
    ctx.fillStyle = globeFill;
    ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

    const visualRotation = rotation;
    const cos = Math.cos(visualRotation);
    const sin = Math.sin(visualRotation);
    const tilt = -.16;
    const ct = Math.cos(tilt);
    const st = Math.sin(tilt);
    for (const point of landPoints) {
      let x = point.x * cos + point.z * sin;
      let z = -point.x * sin + point.z * cos;
      const y = point.y * ct - z * st;
      z = point.y * st + z * ct;
      if (z <= -.02) continue;
      const perspective = .9 + z * .1;
      const px = cx + x * radius * perspective;
      const py = cy - y * radius * perspective;
      const edgeFade = clamp((z + .02) / .35);
      const alpha = (.2 + z * .74) * edgeFade;
      const dot = Math.max(.75, size / 850) * (.72 + z * .66);
      ctx.fillStyle = `rgba(255,226,126,${alpha})`;
      ctx.beginPath();
      ctx.arc(px, py, dot, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,209,0,.44)';
    ctx.lineWidth = Math.max(1.2, size * .0026);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.018, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(118,184,220,.18)';
    ctx.lineWidth = Math.max(3, size * .012);
    ctx.stroke();

  }

  function setHandoffRect(rect, opacity) {
    handoffGlobe.style.left = `${rect.left}px`;
    handoffGlobe.style.top = `${rect.top}px`;
    handoffGlobe.style.width = `${rect.width}px`;
    handoffGlobe.style.height = `${rect.height}px`;
    handoffGlobe.style.opacity = String(clamp(opacity));
    handoffGlobe.classList.toggle('is-visible', opacity > .01);
  }

  function getExitRect() {
    const mobile = innerWidth < 760;
    const size = mobile ? Math.min(innerWidth * .66, 360) : Math.min(innerWidth * .31, 430);
    return {
      left: mobile ? (innerWidth - size) / 2 : Math.max(54, innerWidth * .075),
      top: mobile ? innerHeight * .47 : innerHeight * .49,
      width: size,
      height: size
    };
  }

  function updateHandoff() {
    const stageRect = globeStage.getBoundingClientRect();
    const targetRectRaw = ukTarget.getBoundingClientRect();
    const ukRect = ukSection.getBoundingClientRect();
    const handoffStart = .93;
    const exitRect = getExitRect();

    // The moving globe is never allowed to grow. The final target may only
    // keep the current size or become smaller.
    const finalSize = Math.min(exitRect.width, targetRectRaw.width);
    const targetRect = {
      left: targetRectRaw.left + (targetRectRaw.width - finalSize) / 2,
      top: targetRectRaw.top + (targetRectRaw.height - finalSize) / 2,
      width: finalSize,
      height: finalSize
    };

    const setTargetState = (markerOpacity, complete) => {
      const opacity = String(clamp(markerOpacity));
      ukTarget.style.setProperty('--marker-opacity', opacity);
      handoffGlobe.style.setProperty('--marker-opacity', opacity);
      ukTarget.classList.toggle('is-handoff-complete', complete);
      handoffGlobe.classList.toggle('is-handoff-complete', complete);
    };

    if (processProgress < handoffStart) {
      handoffGlobe.classList.remove('is-visible');
      handoffGlobe.style.opacity = '0';
      globeStage.style.opacity = '1';
      setTargetState(0, false);
      ukSection.style.setProperty('--descent-progress', '0');
      handoffArrival = 0;
      return;
    }

    // One single globe leaves the process scene. It only shrinks and moves;
    // it never changes into a second image and never grows again.
    const leave = smoothstep((processProgress - handoffStart) / (1 - handoffStart));
    const leaveRect = {
      left: lerp(stageRect.left, exitRect.left, leave),
      top: lerp(stageRect.top, exitRect.top, leave),
      width: lerp(stageRect.width, exitRect.width, leave),
      height: lerp(stageRect.height, exitRect.height, leave)
    };
    const enterOpacity = clamp((leave - .01) / .08);
    setHandoffRect(leaveRect, enterOpacity);
    globeStage.style.opacity = String(1 - clamp((leave - .008) / .09));
    setTargetState(0, false);

    if (processProgress >= .999) {
      const arrival = smoothstep((innerHeight - ukRect.top) / Math.max(1, innerHeight * .50));
      const landingRect = {
        left: lerp(exitRect.left, targetRect.left, arrival),
        top: lerp(exitRect.top, targetRect.top, arrival),
        width: lerp(exitRect.width, targetRect.width, arrival),
        height: lerp(exitRect.height, targetRect.height, arrival)
      };

      // The exact same live canvas globe reaches the target and stays there.
      // No second globe is introduced. The separate SVG marker appears only
      // after the globe has completely settled.
      const markerOpacity = smoothstep((arrival - .965) / .035);
      setHandoffRect(landingRect, 1);
      setTargetState(markerOpacity, arrival > .94);
      handoffArrival = arrival;
      ukSection.style.setProperty('--descent-progress', String(arrival));
    } else {
      handoffArrival = leave * .42;
      ukSection.style.setProperty('--descent-progress', String(leave * .42));
    }
  }

  function updateProcess() {
    const rect = processSection.getBoundingClientRect();
    const total = processSection.offsetHeight - innerHeight;
    processProgress = clamp(-rect.top / Math.max(1, total));
    if (processBar) processBar.style.width = `${processProgress * 100}%`;

    const stepFloat = Math.min(processCards.length - .001, processProgress * processCards.length);
    activeIndex = Math.floor(stepFloat);
    processCards.forEach((card, index) => {
      card.classList.toggle('is-active', index === activeIndex);
      card.classList.toggle('is-past', index < activeIndex);
    });
    processCurrent.textContent = String(activeIndex + 1).padStart(2, '0');

    // The final card leaves before the globe starts its handoff, preventing
    // the travelling sphere from covering the content panel.
    const cardsExit = smoothstep((processProgress - .875) / .055);
    processCardsContainer.style.opacity = String(1 - cardsExit);
    processCardsContainer.style.pointerEvents = cardsExit > .2 ? 'none' : '';
    processCurrent.parentElement.style.opacity = String(1 - smoothstep((processProgress - .94) / .06));

    const letters = [...processBackgroundTitle.children];
    letters.forEach((letter, index) => {
      const visible = processProgress > .018 + index * .011;
      letter.style.transform = visible ? 'translateY(0) rotate(0)' : 'translateY(70px) rotate(7deg)';
      letter.style.opacity = visible ? '.105' : '.022';
    });

    const turns = Math.PI * 6;
    const londonFacingAngle = -.40104;
    if (processProgress < .86) {
      rotationTarget = (processProgress / .86) * turns;
    } else {
      const finish = smoothstep((processProgress - .86) / .14);
      rotationTarget = lerp(turns, turns + londonFacingAngle, finish);
    }
    updateHandoff();
  }

  function animateGlobe(now) {
    const dt = Math.min(64, now - lastTime);
    lastTime = now;
    rotation += (rotationTarget - rotation) * Math.min(1, dt * .008);
    // Keep rotating while the globe travels, then settle on London before the marker appears.
    if (processProgress >= .93 && handoffArrival < .72) {
      rotation += dt * .00016 * (1 - smoothstep(handoffArrival / .72));
    } else if (processProgress < .001) {
      rotation += dt * .000045;
    }
    drawGlobe(now);

    // Copy the live globe canvas into the travelling layer. This keeps the exact
    // same globe, continents and rotation instead of swapping to another image.
    if (handoffGlobe.classList.contains('is-visible')) {
      if (handoffCanvas.width !== globeCanvas.width || handoffCanvas.height !== globeCanvas.height) {
        handoffCanvas.width = globeCanvas.width;
        handoffCanvas.height = globeCanvas.height;
      }
      handoffCtx.clearRect(0, 0, handoffCanvas.width, handoffCanvas.height);
      handoffCtx.drawImage(globeCanvas, 0, 0);
    }
    requestAnimationFrame(animateGlobe);
  }

  updateProcess();
  window.addEventListener('scroll', updateProcess, { passive: true });
  window.addEventListener('resize', updateProcess);
  requestAnimationFrame(animateGlobe);

  // Contact modal and AJAX form.
  const modal = document.getElementById('contact-modal');
  const form = document.getElementById('contact-form');
  const closeModalButton = modal.querySelector('.modal-close');
  const formStatus = document.getElementById('form-status');
  const submitButton = form.querySelector('.submit-button');

  function openModal() {
    closeMenu();
    closeLanguageMenu();
    document.getElementById('started-at').value = String(Date.now());
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
    document.body.classList.add('modal-open');
    setTimeout(() => form.querySelector('input[name="name"]').focus(), 80);
  }
  function closeModal() {
    if (typeof modal.close === 'function' && modal.open) modal.close();
    else modal.removeAttribute('open');
    document.body.classList.remove('modal-open');
  }
  document.querySelectorAll('.contact-trigger').forEach(btn => btn.addEventListener('click', openModal));
  closeModalButton.addEventListener('click', closeModal);
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  modal.addEventListener('close', () => document.body.classList.remove('modal-open'));

  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 4000);
  }

  function validateForm() {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const ok = field.type === 'checkbox' ? field.checked : field.checkValidity();
      field.setAttribute('aria-invalid', String(!ok));
      if (!ok) valid = false;
    });
    return valid;
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    formStatus.className = 'form-status';
    formStatus.textContent = '';
    if (!validateForm()) {
      formStatus.textContent = translations[currentLang].form.validation;
      formStatus.classList.add('is-error');
      return;
    }
    submitButton.classList.add('is-loading');
    submitButton.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.success) throw new Error(payload.message || 'Request failed');
      const success = translations[currentLang].form.success;
      form.reset();
      document.getElementById('form-language').value = currentLang;
      formStatus.textContent = success;
      formStatus.classList.add('is-success');
      showToast(success);
      setTimeout(closeModal, 1400);
    } catch (error) {
      formStatus.textContent = translations[currentLang].form.error;
      formStatus.classList.add('is-error');
    } finally {
      submitButton.classList.remove('is-loading');
      submitButton.disabled = false;
      document.getElementById('started-at').value = String(Date.now());
    }
  });
})();
