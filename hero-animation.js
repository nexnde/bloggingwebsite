/**
 * GenZ-Blog "” Hero Canvas Animation
 * Perlin noise flow field + ink trails
 * 
 * Three-layer system:
 *  1. CSS orbs (styles.css) "” slow color blobs
 *  2. CSS glyphs (styles.css) "” drifting editorial characters
 *  3. Canvas flow field (this file) "” particle streams following noise
 */

(function () {
  'use strict';

  // â”€â”€â”€ Minimal Perlin Noise (Ken Perlin's improved algorithm) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const perm = new Uint8Array(512);
  const p = [
    151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,
    8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,
    35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,
    134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,
    55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,
    18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,
    250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,
    189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,
    172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,
    228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,
    107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,
    138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
  ];
  for (let i = 0; i < 256; i++) perm[i] = perm[i + 256] = p[i];

  function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(a, b, t) { return a + t * (b - a); }
  function grad(h, x, y) {
    const v = (h & 1) ? x : y;
    return (h & 2) ? -v : v;
  }

  function noise(x, y) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = fade(x), v = fade(y);
    const a = perm[X] + Y, aa = perm[a], ab = perm[a + 1];
    const b = perm[X + 1] + Y, ba = perm[b], bb = perm[b + 1];
    return lerp(
      lerp(grad(perm[aa], x, y),     grad(perm[ba], x - 1, y),     u),
      lerp(grad(perm[ab], x, y - 1), grad(perm[bb], x - 1, y - 1), u),
      v
    );
  }

  // â”€â”€â”€ Config â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const CFG = {
    particleCount:   110,
    speed:           1.1,
    fieldScale:      0.0028,
    fieldEvolution:  0.00018,  // how fast the field shifts over time
    lineLength:      5,        // trail segments per particle
    baseOpacity:     0.55,
    fadeRate:        0.015,
    particleRadius:  1.4,
    inkDropChance:   0.0008,   // probability of spawning an ink drop each frame
    maxInkDrops:     6,
  };

  // â”€â”€â”€ State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  let canvas, ctx, W, H;
  let particles = [];
  let inkDrops  = [];
  let t = 0;              // time accumulator for field evolution
  let raf = null;
  let accentColor = '';
  let isDark = false;

  // â”€â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function getAccent() {
    isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return isDark ? [251, 146, 60] : [194, 65, 12];
  }

  function rgba(rgb, a) {
    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a.toFixed(3)})`;
  }

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = canvas.width  = rect.width;
    H = canvas.height = rect.height;
    // Reset particle positions on resize
    particles.forEach(p => { p.x = Math.random() * W; p.y = Math.random() * H; });
  }

  // â”€â”€â”€ Particle â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function createParticle(x, y) {
    const life = 0.6 + Math.random() * 0.4;   // max opacity multiplier
    return {
      x: x !== undefined ? x : Math.random() * W,
      y: y !== undefined ? y : Math.random() * H,
      trail: [],
      life,
      age: 0,
      maxAge: 180 + Math.random() * 280,        // frames to live
      speed: (0.6 + Math.random() * 0.8) * CFG.speed,
      size:  0.6 + Math.random() * 1.6,
    };
  }

  function initParticles() {
    particles = Array.from({ length: CFG.particleCount }, () => createParticle());
  }

  // â”€â”€â”€ Ink Drop (a larger, slow-fading bloom) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function createInkDrop() {
    return {
      x: 0.1 * W + Math.random() * 0.8 * W,
      y: 0.1 * H + Math.random() * 0.8 * H,
      r: 4 + Math.random() * 10,
      alpha: 0.06 + Math.random() * 0.08,
      life:  1,
    };
  }

  // â”€â”€â”€ Flow angle at (x, y, t) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function flowAngle(x, y) {
    const n = noise(x * CFG.fieldScale, y * CFG.fieldScale + t);
    return n * Math.PI * 4;   // full circle Ã— 2
  }

  // â”€â”€â”€ Draw one frame â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function frame() {
    raf = requestAnimationFrame(frame);

    const rgb = getAccent();
    t += CFG.fieldEvolution;

    // Soft fade the entire canvas (creates trails)
    ctx.fillStyle = isDark
      ? 'rgba(17,16,16,0.06)'
      : 'rgba(250,248,245,0.06)';
    ctx.fillRect(0, 0, W, H);

    // â”€â”€ Update & draw particles â”€â”€
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.age++;

      // Life curve: ramp up, sustain, ramp down
      const lifeRatio = p.age / p.maxAge;
      let alpha;
      if (lifeRatio < 0.1)       alpha = lifeRatio / 0.1 * p.life * CFG.baseOpacity;
      else if (lifeRatio > 0.8)  alpha = (1 - lifeRatio) / 0.2 * p.life * CFG.baseOpacity;
      else                        alpha = p.life * CFG.baseOpacity;

      const angle = flowAngle(p.x, p.y);
      const vx = Math.cos(angle) * p.speed;
      const vy = Math.sin(angle) * p.speed;

      // Store trail point
      p.trail.push({ x: p.x, y: p.y });
      if (p.trail.length > CFG.lineLength) p.trail.shift();

      p.x += vx;
      p.y += vy;

      // Wrap edges softly
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;

      // Draw trail as a polyline
      if (p.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(p.trail[0].x, p.trail[0].y);
        for (let j = 1; j < p.trail.length; j++) {
          ctx.lineTo(p.trail[j].x, p.trail[j].y);
        }
        ctx.strokeStyle = rgba(rgb, alpha * 0.7);
        ctx.lineWidth   = p.size * 0.6;
        ctx.lineCap     = 'round';
        ctx.lineJoin    = 'round';
        ctx.stroke();
      }

      // Draw particle head
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = rgba(rgb, alpha);
      ctx.fill();

      // Respawn dead particles at random
      if (p.age >= p.maxAge) {
        particles[i] = createParticle();
      }
    }

    // â”€â”€ Ink drops â”€â”€
    if (inkDrops.length < CFG.maxInkDrops && Math.random() < CFG.inkDropChance) {
      inkDrops.push(createInkDrop());
    }

    for (let i = inkDrops.length - 1; i >= 0; i--) {
      const d = inkDrops[i];
      d.life -= 0.004;
      d.r    += 0.25;

      if (d.life <= 0) { inkDrops.splice(i, 1); continue; }

      // Radial gradient bloom
      const grd = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
      grd.addColorStop(0,   rgba(rgb, d.alpha * d.life));
      grd.addColorStop(0.4, rgba(rgb, d.alpha * d.life * 0.4));
      grd.addColorStop(1,   rgba(rgb, 0));
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    }
  }

  // â”€â”€â”€ Public init â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function init() {
    canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resize();
    initParticles();

    // Observe resize
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas.parentElement);

    // Observe theme changes to update colors instantly
    const mo = new MutationObserver(() => {
      // Nothing extra needed "” getAccent() reads live attribute each frame
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Pause when tab hidden (saves CPU/battery)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = null;
      } else {
        if (!raf) raf = requestAnimationFrame(frame);
      }
    });

    // Pause when hero not visible (user has scrolled away)
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (!raf) raf = requestAnimationFrame(frame);
        } else {
          cancelAnimationFrame(raf);
          raf = null;
        }
      });
    }, { threshold: 0.01 });
    io.observe(canvas.parentElement);

    // Subtle mouse parallax "” nudges particle velocities toward cursor
    canvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      // Spawn a tiny ink drop near cursor occasionally
      if (Math.random() < 0.04) {
        inkDrops.push({
          x: mx + (Math.random() - .5) * 40,
          y: my + (Math.random() - .5) * 40,
          r: 2 + Math.random() * 6,
          alpha: 0.04 + Math.random() * 0.04,
          life: 1,
        });
      }
    }, { passive: true });

    raf = requestAnimationFrame(frame);
  }

  // Boot after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

