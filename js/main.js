/* ═══════════════════════════════════════════════════════════
   MAIN.JS — Rendering, animations, typing, scroll
   Reads from SITE object defined in data.js
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Loading Screen ─────────────────────────────────────
  const loader = document.getElementById('loader');
  const loaderName = loader.querySelector('.loader-name');
  loaderName.textContent = SITE.name;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      startRevealAnimations();
    }, 1200);
  });

  // Prevent scroll while loading
  document.body.style.overflow = 'hidden';

  // ── Render Hero ────────────────────────────────────────
  document.getElementById('hero-name').textContent = SITE.name;

  // Photo
  const heroPhoto = document.getElementById('hero-photo');
  heroPhoto.src = SITE.profilePhoto;
  heroPhoto.alt = SITE.name;

  // Socials in hero
  const heroSocials = document.getElementById('hero-socials');
  SITE.socials.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url;
    a.target = s.url.startsWith('mailto:') || s.url.startsWith('tel:') ? '_self' : '_blank';
    a.rel = 'noopener noreferrer';
    a.title = s.platform;
    a.innerHTML = `<i class="fa${s.icon === 'graduation-cap' ? 's' : 'b'} fa-${s.icon}"></i>`;
    heroSocials.appendChild(a);
  });

  // Typing effect
  const typingEl = document.getElementById('hero-typing');
  let taglineIdx = 0, charIdx = 0, isDeleting = false;
  function typeStep() {
    const current = SITE.taglines[taglineIdx];
    if (!isDeleting) {
      typingEl.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(typeStep, 2000);
        return;
      }
      setTimeout(typeStep, 60 + Math.random() * 30);
    } else {
      typingEl.textContent = current.slice(0, charIdx);
      charIdx--;
      if (charIdx < 0) {
        isDeleting = false;
        charIdx = 0;
        taglineIdx = (taglineIdx + 1) % SITE.taglines.length;
        setTimeout(typeStep, 400);
        return;
      }
      setTimeout(typeStep, 30);
    }
  }
  setTimeout(typeStep, 1600);

  // ── Render About ───────────────────────────────────────
  document.getElementById('about-content').innerHTML = SITE.bio;

  // ── Render Publications ────────────────────────────────
  const pubList = document.getElementById('pub-list');
  SITE.publications.forEach((pub, i) => {
    const statusLabel = { accepted: 'Accepted', review: 'Under Review', report: 'Tech Report' };
    const linksHtml = Object.entries(pub.links || {}).map(([label, url]) =>
      `<a href="${url}" target="_blank">${label}</a>`
    ).join('');

    const noteHtml = pub.note ? `<span class="pub-note">${pub.note}</span>` : '';

    const card = document.createElement('div');
    card.className = 'pub-card';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="pub-header">
        <h3 class="pub-title">${pub.title}</h3>
        <span class="pub-badge ${pub.status}">${statusLabel[pub.status]}</span>
      </div>
      <p class="pub-authors">${pub.authors}</p>
      <p class="pub-venue">${pub.venue} ${noteHtml}</p>
      ${linksHtml ? `<div class="pub-links">${linksHtml}</div>` : ''}
    `;
    pubList.appendChild(card);
  });

  // ── Render Research Timeline ───────────────────────────
  const timeline = document.getElementById('timeline');
  SITE.research.forEach((r, i) => {
    const bullets = r.bullets.map(b => `<li>${b}</li>`).join('');
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.transitionDelay = `${i * 0.1}s`;
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-meta">
          <span class="timeline-org">${r.org}</span>
          <span class="timeline-dates">${r.dates}</span>
        </div>
        <p class="timeline-role">${r.role}</p>
        <p class="timeline-lab">${r.lab} · ${r.location}</p>
        <ul class="timeline-bullets">${bullets}</ul>
      </div>
    `;
    timeline.appendChild(item);
  });

  // ── Render Education ───────────────────────────────────
  const eduGrid = document.getElementById('edu-grid');
  SITE.education.forEach((e, i) => {
    const card = document.createElement('div');
    card.className = 'edu-card';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <p class="edu-degree">${e.degree}</p>
      <p class="edu-field">${e.field}</p>
      ${e.minor ? `<p class="edu-minor">${e.minor}</p>` : ''}
      <p class="edu-institute">${e.institute}</p>
      <div class="edu-meta">
        <span>${e.years}</span>
        <span class="edu-cgpa">CGPA: ${e.cgpa}</span>
      </div>
      <p class="edu-coursework">${e.coursework}</p>
    `;
    eduGrid.appendChild(card);
  });

  // ── Render Skills ──────────────────────────────────────
  const skillsGrid = document.getElementById('skills-grid');
  Object.entries(SITE.skills).forEach(([group, tags], i) => {
    const tagsHtml = tags.map(t => `<span class="skill-tag">${t}</span>`).join('');
    const div = document.createElement('div');
    div.className = 'skill-group';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <h4 class="skill-group-title">${group}</h4>
      <div class="skill-tags">${tagsHtml}</div>
    `;
    skillsGrid.appendChild(div);
  });

  // ── Render Awards ──────────────────────────────────────
  const awardsList = document.getElementById('awards-list');
  SITE.awards.forEach((a, i) => {
    const li = document.createElement('li');
    li.textContent = a;
    li.style.transitionDelay = `${i * 0.08}s`;
    awardsList.appendChild(li);
  });

  // ── Render Positions ───────────────────────────────────
  const posList = document.getElementById('positions-list');
  SITE.positions.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'position-card';
    div.style.transitionDelay = `${i * 0.08}s`;
    div.innerHTML = `
      <p class="position-role">${p.role}</p>
      <p class="position-org">${p.org}</p>
      <p class="position-dates">${p.dates}</p>
      <p class="position-desc">${p.desc}</p>
    `;
    posList.appendChild(div);
  });

  // ── Render Footer ──────────────────────────────────────
  const footerLinks = document.getElementById('footer-links');
  SITE.socials.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url;
    a.target = s.url.startsWith('mailto:') || s.url.startsWith('tel:') ? '_self' : '_blank';
    a.rel = 'noopener noreferrer';
    a.title = s.platform;
    a.innerHTML = `<i class="fa${s.icon === 'graduation-cap' ? 's' : 'b'} fa-${s.icon}"></i>`;
    footerLinks.appendChild(a);
  });
  document.getElementById('footer-note').textContent = SITE.footerNote;

  // ── Navbar Behavior ────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let lastScroll = 0;

  function handleScroll() {
    const scrollY = window.scrollY;
    const heroH = document.getElementById('hero').offsetHeight;

    // Show/hide navbar
    if (scrollY > heroH * 0.6) {
      navbar.classList.add('visible', 'scrolled');
    } else {
      navbar.classList.remove('visible', 'scrolled');
    }

    // Active section highlight
    let currentSection = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (scrollY >= top) {
        currentSection = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentSection);
    });

    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMobile.classList.toggle('open');
  });

  // Close mobile nav on link click
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });

  // ── Scroll Reveal via IntersectionObserver ─────────────
  function startRevealAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all revealable elements
    document.querySelectorAll(
      '.reveal-up, .pub-card, .timeline-item, .edu-card, .skill-group, .awards-list li, .position-card'
    ).forEach(el => observer.observe(el));
  }

  // ── Smooth anchor scrolling ────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
