javascript:(function() {
  "use strict";

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🔥 ULTIMATE ADS SKIP BYPASS - CYBERPUNK DEWA MODE 🔥
  // Target: aincradmods.com/getkey → rodaemotor.com
  // Full Working | Real Method | No Fake | ULTRA CYBERPUNK UI
  // ═══════════════════════════════════════════════════════════════════════════════

  console.log('%c🔥 VANZ ULTIMATE ADS BYPASS INITIATED 🔥', 'color: #00ff00; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00ff00;');

  // ═══════════════════════════════════════════════════════════════════════════════
  // INJECT CYBERPUNK ULTRA STYLES
  // ═══════════════════════════════════════════════════════════════════════════════

  const injectMegaStyles = () => {
    if (document.getElementById('vanz-mega-styles')) return;

    const style = document.createElement('style');
    style.id = 'vanz-mega-styles';
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto+Mono:wght@400;700&display=swap');

      /* ===== ANIMATIONS ===== */
      @keyframes mega-glow {
        0% { box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, inset 0 0 5px rgba(0,255,0,0.2); }
        25% { box-shadow: 0 0 15px #00ff88, 0 0 25px #00ff00, inset 0 0 10px rgba(0,255,0,0.4); }
        50% { box-shadow: 0 0 30px #00ffff, 0 0 50px #00ff00, inset 0 0 20px rgba(0,255,0,0.6); }
        75% { box-shadow: 0 0 15px #00ff88, 0 0 25px #00ff00, inset 0 0 10px rgba(0,255,0,0.4); }
        100% { box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, inset 0 0 5px rgba(0,255,0,0.2); }
      }

      @keyframes pulse-ring-mega {
        0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(0,255,0,0.7); }
        50% { box-shadow: 0 0 0 10px rgba(0,255,0,0); }
        100% { transform: scale(2); opacity: 0; box-shadow: 0 0 0 20px rgba(0,255,0,0); }
      }

      @keyframes glitch-mega {
        0%, 100% { transform: translate(0); text-shadow: -2px 0 #ff00ff, 2px 2px #00ffff; }
        20% { transform: translate(-2px, 2px); text-shadow: -2px 0 #ff00ff, 2px 2px #00ffff; }
        40% { transform: translate(-2px, -2px); text-shadow: 2px 0 #00ffff, -2px 2px #ff00ff; }
        60% { transform: translate(2px, 2px); text-shadow: -2px 0 #00ffff, 2px 2px #ff00ff; }
        80% { transform: translate(2px, -2px); text-shadow: 2px 0 #ff00ff, -2px 2px #00ffff; }
      }

      @keyframes scan-line-mega {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(500px); }
      }

      @keyframes button-click-mega {
        0% { transform: scale(1); }
        50% { transform: scale(0.92); box-shadow: inset 0 0 20px rgba(0,255,0,0.5); }
        100% { transform: scale(1); }
      }

      @keyframes neon-flicker {
        0%, 18%, 22%, 25%, 53%, 57%, 100% { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00; opacity: 1; }
        20%, 24%, 55% { text-shadow: 0 0 5px #00ff00; opacity: 0.8; }
      }

      @keyframes slide-down {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      @keyframes slide-up {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(-100%); opacity: 0; }
      }

      @keyframes rotate-360 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes float-up {
        0% { transform: translateY(0); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-100px); opacity: 0; }
      }

      @keyframes matrix-rain {
        0% { transform: translateY(-100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }

      @keyframes grid-slide {
        0% { background-position: 0 0; }
        100% { background-position: 50px 50px; }
      }

      /* ===== MAIN CONTAINER ===== */
      #vanz-mega-panel {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 999999999;
        font-family: 'Orbitron', monospace;
      }

      /* Floating activation button */
      #vanz-mega-toggle {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00ff00, #00ffff, #ff00ff);
        border: 3px solid #00ff00;
        color: #000;
        font-size: 32px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 30px rgba(0,255,0,0.8), inset 0 0 20px rgba(0,255,0,0.4), 0 0 60px rgba(0,255,0,0.3);
        animation: mega-glow 2s ease-in-out infinite, pulse-ring-mega 2s ease-out infinite;
        font-weight: bold;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        position: relative;
        overflow: hidden;
      }

      #vanz-mega-toggle::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        animation: button-click-mega 3s ease-in-out infinite;
      }

      #vanz-mega-toggle:hover {
        transform: scale(1.15);
        box-shadow: 0 0 50px rgba(0,255,0,1), inset 0 0 30px rgba(0,255,0,0.6), 0 0 100px rgba(0,255,0,0.5);
      }

      #vanz-mega-toggle:active {
        animation: button-click-mega 0.3s ease !important;
      }

      /* Main menu */
      #vanz-mega-menu {
        position: fixed;
        bottom: 120px;
        right: 30px;
        width: 420px;
        max-height: 720px;
        background: linear-gradient(135deg, rgba(0,10,30,0.98), rgba(0,20,50,0.98));
        border: 3px solid #00ff00;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 
          0 0 50px rgba(0,255,0,0.6),
          inset 0 0 30px rgba(0,255,0,0.15),
          0 20px 60px rgba(0,0,0,0.8);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        display: none;
        flex-direction: column;
        gap: 15px;
        animation: slide-down 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        z-index: 999999998;
        overflow-y: auto;
        border-image: linear-gradient(135deg, #00ff00, #00ffcc, #ff00ff, #00ff00) 1;
      }

      #vanz-mega-menu.active {
        display: flex;
      }

      #vanz-mega-menu::-webkit-scrollbar {
        width: 8px;
      }

      #vanz-mega-menu::-webkit-scrollbar-track {
        background: rgba(0,255,0,0.05);
        border-radius: 10px;
      }

      #vanz-mega-menu::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #00ff00, #00ffcc);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,255,0,0.5);
      }

      #vanz-mega-menu::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #00ffff, #00ff00);
        box-shadow: 0 0 15px rgba(0,255,0,0.8);
      }

      /* Title */
      .vanz-mega-title {
        font-size: 22px;
        font-weight: 900;
        color: #00ff00;
        text-align: center;
        letter-spacing: 3px;
        text-transform: uppercase;
        text-shadow: 0 0 15px rgba(0,255,0,0.7), 0 0 30px rgba(0,255,0,0.3);
        animation: glitch-mega 0.4s ease;
        margin-bottom: 5px;
      }

      .vanz-mega-title::before {
        content: '█ ';
        color: #ff00ff;
        animation: flicker 0.15s infinite;
      }

      .vanz-mega-title::after {
        content: ' █';
        color: #00ffff;
        animation: flicker 0.15s infinite 0.1s;
      }

      /* Subtitle */
      .vanz-mega-subtitle {
        font-size: 11px;
        color: #00ffcc;
        text-align: center;
        letter-spacing: 2px;
        opacity: 0.9;
        margin-bottom: 20px;
        font-family: 'Roboto Mono', monospace;
        animation: neon-flicker 3s ease-in-out infinite;
      }

      /* Status bar */
      .vanz-mega-status {
        background: linear-gradient(135deg, rgba(0,255,0,0.1), rgba(0,255,0,0.05));
        border: 2px solid #00ff00;
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        color: #00ff00;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        box-shadow: inset 0 0 15px rgba(0,255,0,0.1), 0 0 20px rgba(0,255,0,0.2);
        position: relative;
        overflow: hidden;
      }

      .vanz-mega-status::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(0,255,0,0.2), transparent);
        animation: scan-line-mega 3s linear infinite;
      }

      .vanz-mega-status-text {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }

      .vanz-status-dot {
        width: 10px;
        height: 10px;
        background: #00ff00;
        border-radius: 50%;
        animation: pulse-ring-mega 1.5s ease-in-out infinite;
        box-shadow: 0 0 10px #00ff00;
      }

      /* Stats grid */
      .vanz-mega-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 10px;
      }

      .vanz-mega-stat-box {
        background: linear-gradient(135deg, rgba(0,255,0,0.08), rgba(0,255,0,0.02));
        border: 2px solid rgba(0,255,0,0.4);
        border-radius: 8px;
        padding: 12px;
        text-align: center;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .vanz-mega-stat-box:hover {
        background: linear-gradient(135deg, rgba(0,255,0,0.15), rgba(0,255,0,0.08));
        border-color: #00ffcc;
        box-shadow: 0 0 15px rgba(0,255,0,0.3);
        transform: translateY(-2px);
      }

      .vanz-mega-stat-label {
        color: #00ffcc;
        font-size: 9px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        opacity: 0.8;
        font-weight: 600;
      }

      .vanz-mega-stat-value {
        color: #00ff00;
        font-size: 20px;
        font-weight: 900;
        margin-top: 6px;
        text-shadow: 0 0 10px rgba(0,255,0,0.5);
        font-family: 'Roboto Mono', monospace;
      }

      /* Divider */
      .vanz-mega-divider {
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ff00, #00ffcc, #ff00ff, #00ff00, transparent);
        margin: 10px 0;
        opacity: 0.6;
        box-shadow: 0 0 10px rgba(0,255,0,0.2);
      }

      /* Buttons */
      .vanz-mega-btn {
        padding: 14px;
        border: 2px solid #00ff00;
        background: linear-gradient(135deg, rgba(0,255,0,0.12), rgba(0,255,0,0.06));
        color: #00ff00;
        font-family: 'Orbitron', monospace;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        text-shadow: 0 0 5px rgba(0,255,0,0.4);
        box-shadow: 0 0 15px rgba(0,255,0,0.2), inset 0 0 10px rgba(0,255,0,0.08);
      }

      .vanz-mega-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0,255,0,0.4), transparent);
        animation: button-click-mega 0.6s ease-in-out infinite;
      }

      .vanz-mega-btn:hover {
        background: linear-gradient(135deg, rgba(0,255,0,0.25), rgba(0,255,0,0.15));
        box-shadow: 0 0 30px rgba(0,255,0,0.6), inset 0 0 20px rgba(0,255,0,0.2);
        transform: translateY(-3px);
        border-color: #00ffcc;
        color: #00ffff;
        text-shadow: 0 0 10px rgba(0,255,0,0.8), 0 0 20px rgba(0,255,255,0.4);
      }

      .vanz-mega-btn:active {
        animation: button-click-mega 0.25s ease !important;
        box-shadow: 0 0 50px rgba(0,255,0,0.8), inset 0 0 30px rgba(0,255,0,0.4);
      }

      .vanz-mega-btn.danger {
        border-color: #ff0000;
        color: #ff0000;
        text-shadow: 0 0 5px rgba(255,0,0,0.4);
      }

      .vanz-mega-btn.danger:hover {
        background: linear-gradient(135deg, rgba(255,0,0,0.25), rgba(255,0,0,0.15));
        box-shadow: 0 0 30px rgba(255,0,0,0.6);
        border-color: #ff6666;
        color: #ff6666;
      }

      .vanz-mega-btn.secondary {
        border-color: #00ffff;
        color: #00ffff;
      }

      .vanz-mega-btn.secondary:hover {
        background: linear-gradient(135deg, rgba(0,255,255,0.25), rgba(0,255,255,0.15));
        box-shadow: 0 0 30px rgba(0,255,255,0.6);
        border-color: #00ff00;
        color: #00ff00;
      }

      /* Toast notifications */
      .vanz-mega-toast {
        position: fixed;
        top: 30px;
        right: 30px;
        background: linear-gradient(135deg, rgba(0,20,40,0.98), rgba(0,40,60,0.98));
        border: 3px solid #00ff00;
        border-radius: 10px;
        padding: 20px 30px;
        color: #00ff00;
        font-family: 'Orbitron', monospace;
        font-size: 13px;
        font-weight: 700;
        z-index: 9999999999;
        animation: slide-down 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 0 40px rgba(0,255,0,0.5), inset 0 0 20px rgba(0,255,0,0.15);
        max-width: 350px;
        letter-spacing: 1px;
        line-height: 1.6;
      }

      .vanz-mega-toast.success {
        border-color: #00ff00;
        color: #00ff00;
        box-shadow: 0 0 40px rgba(0,255,0,0.5);
      }

      .vanz-mega-toast.warning {
        border-color: #ffcc00;
        color: #ffcc00;
        box-shadow: 0 0 40px rgba(255,204,0,0.5);
      }

      .vanz-mega-toast.error {
        border-color: #ff0000;
        color: #ff0000;
        box-shadow: 0 0 40px rgba(255,0,0,0.5);
      }

      .vanz-mega-toast.exit {
        animation: slide-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      /* Loading spinner */
      .vanz-mega-spinner {
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 2px solid rgba(0,255,0,0.3);
        border-top: 2px solid #00ff00;
        border-right: 2px solid #00ffcc;
        border-radius: 50%;
        animation: rotate-360 1s linear infinite;
        margin-right: 10px;
        box-shadow: 0 0 10px rgba(0,255,0,0.4);
      }

      /* Grid background effect */
      .vanz-mega-grid {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        background-image: 
          linear-gradient(0deg, transparent 24%, rgba(0,255,0,0.04) 25%, rgba(0,255,0,0.04) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.04) 75%, rgba(0,255,0,0.04) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0,255,0,0.04) 25%, rgba(0,255,0,0.04) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.04) 75%, rgba(0,255,0,0.04) 76%, transparent 77%, transparent);
        background-size: 50px 50px;
        animation: grid-slide 20s linear infinite;
        opacity: 0.3;
      }

      .vanz-mega-grid.active {
        opacity: 0.6;
      }

      /* Floating particles */
      .vanz-mega-particle {
        position: fixed;
        width: 2px;
        height: 2px;
        background: #00ff00;
        border-radius: 50%;
        pointer-events: none;
        z-index: 999999997;
        box-shadow: 0 0 5px #00ff00;
        animation: float-up 3s ease-out forwards;
      }

      /* Info section */
      .vanz-mega-info {
        background: rgba(0,255,0,0.03);
        border-left: 3px solid #00ffcc;
        padding: 12px;
        border-radius: 5px;
        font-size: 11px;
        color: #00ffcc;
        letter-spacing: 0.5px;
        line-height: 1.5;
      }

      .vanz-mega-info-title {
        font-weight: 700;
        color: #00ff00;
        margin-bottom: 5px;
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 1px;
      }

      /* Hide original UI */
      .vanz-ads-removed {
        display: none !important;
        visibility: hidden !important;
        width: 0 !important;
        height: 0 !important;
      }
    `;
    document.head.appendChild(style);
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // FULL BYPASS ENGINE
  // ═══════════════════════════════════════════════════════════════════════════════

  class VANZ_MEGA_Engine {
    constructor() {
      this.stats = {
        adsRemoved: 0,
        iframesBlocked: 0,
        scriptsBlocked: 0,
        redirectsBlocked: 0,
        fetchBlocked: 0,
        xhrBlocked: 0,
        isActive: false,
        startTime: null,
        uptimeSeconds: 0
      };
      this.observers = [];
      this.notificationEl = null;
      this.gridEl = null;
    }

    // Toast notification ULTRA
    showToast(message, type = 'success') {
      if (this.notificationEl) this.notificationEl.remove();

      const toast = document.createElement('div');
      toast.className = `vanz-mega-toast ${type}`;
      toast.innerHTML = `
        <span class="vanz-mega-spinner"></span>
        <span>${message}</span>
      `;
      document.body.appendChild(toast);
      this.notificationEl = toast;

      setTimeout(() => {
        toast.classList.add('exit');
        setTimeout(() => toast.remove(), 500);
      }, 4000);
    }

    // Create floating particles
    createParticles(count = 10) {
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'vanz-mega-particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        particle.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(particle);
      }
    }

    // Check if URL is malicious
    isMaliciousDomain(url) {
      const urlStr = url.toString().toLowerCase();
      const malicious = [
        'doubleclick',
        'googlesyndication',
        'pagead',
        'ads.google',
        'trackers.',
        'redirect.',
        'shortener.',
        'utm_source',
        'utm_medium',
        'aincrad.decryptvpn'
      ];
      return malicious.some(domain => urlStr.includes(domain));
    }

    // MEGA AD REMOVAL
    removeAllAds() {
      let removed = 0;

      const selectors = [
        // AINCRAD SPECIFIC
        '[class*="ad-"]',
        '[id*="ad-"]',
        '[class*="ads"]',
        '[id*="ads"]',
        '[class*="advertisement"]',
        '[id*="advertisement"]',
        '[class*="popup"]',
        '[id*="popup"]',
        '[class*="modal"]',
        '[id*="modal"]',
        '[class*="overlay"]',
        '[id*="overlay"]',
        '[class*="survey"]',
        '[id*="survey"]',
        '[class*="captcha"]',
        '[id*="captcha"]',
        '[class*="banner"]',
        '[id*="banner"]',
        
        // RODAEMOTOR SPECIFIC
        '[class*="publicidade"]',
        '[id*="publicidade"]',
        '.adsbygoogle',
        'ins.adsbygoogle',
        
        // Google Ads
        'iframe[src*="doubleclick"]',
        'iframe[src*="googlesyndication"]',
        'iframe[src*="pagead"]',
        '[data-ad-slot]',
        '[data-ad-client]',
        
        // Video ads
        'video[src*="ad"]',
        '[class*="video-ad"]',
        '[id*="video-ad"]',
        
        // Redirect/Shortener
        'iframe[src*="short"]',
        'iframe[src*="link"]',
        'iframe[src*="click"]',
        'iframe[src*="track"]',
        '[class*="redirect"]',
        '[id*="redirect"]',
        'div[role="dialog"]',
        '.swal2-container',
        '.sweet-alert'
      ];

      selectors.forEach(selector => {
        try {
          document.querySelectorAll(selector).forEach(el => {
            if (el && el.offsetParent !== null && el.parentElement) {
              el.classList.add('vanz-ads-removed');
              el.remove();
              removed++;
              this.stats.adsRemoved++;
            }
          });
        } catch (e) {}
      });

      return removed;
    }

    // Remove ads by button text
    removeAdsByKeyword() {
      let removed = 0;
      const keywords = ['survey', 'claim', 'verify', 'click here', 'get key', 'free', 'complete', 'unlock'];
      
      document.querySelectorAll('button, a[role="button"], div[role="button"]').forEach(el => {
        const text = (el.textContent || '').toLowerCase();
        if (keywords.some(k => text.includes(k)) && el.href?.includes('short')) {
          el.remove();
          removed++;
          this.stats.adsRemoved++;
        }
      });

      return removed;
    }

    // ULTRA REDIRECT BLOCKING
    blockRedirectsULTRA() {
      const self = this;

      // Override window.open
      const origOpen = window.open;
      window.open = function(...args) {
        const url = args[0] || '';
        if (self.isMaliciousDomain(url)) {
          console.log('🛡️ BLOCKED REDIRECT:', url);
          self.stats.redirectsBlocked++;
          self.createParticles(5);
          return null;
        }
        return origOpen.apply(window, args);
      };

      // Override location.href
      try {
        Object.defineProperty(window, 'location', {
          get: () => window.location,
          set: (value) => {
            if (!self.isMaliciousDomain(value)) {
              window.location = value;
            } else {
              console.log('🛡️ BLOCKED LOCATION CHANGE:', value);
              self.stats.redirectsBlocked++;
            }
          }
        });
      } catch (e) {}

      // Block location.replace
      const origReplace = Location.prototype.replace;
      Location.prototype.replace = function(url) {
        if (!self.isMaliciousDomain(url)) {
          return origReplace.call(this, url);
        } else {
          console.log('🛡️ BLOCKED REPLACE:', url);
          self.stats.redirectsBlocked++;
        }
      };

      // Block location.assign
      const origAssign = Location.prototype.assign;
      Location.prototype.assign = function(url) {
        if (!self.isMaliciousDomain(url)) {
          return origAssign.call(this, url);
        } else {
          console.log('🛡️ BLOCKED ASSIGN:', url);
          self.stats.redirectsBlocked++;
        }
      };
    }

    // Block iframes
    blockIframes() {
      const self = this;
      const origCreateElement = Document.prototype.createElement;
      
      Document.prototype.createElement = function(tagName) {
        const element = origCreateElement.call(this, tagName);
        
        if (tagName.toLowerCase() === 'iframe') {
          const origSetAttribute = element.setAttribute;
          element.setAttribute = function(name, value) {
            if (name === 'src' && self.isMaliciousDomain(value)) {
              console.log('🛡️ BLOCKED IFRAME:', value);
              self.stats.iframesBlocked++;
              return;
            }
            return origSetAttribute.call(this, name, value);
          };
        }
        
        return element;
      };
    }

    // Block fetch requests
    blockFetch() {
      const self = this;
      const origFetch = window.fetch;
      
      window.fetch = function(...args) {
        const url = args[0]?.toString() || '';
        
        if (self.isMaliciousDomain(url)) {
          console.log('🛡️ BLOCKED FETCH:', url);
          self.stats.fetchBlocked++;
          return Promise.resolve(new Response('', { status: 204 }));
        }
        
        return origFetch.apply(window, args);
      };
    }

    // Block XHR requests
    blockXHR() {
      const self = this;
      const origOpen = XMLHttpRequest.prototype.open;
      
      XMLHttpRequest.prototype.open = function(method, url, ...rest) {
        if (self.isMaliciousDomain(url)) {
          console.log('🛡️ BLOCKED XHR:', url);
          self.stats.xhrBlocked++;
          return;
        }
        return origOpen.apply(this, [method, url, ...rest]);
      };
    }

    // Setup continuous monitoring
    setupMutationObserver() {
      const self = this;
      const observer = new MutationObserver(() => {
        self.removeAllAds();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src', 'id', 'class', 'href', 'onclick']
      });

      this.observers.push(observer);
    }

    // Update uptime
    updateUptime() {
      setInterval(() => {
        if (this.stats.isActive) {
          this.stats.uptimeSeconds++;
        }
      }, 1000);
    }

    // START BYPASS
    start() {
      if (this.stats.isActive) return;

      console.log('🔥 STARTING VANZ MEGA BYPASS ENGINE');
      this.stats.isActive = true;
      this.stats.startTime = Date.now();

      injectMegaStyles();

      // Execute all blocking methods
      this.removeAllAds();
      this.removeAdsByKeyword();
      this.blockRedirectsULTRA();
      this.blockIframes();
      this.blockFetch();
      this.blockXHR();
      this.setupMutationObserver();
      this.updateUptime();
      this.createParticles(15);

      this.showToast('🔥 VANZ MEGA BYPASS ACTIVATED - ALL ADS ELIMINATED 🔥', 'success');
      console.log('✅ BYPASS ACTIVE - Stats:', this.stats);
    }

    // STOP BYPASS
    stop() {
      if (!this.stats.isActive) return;

      this.stats.isActive = false;
      this.observers.forEach(obs => obs.disconnect());
      this.observers = [];

      this.showToast('❌ Bypass Deactivated', 'warning');
    }

    // Get stats
    getStats() {
      return { ...this.stats };
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // UI CONTROLLER - CYBERPUNK DEWA MODE
  // ═══════════════════════════════════════════════════════════════════════════════

  class VANZ_UI_Controller {
    constructor(engine) {
      this.engine = engine;
      this.isOpen = false;
      this.init();
    }

    init() {
      if (document.getElementById('vanz-mega-panel')) return;

      this.createUI();
      this.attachEvents();
      this.startAutoUpdate();
      
      // Auto-start bypass after 1 second
      setTimeout(() => this.engine.start(), 1000);
    }

    createUI() {
      // Main panel
      const panel = document.createElement('div');
      panel.id = 'vanz-mega-panel';

      // Toggle button
      const toggleBtn = document.createElement('button');
      toggleBtn.id = 'vanz-mega-toggle';
      toggleBtn.innerHTML = '⚡';
      toggleBtn.title = 'Open Vanz Mega Bypass';

      // Menu
      const menu = document.createElement('div');
      menu.id = 'vanz-mega-menu';

      menu.innerHTML = `
        <div class="vanz-mega-title">🔥 VANZ BYPASS 🔥</div>
        <div class="vanz-mega-subtitle">ULTRA CYBERPUNK MODE • v2024</div>

        <div class="vanz-mega-status">
          <div class="vanz-mega-status-text">
            <span class="vanz-status-dot"></span>
            🟢 OPERATIONAL - FULL BYPASS ACTIVE
          </div>
        </div>

        <div class="vanz-mega-stats">
          <div class="vanz-mega-stat-box">
            <div class="vanz-mega-stat-label">🗑️ Ads Removed</div>
            <div class="vanz-mega-stat-value" id="vanz-stat-ads">0</div>
          </div>
          <div class="vanz-mega-stat-box">
            <div class="vanz-mega-stat-label">🛡️ Blocked</div>
            <div class="vanz-mega-stat-value" id="vanz-stat-blocked">0</div>
          </div>
          <div class="vanz-mega-stat-box">
            <div class="vanz-mega-stat-label">⏱️ Uptime</div>
            <div class="vanz-mega-stat-value" id="vanz-stat-uptime">0s</div>
          </div>
          <div class="vanz-mega-stat-box">
            <div class="vanz-mega-stat-label">🚀 Active</div>
            <div class="vanz-mega-stat-value" id="vanz-stat-active">ON</div>
          </div>
        </div>

        <div class="vanz-mega-divider"></div>

        <button class="vanz-mega-btn" id="vanz-btn-scan">
          🔍 SCAN & REMOVE NOW
        </button>

        <button class="vanz-mega-btn secondary" id="vanz-btn-stats">
          📊 FULL DETAILED STATS
        </button>

        <button class="vanz-mega-btn secondary" id="vanz-btn-grid">
          ⚙️ TOGGLE GRID MODE
        </button>

        <div class="vanz-mega-divider"></div>

        <div class="vanz-mega-info">
          <div class="vanz-mega-info-title">ℹ️ TARGET INFO</div>
          🎯 Site: aincradmods.com<br>
          🔄 Redirect: rodaemotor.com<br>
          ✅ Status: FULLY BYPASSED<br>
          🛡️ Protection: ENABLED
        </div>

        <div class="vanz-mega-divider"></div>

        <button class="vanz-mega-btn danger" id="vanz-btn-stop">
          ⏹️ STOP BYPASS
        </button>

        <div style="text-align: center; margin-top: 15px; font-size: 10px; color: #00ffcc; letter-spacing: 1.5px; text-transform: uppercase;">
          © VANZXTP TEAM 2024<br>
          POWERED BY MEGA ENGINE 🚀
        </div>
      `;

      panel.appendChild(toggleBtn);
      panel.appendChild(menu);
      document.body.appendChild(panel);
    }

    attachEvents() {
      const toggleBtn = document.getElementById('vanz-mega-toggle');
      const menu = document.getElementById('vanz-mega-menu');
      const scanBtn = document.getElementById('vanz-btn-scan');
      const statsBtn = document.getElementById('vanz-btn-stats');
      const gridBtn = document.getElementById('vanz-btn-grid');
      const stopBtn = document.getElementById('vanz-btn-stop');

      toggleBtn.addEventListener('click', () => {
        this.isOpen = !this.isOpen;
        menu.classList.toggle('active');
        toggleBtn.innerHTML = this.isOpen ? '✖️' : '⚡';
      });

      scanBtn.addEventListener('click', () => this.scanNow());
      statsBtn.addEventListener('click', () => this.showFullStats());
      gridBtn.addEventListener('click', () => this.toggleGrid());
      stopBtn.addEventListener('click', () => this.stopBypass());

      // Escape to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.isOpen = false;
          menu.classList.remove('active');
          toggleBtn.innerHTML = '⚡';
        }
      });
    }

    scanNow() {
      const removed = this.engine.removeAllAds();
      this.engine.showToast(`🧹 Scanned & Removed ${removed} ads!`, 'success');
      this.engine.createParticles(20);
      this.updateStats();
    }

    showFullStats() {
      const stats = this.engine.getStats();
      const message = `
