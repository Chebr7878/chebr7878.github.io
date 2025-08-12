/* script.js */

function openMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.add('open');
    document.querySelector('.overlay').style.display = 'block';
}
function closeMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.remove('open');
    document.querySelector('.overlay').style.display = 'none';
}

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeMenu(); }
});

// Плавный скролл к разделам
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        });
    });
});

// Кнопка "Вверх"
const toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTopBtn.style.display = "flex";
    } else {
        toTopBtn.style.display = "none";
    }
};
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// Поиск по разделам
const sections = [
{ id: "sec1", title: "Введение" },
{ id: "sec2", title: "Область применения" },
{ id: "sec3", title: "Классификация и типы труб" },
{ id: "sec4", title: "Группы по несущей способности" },
{ id: "sec5", title: "Размеры и геометрия" },
{ id: "sec6", title: "Обозначение (маркировка)" },
{ id: "sec7", title: "Технология изготовления" },
{ id: "sec8", title: "Условия применения и расчёта" },
{ id: "sec9", title: "Материалы, бетон и армирование" },
{ id: "sec10", title: "Стыковые соединения и герметизация" },
{ id: "sec11", title: "Агрессивные среды и внутренние покрытия" },
{ id: "sec12", title: "Точность изготовления и качество поверхностей" },
{ id: "sec13", title: "Правила приемки" },
{ id: "sec14", title: "Методы испытаний и контроля" },
{ id: "sec15", title: "Транспортирование, хранение и гарантии изготовителя" },
{ id: "sec16", title: "Где приобрести трубы (производители)" },
{ id: "sec17", title: "Библиография и ссылки на нормативные документы" },
{ id: "sec18", title: "Требования безопасности и охраны окружающей среды" }
];
function showSearchResults() {
    const input = document.getElementById('searchInput');
    const query = input.value.toLowerCase().trim();
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';
    const matches = query ? sections.filter(s => s.toLowerCase().includes(query)) : sections;
    matches.forEach((match) => {
        const div = document.createElement('div');
        div.textContent = match;
        div.onclick = function() {
            const index = sections.indexOf(match) + 1;
            document.querySelector('#sec' + index).scrollIntoView({ behavior: 'smooth' });
            resultsDiv.style.display = 'none';
            input.blur();
        };
        resultsDiv.appendChild(div);
    });
    resultsDiv.style.display = matches.length ? 'block' : 'none';
}
function hideSearchResultsDelayed() {
    setTimeout(() => document.getElementById('searchResults').style.display = 'none', 150);
}


