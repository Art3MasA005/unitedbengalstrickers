/**
 * United Bengal Strikers - Fan Zone Cheer Widget & Celebration Effects
 * A Concern of United Bengal Group | "Born to Strike"
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'ubs_cheer_count';
  const DEFAULT_COUNT = 12480;

  // Initialize or fetch saved cheer count
  let cheerCount = parseInt(localStorage.getItem(STORAGE_KEY), 10);
  if (isNaN(cheerCount) || cheerCount < DEFAULT_COUNT) {
    cheerCount = DEFAULT_COUNT;
    localStorage.setItem(STORAGE_KEY, cheerCount);
  }

  const cheerDisplay = document.getElementById('cheer-count');
  const cheerBtn = document.getElementById('cheer-btn');
  const canvas = document.getElementById('cheer-confetti');

  if (cheerDisplay) {
    cheerDisplay.textContent = formatNumber(cheerCount);
  }

  function formatNumber(num) {
    return num.toLocaleString();
  }

  // Audio tone generator using Web Audio API for celebratory chime (no external audio assets required)
  function playCheerChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 triumphant chord
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.06 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 0.55);
      });
    } catch (e) {
      // AudioContext might be muted or not allowed without user gesture
    }
  }

  // Canvas Confetti / Sparkle Particle Engine
  let particles = [];
  let animationId = null;

  function initCanvas() {
    if (!canvas) return;
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', initCanvas);

  function createParticles(x, y) {
    if (!canvas) return;
    initCanvas();
    const colors = ['#ffd700', '#d4af37', '#ef233c', '#d90429', '#ffffff', '#ff8500'];
    const count = 45;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      particles.push({
        x: x || canvas.width / 2,
        y: y || canvas.height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 3,
        alpha: 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        gravity: 0.2
      });
    }

    if (!animationId) {
      renderConfetti();
    }
  }

  function renderConfetti() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= 0.016;
      p.rotation += p.rotationSpeed;

      if (p.alpha <= 0 || p.y > canvas.height + 20) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      ctx.restore();
    }

    if (particles.length > 0) {
      animationId = requestAnimationFrame(renderConfetti);
    } else {
      animationId = null;
    }
  }

  // Cheer click handler
  if (cheerBtn) {
    cheerBtn.addEventListener('click', function (e) {
      cheerCount += 1;
      localStorage.setItem(STORAGE_KEY, cheerCount);

      if (cheerDisplay) {
        cheerDisplay.textContent = formatNumber(cheerCount);
        cheerDisplay.classList.add('pulse-scale');
        setTimeout(() => cheerDisplay.classList.remove('pulse-scale'), 300);
      }

      // Button ripple / pop animation
      cheerBtn.classList.add('pop-active');
      setTimeout(() => cheerBtn.classList.remove('pop-active'), 250);

      const rect = canvas ? canvas.getBoundingClientRect() : null;
      let clickX, clickY;
      if (rect) {
        clickX = e.clientX - rect.left;
        clickY = e.clientY - rect.top;
      }

      createParticles(clickX, clickY);
      playCheerChime();
    });
  }

  // Export cheer trigger in window for reuse
  window.triggerStrikerCheer = function () {
    if (cheerBtn) cheerBtn.click();
  };

})();