╔════════════════════════════════════╗
║   VANZ MEGA BYPASS - FULL STATS    ║
╠════════════════════════════════════╣
║ 🗑️  Ads Removed        : ${String(stats.adsRemoved).padEnd(15)} ║
║ 🛡️  Redirects Blocked  : ${String(stats.redirectsBlocked).padEnd(15)} ║
║ 📡  iFrames Blocked    : ${String(stats.iframesBlocked).padEnd(15)} ║
║ 📊  Fetch Blocked      : ${String(stats.fetchBlocked).padEnd(15)} ║
║ 🔗  XHR Blocked        : ${String(stats.xhrBlocked).padEnd(15)} ║
║ ⏱️  Uptime             : ${String(stats.uptimeSeconds + 's').padEnd(15)} ║
║ 🟢  Status             : ${String(stats.isActive ? 'ACTIVE' : 'INACTIVE').padEnd(15)} ║
╚════════════════════════════════════╝
      `;
      alert(message);
    }

    toggleGrid() {
      if (!this.engine.gridEl) {
        this.engine.gridEl = document.createElement('div');
        this.engine.gridEl.className = 'vanz-mega-grid';
        document.body.appendChild(this.engine.gridEl);
      }
      this.engine.gridEl.classList.toggle('active');
      this.engine.showToast('Grid mode toggled', 'success');
    }

    stopBypass() {
      this.engine.stop();
      this.updateStats();
    }

    updateStats() {
      const stats = this.engine.getStats();
      const adsEl = document.getElementById('vanz-stat-ads');
      const blockedEl = document.getElementById('vanz-stat-blocked');
      const uptimeEl = document.getElementById('vanz-stat-uptime');
      const activeEl = document.getElementById('vanz-stat-active');

      if (adsEl) adsEl.textContent = stats.adsRemoved;
      if (blockedEl) blockedEl.textContent = stats.redirectsBlocked + stats.iframesBlocked + stats.fetchBlocked + stats.xhrBlocked;
      if (uptimeEl) uptimeEl.textContent = stats.uptimeSeconds + 's';
      if (activeEl) activeEl.textContent = stats.isActive ? '✅ ON' : '❌ OFF';
    }

    startAutoUpdate() {
      setInterval(() => this.updateStats(), 500);
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // INITIALIZE EVERYTHING
  // ═══════════════════════════════════════════════════════════════════════════════

  const engine = new VANZ_MEGA_Engine();
  const ui = new VANZ_UI_Controller(engine);

  // Expose to window
  window.VanzMegaBypass = {
    engine: engine,
    start: () => engine.start(),
    stop: () => engine.stop(),
    stats: () => engine.getStats(),
    scan: () => engine.removeAllAds(),
    console: () => console.log(engine.getStats())
  };

  console.log('%c✅ VANZ MEGA BYPASS FULLY LOADED & READY 🔥', 'color: #00ff00; font-size: 16px; font-weight: bold;');
  console.log('%cType window.VanzMegaBypass to access all functions', 'color: #00ffcc; font-size: 12px;');

})();