document.addEventListener('DOMContentLoaded', () => {
  const MIN_CHARS = 2;

  function getSectionTitle(el) {
    const h = el.querySelector('h1, h2, h3, h4');
    return h ? h.textContent.trim() : el.getAttribute('data-title') || el.id;
  }

  const sections = [];
  for (let i = 1; i <= 18; i++) {
    const id = `sec${i}`;
    const el = document.getElementById(id);
    if (!el) continue;
    let title = getSectionTitle(el);
    if (i === 17) title = 'Библиография';
    if (i === 18) title = 'Требования безопасности';
    sections.push({ id, title, keywords: [] });
  }

  const kw = {
    1: ['введение','назначение','обзор'],
    2: ['область применения','применение','условия'],
    3: ['термины','определения','обозначения'],
    4: ['классификация','типы','виды'],
    5: ['требования','размеры','маркировка','условные обозначения'],
    6: ['материалы','бетон','арматура','комплектующие'],
    7: ['технические требования','допуски','дефекты','качество'],
    8: ['расчёт','условия применения','нагрузки'],
    9: ['технология','изготовление','производство'],
    10: ['контроль','приемка','приёмка','партия','документация'],
    11: ['правила приемки','контрольные операции'],
    12: ['маркировка','марки','клеймо','обозначение'],
    13: ['упаковка','консервация','защита'],
    14: ['испытания','методы испытаний','контроль'],
    15: ['транспортировка','перевозка','хранение','складирование','гарантии','поставка','логистика'],
    16: ['где купить','производители','изготовители','поставщики','приобрести'],
    17: ['библиография','нормативные документы','ссылки','стандарты','гост','снип'],
    18: ['требования безопасности','охрана труда','экология','окружающая среда','отходы','выбросы']
  };
  sections.forEach(s => { const n = parseInt(s.id.replace('sec','')); s.keywords = kw[n] || []; });

  const input = document.querySelector('#searchInput, input[type="search"], .search input');
  if (!input) return;

  // Create/ensure our dropdown
  let dropdown = document.getElementById('searchDropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.id = 'searchDropdown';
    Object.assign(dropdown.style, {
      position: 'absolute',
      top: '100%',
      left: '0',
      right: '0',
      zIndex: '1000',
      background: 'white',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: '8px',
      marginTop: '6px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      maxHeight: '40vh',
      overflowY: 'auto',
      display: 'none'
    });
    const wrap = input.parentElement || document.body;
    if (getComputedStyle(wrap).position === 'static') wrap.style.position = 'relative';
    wrap.appendChild(dropdown);
  }

  function clearDropdown(){ dropdown.innerHTML=''; dropdown.style.display='none'; }
  function showDropdown(){ dropdown.style.display='block'; }

  function renderItems(items){
    dropdown.innerHTML='';
    items.slice(0, 8).forEach(item => {
      const el = document.createElement('div');
      el.textContent = item.title;
      el.setAttribute('data-id', item.id);
      el.style.padding = '10px 12px';
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const target = document.getElementById(item.id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          clearDropdown();
          if (typeof closeMenu === 'function') try { closeMenu(); } catch(e){}
        }
      });
      el.addEventListener('mouseenter', () => el.style.background = 'rgba(0,0,0,0.06)');
      el.addEventListener('mouseleave', () => el.style.background = 'transparent');
      dropdown.appendChild(el);
    });
    if (items.length === 0) {
      const empty = document.createElement('div');
      empty.textContent = 'Ничего не найдено';
      empty.style.padding = '10px 12px';
      dropdown.appendChild(empty);
    }
    showDropdown();
  }

  function normalize(s){ return (s||'').toString().toLowerCase().trim(); }

  function findMatches(q){
    const qq = normalize(q);
    return sections.filter(s => {
      const t = normalize(s.title);
      if (t.includes(qq)) return true;
      return (s.keywords||[]).some(k => normalize(k).includes(qq) || qq.includes(normalize(k)));
    });
  }

  // Debounce input for nicer UX
  let timer = null;
  function onInput(){
    const val = input.value || '';
    const q = normalize(val);
    if (q.length < MIN_CHARS) { clearDropdown(); return; }
    const matches = findMatches(q);
    renderItems(matches);
  }

  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(onInput, 120);
  });

  // On focus: do NOT open dropdown if the query is empty/short; instead, clear any legacy artifacts.
  input.addEventListener('focus', () => {
    const q = normalize(input.value);
    if (q.length < MIN_CHARS) {
      clearDropdown();
      // Hide any legacy result containers that might show junk
      const legacy = document.querySelectorAll('.search-results, .results, .autocomplete-list');
      legacy.forEach(el => el.style.display = 'none');
      return;
    }
    onInput();
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== input) clearDropdown();
  });

  // For debugging
  window.__siteSections = sections;
});


