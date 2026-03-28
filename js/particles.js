/* ═══════════════════════════════════════════════════════════
   PARTICLES.JS — Constellation / network background
   Violet-blue-pink floating dots with connecting lines
   ═══════════════════════════════════════════════════════════ */

(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const colors = [
    'rgba(91, 58, 158, ',   // violet
    'rgba(201, 71, 123, ',  // rose
    'rgba(58, 111, 216, ',  // blue
    'rgba(124, 92, 191, ',  // light violet
  ];

  let particles = [];
  let mouse = { x: -9999, y: -9999 };
  let w, h;
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const PARTICLE_COUNT = isMobile ? 35 : 70;
  const CONNECTION_DIST = isMobile ? 120 : 160;
  const MOUSE_RADIUS = 180;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    const time = Date.now() * 0.001;

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(91, 58, 158, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw and update particles
    for (const p of particles) {
      // Pulse
      const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.3 + 0.7;
      const drawAlpha = p.alpha * pulse;
      const drawR = p.r * (0.85 + pulse * 0.15);

      // Glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, drawR * 3, 0, Math.PI * 2);
      ctx.fillStyle = p.color + (drawAlpha * 0.15) + ')';
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(p.x, p.y, drawR, 0, Math.PI * 2);
      ctx.fillStyle = p.color + drawAlpha + ')';
      ctx.fill();

      // Mouse repulsion
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < MOUSE_RADIUS && mDist > 0) {
        const force = (MOUSE_RADIUS - mDist) / MOUSE_RADIUS * 0.8;
        p.x += (mdx / mDist) * force;
        p.y += (mdy / mDist) * force;
      }

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;
    }

    requestAnimationFrame(draw);
  }

  // Events
  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Init
  resize();
  createParticles();
  draw();
})();
