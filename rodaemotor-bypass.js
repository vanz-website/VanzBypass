(function() {
  "use strict";

  // ══════════════════════════════════════���════════════════════════════════════════
  // 🔥 RODAEMOTOR AD BYPASS - CYBERPUNK EDITION 🔥
  // Full Working Skip Ads + Malicious Redirects Blocker
  // ═══════════════════════════════════════════════════════════════════════════════

  const CONFIG = {
    // Target site detection
    targetSite: "rodaemotor.com",
    
    // Ad selectors to block/remove
    adSelectors: [
      '[class*="publicidade"]',
      '[id*="publicidade"]',
      '[class*="ad-"]',
      '[id*="ad-"]',
      '[class*="advertisement"]',
      '[id*="advertisement"]',
      'iframe[src*="doubleclick"]',
      'iframe[src*="googlesyndication"]',
      'iframe[src*="pagead"]',
      '[data-ad-slot]',
      '[data-ad-client]',
      '.adsbygoogle',
      '.ad-container',
      '.advertisement-container',
      'ins.adsbygoogle',
      '[role="region"][aria-label*="Advertisement"]',
      'div[id^="gpt-"]',
      'div[id^="div-gpt-"]'
    ],

    // Malicious redirect domains to block
    blockedDomains: [
      'aincrad.decryptvpn.xyz',
      'aincradmods.com',
      'decryptvpn.xyz',
      'fxpro.com',
      'shortener.at',
      'bit.do',
      'tinyurl.com', // Beware of shortened URLs
      'rebrand.ly'
    ]
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🎨 INJECT CYBERPUNK STYLING
  // ═══════════════════════════════════════════════════════════════════════════════

  const injectStyles = () => {
    const styleEl = document.createElement("style");
    styleEl.id = "vanz-rodaemotor-styles";
    styleEl.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

      @keyframes cyberpunk-glow {
        0%   { box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, inset 0 0 5px rgba(0,255,0,0.2); border-color: #00ff00; }
        25%  { box-shadow: 0 0 15px #00ff88, 0 0 25px #00ff00, inset 0 0 10px rgba(0,255,0,0.4); border-color: #00ff88; }
        50%  { box-shadow: 0 0 25px #00ffff, 0 0 40px #00ff00, inset 0 0 15px rgba(0,255,0,0.5); border-color: #00ffff; }
        75%  { box-shadow: 0 0 15px #00ff88, 0 0 25px #00ff00, inset 0 0 10px rgba(0,255,0,0.4); border-color: #00ff88; }
        100% { box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, inset 0 0 5px rgba(0,255,0,0.2); border-color: #00ff00; }
      }

      @keyframes pulse-ring {
        0%   { transform: scale(1); opacity: 1; }
        100% { transform: scale(1.2); opacity: 0; }
      }

      @keyframes glitch {
        0%   { transform: translate(0); text-shadow: -2px 0 #ff00ff, 2px 2px #00ffff; }
        20%  { transform: translate(-2px, 2px); text-shadow: -2px 0 #ff00ff, 2px 2px #00ffff; }
        40%  { transform: translate(-2px, -2px); text-shadow: -2px 0 #ff00ff, 2px 2px #00ffff; }
        60%  { transform: translate(2px, 2px); text-shadow: -2px 0 #ff00ff, 2px 2px #00ffff; }
        80%  { transform: translate(2px, -2px); text-shadow: -2px 0 #ff00ff, 2px 2px #00ffff; }
        100% { transform: translate(0); text-shadow: -2px 0 #ff00ff, 2px 2px #00ffff; }
      }

      @keyframes scan-line {
        0%   { transform: translateY(0); }
        100% { transform: translateY(100%); }
      }

      @keyframes button-click {
        0%   { transform: scale(1); }
        50%  { transform: scale(0.95); }
        100% { transform: scale(1); }
      }

      @keyframes neon-flicker {
        0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00; }
        20%, 24%, 55% { text-shadow: none; }
      }

      /* Main Control Panel */
      #vanz-rodaemotor-panel {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999999;
        font-family: 'Orbitron', monospace;
      }

      /* Floating Button */
      #vanz-rodaemotor-toggle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00ff00, #00ffff);
        border: 2px solid #00ff00;
        color: #000;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 20px rgba(0,255,0,0.5), inset 0 0 10px rgba(0,255,0,0.3);
        transition: all 0.3s ease;
        animation: cyberpunk-glow 2s ease-in-out infinite;
        font-weight: bold;
      }

      #vanz-rodaemotor-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 0 30px rgba(0,255,0,0.8), inset 0 0 15px rgba(0,255,0,0.5);
      }

      #vanz-rodaemotor-toggle:active {
        animation: button-click 0.3s ease;
      }

      /* Main Menu Container */
      #vanz-rodaemotor-menu {
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 350px;
        max-height: 600px;
        background: linear-gradient(135deg, rgba(0,10,20,0.95), rgba(0,30,40,0.95));
        border: 2px solid #00ff00;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 0 40px rgba(0,255,0,0.4), inset 0 0 20px rgba(0,255,0,0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: none;
        flex-direction: column;
        gap: 12px;
        animation: cyberpunk-glow 3s ease-in-out infinite;
        z-index: 999998;
        overflow-y: auto;
      }

      #vanz-rodaemotor-menu.active {
        display: flex;
      }

      #vanz-rodaemotor-menu::-webkit-scrollbar {
        width: 6px;
      }

      #vanz-rodaemotor-menu::-webkit-scrollbar-track {
        background: rgba(0,255,0,0.1);
        border-radius: 10px;
      }

      #vanz-rodaemotor-menu::-webkit-scrollbar-thumb {
        background: #00ff00;
        border-radius: 10px;
      }

      #vanz-rodaemotor-menu::-webkit-scrollbar-thumb:hover {
        background: #00ffff;
      }

      /* Title */
      .vanz-menu-title {
        color: #00ff00;
        font-size: 18px;
        font-weight: 900;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-shadow: 0 0 10px rgba(0,255,0,0.5);
        margin-bottom: 5px;
        animation: glitch 0.3s ease;
      }

      .vanz-menu-subtitle {
        color: #00ffff;
        font-size: 10px;
        text-align: center;
        letter-spacing: 1px;
        opacity: 0.8;
        margin-bottom: 15px;
        text-transform: uppercase;
      }

      /* Status Display */
      .vanz-status-display {
        background: rgba(0,255,0,0.05);
        border: 1px solid #00ff00;
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        color: #00ff00;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 10px;
      }

      .vanz-status-display.success {
        background: rgba(0,255,0,0.1);
        border-color: #00ff00;
        box-shadow: inset 0 0 10px rgba(0,255,0,0.1);
      }

      .vanz-status-display.warning {
        background: rgba(255,200,0,0.1);
        border-color: #ffcc00;
        color: #ffcc00;
      }

      .vanz-status-display.error {
        background: rgba(255,0,0,0.1);
        border-color: #ff0000;
        color: #ff0000;
      }

      /* Buttons */
      .vanz-btn {
        padding: 12px;
        border: 2px solid #00ff00;
        background: linear-gradient(135deg, rgba(0,255,0,0.1), rgba(0,255,0,0.05));
        color: #00ff00;
        font-family: 'Orbitron', monospace;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        text-shadow: 0 0 5px rgba(0,255,0,0.3);
      }

      .vanz-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0,255,0,0.3), transparent);
        transition: left 0.5s;
      }

      .vanz-btn:hover::before {
        left: 100%;
      }

      .vanz-btn:hover {
        background: linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,255,0,0.15));
        box-shadow: 0 0 15px rgba(0,255,0,0.4), inset 0 0 10px rgba(0,255,0,0.2);
        transform: translateY(-2px);
      }

      .vanz-btn:active {
        animation: button-click 0.2s ease;
        box-shadow: 0 0 25px rgba(0,255,0,0.6);
      }

      .vanz-btn.danger {
        border-color: #ff0000;
        color: #ff0000;
        text-shadow: 0 0 5px rgba(255,0,0,0.3);
      }

      .vanz-btn.danger:hover {
        background: linear-gradient(135deg, rgba(255,0,0,0.2), rgba(255,0,0,0.15));
        box-shadow: 0 0 15px rgba(255,0,0,0.4);
      }

      .vanz-btn.secondary {
        border-color: #00ffff;
        color: #00ffff;
        text-shadow: 0 0 5px rgba(0,255,255,0.3);
      }

      .vanz-btn.secondary:hover {
        background: linear-gradient(135deg, rgba(0,255,255,0.2), rgba(0,255,255,0.15));
        box-shadow: 0 0 15px rgba(0,255,255,0.4);
      }

      /* Stats */
      .vanz-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-bottom: 10px;
      }

      .vanz-stat-item {
        background: rgba(0,255,0,0.05);
        border: 1px solid rgba(0,255,0,0.3);
        border-radius: 5px;
        padding: 8px;
        text-align: center;
        font-size: 10px;
      }

      .vanz-stat-label {
        color: #00ffff;
        font-size: 9px;
        letter-spacing: 1px;
        text-transform: uppercase;
        opacity: 0.7;
      }

      .vanz-stat-value {
        color: #00ff00;
        font-size: 16px;
        font-weight: 900;
        margin-top: 3px;
        text-shadow: 0 0 8px rgba(0,255,0,0.3);
      }

      /* Divider */
      .vanz-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, #00ff00, transparent);
        margin: 8px 0;
        opacity: 0.5;
      }

      /* Loading Animation */
      .vanz-loading {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #00ff00;
        border-radius: 50%;
        animation: pulse-ring 1.5s ease-in-out infinite;
        margin-right: 5px;
      }

      /* Scan Effect */
      .vanz-scan-effect {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 999997;
        display: none;
      }

      .vanz-scan-effect.active {
        display: block;
      }

      .vanz-scan-line {
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ff00, transparent);
        animation: scan-line 2s linear infinite;
      }

      /* Grid Background */
      .vanz-grid-bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 999996;
        background-image: 
          linear-gradient(0deg, transparent 24%, rgba(0,255,0,0.05) 25%, rgba(0,255,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.05) 75%, rgba(0,255,0,0.05) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0,255,0,0.05) 25%, rgba(0,255,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.05) 75%, rgba(0,255,0,0.05) 76%, transparent 77%, transparent);
        background-size: 50px 50px;
        display: none;
      }

      .vanz-grid-bg.active {
        display: block;
      }

      /* Notification Toast */
      .vanz-toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0,10,20,0.95);
        border: 2px solid #00ff00;
        border-radius: 5px;
        padding: 15px 20px;
        color: #00ff00;
        font-family: 'Orbitron', monospace;
        font-size: 12px;
        font-weight: 700;
        z-index: 9999999;
        animation: slideInRight 0.5s ease-out;
        box-shadow: 0 0 20px rgba(0,255,0,0.3);
        max-width: 300px;
      }

      .vanz-toast.success { border-color: #00ff00; color: #00ff00; }
      .vanz-toast.warning { border-color: #ffcc00; color: #ffcc00; }
      .vanz-toast.error { border-color: #ff0000; color: #ff0000; }

      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }

      .vanz-toast.exit {
        animation: slideOutRight 0.5s ease-in forwards;
      }
    `;
    document.head.appendChild(styleEl);
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🎮 MAIN BYPASS ENGINE
  // ═══════════════════════════════════════════════════════════════════════════════

  class Rodaemotor BypassEngine {
    constructor() {
      this.stats = {
        adsRemoved: 0,
        redirectsBlocked: 0,
        iframesBlocked: 0,
        scriptsBlocked: 0,
        isActive: false
      };
      this.observers = [];
    }

    // Toast notification
    showToast(message, type = 'success') {
      const toast = document.createElement('div');
      toast.className = `vanz-toast ${type}`;
      toast.textContent = message;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('exit');
        setTimeout(() => toast.remove(), 500);
      }, 3000);
    }

    // Block malicious redirects
    blockRedirects() {
      const origOpen = window.open;
      const origLocation = window.location;

      window.open = (...args) => {
        const url = args[0] || '';
        if (this.isMaliciousURL(url)) {
          this.stats.redirectsBlocked++;
          this.showToast(`🛡️ Blocked redirect: ${url.substring(0, 30)}...`, 'warning');
          return null;
        }
        return origOpen.apply(window, args);
      };

      // Block location changes
      Object.defineProperty(window, 'location', {
        get: () => origLocation,
        set: (value) => {
          if (!this.isMaliciousURL(value)) {
            origLocation = value;
          } else {
            this.stats.redirectsBlocked++;
            this.showToast(`🛡️ Redirect blocked!`, 'warning');
          }
        }
      });
    }

    // Check if URL is malicious
    isMaliciousURL(url) {
      const urlStr = url.toString().toLowerCase();
      return CONFIG.blockedDomains.some(domain => urlStr.includes(domain));
    }

    // Remove ad elements
    removeAds() {
      CONFIG.adSelectors.forEach(selector => {
        try {
          document.querySelectorAll(selector).forEach(el => {
            if (el && el.offsetParent !== null) { // Check if visible
              el.remove();
              this.stats.adsRemoved++;
            }
          });
        } catch (e) {
          // Skip invalid selectors
        }
      });
    }

    // Block ad scripts
    blockAdScripts() {
      const origScript = HTMLScriptElement.prototype.appendChild;
      HTMLScriptElement.prototype.appendChild = function(child) {
        const src = child.src || child.textContent;
        if (src.includes('doubleclick') || src.includes('googlesyndication') || src.includes('pagead')) {
          this.stats.scriptsBlocked++;
          return child;
        }
        return origScript.call(this, child);
      };
    }

    // Block ad iframes
    blockAdIframes() {
      const origCreateElement = document.createElement;
      document.createElement = function(tagName) {
        const element = origCreateElement.call(document, tagName);
        if (tagName.toLowerCase() === 'iframe') {
          const origSetAttribute = element.setAttribute;
          element.setAttribute = function(name, value) {
            if (name === 'src' && (value.includes('doubleclick') || value.includes('googlesyndication'))) {
              this.stats.iframesBlocked++;
              return;
            }
            return origSetAttribute.call(this, name, value);
          };
        }
        return element;
      };
    }

    // Intercept fetch requests
    blockFetchRequests() {
      const originalFetch = window.fetch;
      window.fetch = function(...args) {
        const url = args[0]?.toString() || '';

        if (url.includes('doubleclick') || url.includes('googlesyndication') || url.includes('pagead')) {
          this.stats.scriptsBlocked++;
          return Promise.resolve(new Response('', { status: 204 }));
        }

        return originalFetch.apply(window, args);
      };
    }

    // Intercept XHR requests
    blockXHRRequests() {
      const originalOpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function(method, url, ...rest) {
        if (url.includes('doubleclick') || url.includes('googlesyndication')) {
          this.stats.scriptsBlocked++;
          return;
        }
        return originalOpen.apply(this, [method, url, ...rest]);
      };
    }

    // Setup MutationObserver untuk continuous blocking
    setupMutationObserver() {
      const observer = new MutationObserver(() => {
        this.removeAds();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src', 'id', 'class']
      });

      this.observers.push(observer);
    }

    // Start bypass
    start() {
      if (this.stats.isActive) return;

      this.stats.isActive = true;
      this.stats.adsRemoved = 0;
      this.stats.redirectsBlocked = 0;
      this.stats.iframesBlocked = 0;
      this.stats.scriptsBlocked = 0;

      this.removeAds();
      this.blockRedirects();
      this.blockAdScripts();
      this.blockAdIframes();
      this.blockFetchRequests();
      this.blockXHRRequests();
      this.setupMutationObserver();

      this.showToast('✅ BYPASS ACTIVATED - CLEAN BROWSING MODE ENABLED', 'success');
    }

    // Stop bypass
    stop() {
      if (!this.stats.isActive) return;

      this.stats.isActive = false;
      this.observers.forEach(obs => obs.disconnect());
      this.observers = [];

      this.showToast('❌ Bypass deactivated', 'warning');
    }

    // Get stats
    getStats() {
      return { ...this.stats };
    }
  }

  // ═════════════���═════════════════════════════════════════════════════════════════
  // 🎯 UI CONTROLLER
  // ═══════════════════════════════════════════════════════════════════════════════

  class UIController {
    constructor(engine) {
      this.engine = engine;
      this.isOpen = false;
      this.init();
    }

    init() {
      // Check if already injected
      if (document.getElementById('vanz-rodaemotor-panel')) return;

      // Inject styles
      injectStyles();

      // Create UI
      this.createUI();
      this.attachEvents();

      // Auto-start on load
      setTimeout(() => this.startBypass(), 500);
    }

    createUI() {
      // Panel container
      const panel = document.createElement('div');
      panel.id = 'vanz-rodaemotor-panel';

      // Toggle button
      const toggleBtn = document.createElement('button');
      toggleBtn.id = 'vanz-rodaemotor-toggle';
      toggleBtn.innerHTML = '⚡';
      toggleBtn.title = 'Rodaemotor Bypass';

      // Menu
      const menu = document.createElement('div');
      menu.id = 'vanz-rodaemotor-menu';

      menu.innerHTML = `
        <div class="vanz-menu-title">⚔️ RODAEMOTOR</div>
        <div class="vanz-menu-subtitle">CYBERPUNK BYPASS v1.0</div>

        <div class="vanz-status-display success">
          🟢 STATUS: OPERATIONAL
        </div>

        <div class="vanz-stats">
          <div class="vanz-stat-item">
            <div class="vanz-stat-label">Ads Removed</div>
            <div class="vanz-stat-value" id="vanz-stat-ads">0</div>
          </div>
          <div class="vanz-stat-item">
            <div class="vanz-stat-label">Blocked</div>
            <div class="vanz-stat-value" id="vanz-stat-blocked">0</div>
          </div>
        </div>

        <div class="vanz-divider"></div>

        <button class="vanz-btn" id="vanz-btn-activate">
          ▶️ START CLEAN MODE
        </button>

        <button class="vanz-btn secondary" id="vanz-btn-scan">
          🔍 SCAN & REMOVE NOW
        </button>

        <button class="vanz-btn secondary" id="vanz-btn-stats">
          📊 SHOW FULL STATS
        </button>

        <div class="vanz-divider"></div>

        <button class="vanz-btn danger" id="vanz-btn-stop">
          ⏹️ DEACTIVATE
        </button>

        <div style="text-align: center; margin-top: 10px; font-size: 9px; color: #00ffff; letter-spacing: 1px;">
          © VANZXTP TEAM
        </div>
      `;

      panel.appendChild(toggleBtn);
      panel.appendChild(menu);
      document.body.appendChild(panel);
    }

    attachEvents() {
      const toggleBtn = document.getElementById('vanz-rodaemotor-toggle');
      const menu = document.getElementById('vanz-rodaemotor-menu');
      const activateBtn = document.getElementById('vanz-btn-activate');
      const scanBtn = document.getElementById('vanz-btn-scan');
      const statsBtn = document.getElementById('vanz-btn-stats');
      const stopBtn = document.getElementById('vanz-btn-stop');

      toggleBtn.addEventListener('click', () => {
        this.isOpen = !this.isOpen;
        menu.classList.toggle('active');
        toggleBtn.innerHTML = this.isOpen ? '✖️' : '⚡';
      });

      activateBtn.addEventListener('click', () => this.startBypass());
      scanBtn.addEventListener('click', () => this.scanAndRemove());
      statsBtn.addEventListener('click', () => this.showStats());
      stopBtn.addEventListener('click', () => this.stopBypass());

      // Close menu on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.isOpen = false;
          menu.classList.remove('active');
          toggleBtn.innerHTML = '⚡';
        }
      });

      // Update stats every second
      setInterval(() => this.updateStatsDisplay(), 1000);
    }

    startBypass() {
      this.engine.start();
      this.updateStatsDisplay();
    }

    stopBypass() {
      this.engine.stop();
      this.updateStatsDisplay();
    }

    scanAndRemove() {
      this.engine.removeAds();
      this.engine.showToast('🧹 Scan complete! Ads removed.', 'success');
      this.updateStatsDisplay();
    }

    showStats() {
      const stats = this.engine.getStats();
      const msg = `
📊 BYPASS STATS:
├─ Ads Removed: ${stats.adsRemoved}
├─ Redirects Blocked: ${stats.redirectsBlocked}
├─ iFrames Blocked: ${stats.iframesBlocked}
├─ Scripts Blocked: ${stats.scriptsBlocked}
└─ Status: ${stats.isActive ? '✅ ACTIVE' : '❌ INACTIVE'}
      `.trim();
      alert(msg);
    }

    updateStatsDisplay() {
      const stats = this.engine.getStats();
      const adsEl = document.getElementById('vanz-stat-ads');
      const blockedEl = document.getElementById('vanz-stat-blocked');

      if (adsEl) adsEl.textContent = stats.adsRemoved;
      if (blockedEl) blockedEl.textContent = stats.redirectsBlocked + stats.iframesBlocked + stats.scriptsBlocked;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🚀 INIT
  // ═══════════════════════════════════════════════════════════════════════════════

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const engine = new RodaemotorBypassEngine();
      const ui = new UIController(engine);
    });
  } else {
    const engine = new RodaemotorBypassEngine();
    const ui = new UIController(engine);
  }

})();