document.addEventListener('DOMContentLoaded', () => {
  const MIN_CHARS = 2;

  // Helper to hide any legacy junk lists
  function hideLegacyJunk() {
    const junkSelectors = [
      '.search-results', '.results', '.autocomplete', '.autocomplete-list',
      '.dropdown', '.suggestions', '.typeahead', '#typeahead', '#results'
    ];
    junkSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (el.id !== 'searchDropdown') el.style.display = 'none';
      });
    });
    // Aggressive fallback: hide any visible element that contains "[object Object]"
    const tree = document.querySelectorAll('div,ul,ol,section,aside,nav');
    tree.forEach(el => {
      try {
        if (el.id === 'searchDropdown') return;
        const txt = (el.textContent || '').trim();
        if (!txt) return;
        if (/\[object Object\]/i.test(txt)) {
          el.style.display = 'none';
        }
      } catch(e) {}
    });
  }

  // Find the search input
  let input = document.querySelector('#searchInput, input[type="search"], .search input');
  if (!input) return;

  // Replace input node to drop any old listeners
  const clone = input.cloneNode(true);
  input.parentNode.replaceChild(clone, input);
  input = clone;

  // Build our dropdown if missing
  let dropdown = document.getElementById('searchDropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.id = 'searchDropdown';
    Object.assign(dropdown.style, {
      position: 'absolute',
      top: '100%',
      left: '0',
      right: '0',
      zIndex: '1000',
      background: 'white',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: '8px',
      marginTop: '6px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      maxHeight: '40vh',
      overflowY: 'auto',
      display: 'none'
    });
    const wrap = input.parentElement || document.body;
    if (getComputedStyle(wrap).position === 'static') wrap.style.position = 'relative';
    wrap.appendChild(dropdown);
  }

  function clearDropdown(){ dropdown.innerHTML=''; dropdown.style.display='none'; }
  function showDropdown(){ dropdown.style.display='block'; }

  function normalize(s){ return (s||'').toString().toLowerCase().trim(); }

  // Build sections map (titles + keywords) from earlier injected data or DOM
  function getSectionTitle(el) {
    const h = el.querySelector('h1, h2, h3, h4');
    return h ? h.textContent.trim() : el.getAttribute('data-title') || el.id;
  }
  const sections = [];
  for (let i = 1; i <= 18; i++) {
    const id = `sec${i}`;
    const el = document.getElementById(id);
    if (!el) continue;
    let title = getSectionTitle(el);
    if (i === 17) title = 'Библиография';
    if (i === 18) title = 'Требования безопасности';
    sections.push({ id, title, keywords: [] });
  }
  const kw = {
    1: ['введение','назначение','обзор'],
    2: ['область применения','применение','условия'],
    3: ['термины','определения','обозначения'],
    4: ['классификация','типы','виды'],
    5: ['требования','размеры','маркировка','условные обозначения'],
    6: ['материалы','бетон','арматура','комплектующие'],
    7: ['технические требования','допуски','дефекты','качество'],
    8: ['расчёт','условия применения','нагрузки'],
    9: ['технология','изготовление','производство'],
    10: ['контроль','приемка','приёмка','партия','документация'],
    11: ['правила приемки','контрольные операции'],
    12: ['маркировка','марки','клеймо','обозначение'],
    13: ['упаковка','консервация','защита'],
    14: ['испытания','методы испытаний','контроль'],
    15: ['транспортировка','перевозка','хранение','складирование','гарантии','поставка','логистика'],
    16: ['где купить','производители','изготовители','поставщики','приобрести'],
    17: ['библиография','нормативные документы','ссылки','стандарты','гост','снип'],
    18: ['требования безопасности','охрана труда','экология','окружающая среда','отходы','выбросы']
  };
  sections.forEach(s => { const n = parseInt(s.id.replace('sec','')); s.keywords = kw[n] || []; });

  function findMatches(q){
    const qq = normalize(q);
    return sections.filter(s => {
      const t = normalize(s.title);
      if (t.includes(qq)) return true;
      return (s.keywords||[]).some(k => normalize(k).includes(qq) || qq.includes(normalize(k)));
    });
  }

  function renderItems(items){
    dropdown.innerHTML='';
    items.slice(0, 8).forEach(item => {
      const el = document.createElement('div');
      el.textContent = item.title;
      el.setAttribute('data-id', item.id);
      el.style.padding = '10px 12px';
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const target = document.getElementById(item.id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          clearDropdown();
        }
      });
      el.addEventListener('mouseenter', () => el.style.background = 'rgba(0,0,0,0.06)');
      el.addEventListener('mouseleave', () => el.style.background = 'transparent');
      dropdown.appendChild(el);
    });
    if (items.length === 0) {
      const empty = document.createElement('div');
      empty.textContent = 'Ничего не найдено';
      empty.style.padding = '10px 12px';
      dropdown.appendChild(empty);
    }
    showDropdown();
  }

  // Debounced input
  let timer = null;
  function handleInput(){
    const val = input.value || '';
    const q = normalize(val);
    if (q.length < MIN_CHARS) {
      clearDropdown();
      // Double-tap legacy hide in case other scripts react after us
      setTimeout(hideLegacyJunk, 0);
      setTimeout(hideLegacyJunk, 60);
      return;
    }
    const matches = findMatches(q);
    renderItems(matches);
  }

  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(handleInput, 120);
  }, true);

  input.addEventListener('focus', () => {
    const q = normalize(input.value);
    if (q.length < MIN_CHARS) {
      clearDropdown();
      hideLegacyJunk();
    }
  }, true);

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== input) clearDropdown();
  });

  // Initial cleanup
  hideLegacyJunk();
});


document.addEventListener('DOMContentLoaded', () => {
  // Block legacy focus handlers early
  document.addEventListener('focusin', (ev) => {
    const el = ev.target;
    if (!(el instanceof HTMLElement)) return;
    if (el.matches('#searchInput, input[type="search"], .search input')) {
      try { ev.stopImmediatePropagation(); } catch(e){}
      try { ev.stopPropagation(); } catch(e){}
      // Small async cleanup to kill any legacy dropdowns that still rendered
      setTimeout(() => hideLegacyJunk(), 0);
      setTimeout(() => hideLegacyJunk(), 80);
    }
  }, true);

  // MutationObserver to auto-hide any element that contains "[object Object]"
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      const nodes = Array.from(m.addedNodes || []);
      nodes.forEach(node => {
        if (!(node instanceof HTMLElement)) return;
        const txt = (node.textContent || '').trim();
        if (/\[object Object\]/i.test(txt)) {
          node.style.display = 'none';
        }
        // Also scan descendants quickly
        node.querySelectorAll && node.querySelectorAll('*').forEach(child => {
          const t = (child.textContent || '').trim();
          if (/\[object Object\]/i.test(t)) child.style.display = 'none';
        });
      });
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Reuse hideLegacyJunk from previous script or define a local one
  window.hideLegacyJunk = window.hideLegacyJunk || function(){
    const junkSelectors = [
      '.search-results', '.results', '.autocomplete', '.autocomplete-list',
      '.dropdown', '.suggestions', '.typeahead', '#typeahead', '#results', '.ui-autocomplete'
    ];
    junkSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (el.id !== 'searchDropdown') el.style.display = 'none';
      });
    });
    const all = document.querySelectorAll('div,ul,ol,section,aside,nav');
    all.forEach(el => {
      try {
        if (el.id === 'searchDropdown') return;
        const txt = (el.textContent || '').trim();
        if (/\[object Object\]/i.test(txt)) el.style.display = 'none';
      } catch(e) {}
    });
  };

  // Also, on input keyup, if input is empty -> cleanup
  const input = document.querySelector('#searchInput, input[type="search"], .search input');
  if (input) {
    input.addEventListener('keyup', () => {
      const val = (input.value || '').trim();
      if (!val) {
        const dd = document.getElementById('searchDropdown');
        if (dd) { dd.innerHTML=''; dd.style.display='none'; }
        hideLegacyJunk();
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const parts = document.querySelectorAll('.mark-example .mark-part');
  function clearHighlights() {
    document.querySelectorAll('#sec6 li.mark-highlight').forEach(el => el.classList.remove('mark-highlight'));
  }
  parts.forEach(part => {
    const g = part.getAttribute('data-group');
    const target = document.getElementById('mark-group-' + g);
    if (!target) return;

    // Hover -> highlight target
    part.addEventListener('mouseenter', () => {
      clearHighlights();
      target.classList.add('mark-highlight');
    });
    part.addEventListener('mouseleave', () => {
      clearHighlights();
    });

    // Focus via keyboard
    part.setAttribute('tabindex', '0');
    part.addEventListener('focus', () => {
      clearHighlights();
      target.classList.add('mark-highlight');
    });
    part.addEventListener('blur', () => {
      clearHighlights();
    });

    // Click -> scroll to explanation
    part.addEventListener('click', () => {
      target.classList.add('mark-highlight');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Remove highlight after a short delay
      setTimeout(() => target.classList.remove('mark-highlight'), 1800);
    });
    part.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        part.click();
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  function bySel(s, root=document){ return Array.from(root.querySelectorAll(s)); }
  const example = document.querySelector('.mark-example');
  if (!example) return;

  function clearPartActive(){
    bySel('.mark-part.is-active').forEach(el => el.classList.remove('is-active'));
  }

  // Map li#mark-group-n to .mark-part[data-group=n]
  [1,2,3].forEach(n => {
    const li = document.getElementById('mark-group-' + n);
    const part = document.querySelector('.mark-part[data-group="' + n + '"]');
    if (!li || !part) return;

    // When hovering the description item -> highlight the corresponding part in example
    li.addEventListener('mouseenter', () => {
      clearPartActive();
      part.classList.add('is-active');
    });
    li.addEventListener('mouseleave', () => {
      clearPartActive();
    });

    // Click on description -> scroll to example and briefly highlight
    li.addEventListener('click', () => {
      if (example && typeof example.scrollIntoView === 'function') {
        example.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      part.classList.add('is-active');
      setTimeout(() => part.classList.remove('is-active'), 1500);
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('nav#sideMenu .menu-list');
  if (!menu) return;

  const linkById = {};
  menu.querySelectorAll('a[data-target]').forEach(a => {
    linkById[a.getAttribute('data-target')] = a;
  });

  function clearMenuActive() {
    menu.querySelectorAll('a.is-active').forEach(x => x.classList.remove('is-active'));
  }
  function clearSectionHighlights() {
    document.querySelectorAll('[id^="sec"].is-highlighted').forEach(x => x.classList.remove('is-highlighted'));
    document.querySelectorAll('[id^="sec"] > h1.is-highlighted, [id^="sec"] > h2.is-highlighted, [id^="sec"] > h3.is-highlighted, [id^="sec"] > h4.is-highlighted')
      .forEach(x => x.classList.remove('is-highlighted'));
  }

  // Menu -> Section
  menu.querySelectorAll('a[data-target]').forEach(a => {
    const id = a.getAttribute('data-target');
    const sec = document.getElementById(id);
    const heading = sec ? sec.querySelector(':scope > h1, :scope > h2, :scope > h3, :scope > h4') : null;

    a.addEventListener('mouseenter', () => {
      clearSectionHighlights();
      if (sec) sec.classList.add('is-highlighted');
      if (heading) heading.classList.add('is-highlighted');
      // keep only this active in menu
      clearMenuActive();
      a.classList.add('is-active');
    });
    a.addEventListener('mouseleave', () => {
      clearSectionHighlights();
      a.classList.remove('is-active');
    });

    a.addEventListener('click', (e) => {
      // default anchor behavior already scrolls; we just add a brief emphasis
      if (sec) {
        setTimeout(() => {
          sec.classList.add('is-highlighted');
          if (heading) heading.classList.add('is-highlighted');
          a.classList.add('is-active');
          setTimeout(() => {
            if (sec) sec.classList.remove('is-highlighted');
            if (heading) heading.classList.remove('is-highlighted');
            a.classList.remove('is-active');
          }, 1600);
        }, 0);
      }
    });
  });

  // Section heading -> Menu
  document.querySelectorAll('[id^="sec"][data-menu-id]').forEach(sec => {
    const id = sec.getAttribute('data-menu-id');
    const link = linkById[id];
    const heading = sec.querySelector(':scope > h1, :scope > h2, :scope > h3, :scope > h4');

    const enter = () => {
      if (!link) return;
      clearMenuActive();
      link.classList.add('is-active');
    };
    const leave = () => {
      if (!link) return;
      link.classList.remove('is-active');
    };

    // Highlight when hovering the section or its heading
    sec.addEventListener('mouseenter', enter);
    sec.addEventListener('mouseleave', leave);
    if (heading) {
      heading.addEventListener('mouseenter', enter);
      heading.addEventListener('mouseleave', leave);
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  // Synchronize highlight: hovering description adds blue highlight to both sides
  [1,2,3].forEach(n => {
    const li = document.getElementById('mark-group-' + n);
    const part = document.querySelector('.mark-part[data-group="' + n + '"]');
    if (!li || !part) return;

    const add = () => {
      li.classList.add('mark-highlight');
      part.classList.add('is-active');
    };
    const remove = () => {
      li.classList.remove('mark-highlight');
      part.classList.remove('is-active');
    };

    li.addEventListener('mouseenter', add);
    li.addEventListener('mouseleave', remove);
    // Keyboard focus support on LI items
    li.setAttribute('tabindex', li.getAttribute('tabindex') || '0');
    li.addEventListener('focus', add);
    li.addEventListener('blur', remove);
  });

  // Also ensure hovering parts keeps LI blue (some earlier scripts already add mark-highlight; we enforce here)
  document.querySelectorAll('.mark-part').forEach(part => {
    const g = part.getAttribute('data-group');
    const li = document.getElementById('mark-group-' + g);
    if (!li) return;
    part.addEventListener('mouseenter', () => li.classList.add('mark-highlight'));
    part.addEventListener('mouseleave', () => li.classList.remove('mark-highlight'));
    part.addEventListener('focus', () => li.classList.add('mark-highlight'));
    part.addEventListener('blur', () => li.classList.remove('mark-highlight'));
  });
});