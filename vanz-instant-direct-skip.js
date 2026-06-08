javascript:(function() {
  "use strict";

  console.log('%c🔥 VANZ INSTANT SKIP BYPASS - DIRECT TO RODAEMOTOR 🔥', 'color: #00ff00; font-size: 18px; font-weight: bold; text-shadow: 0 0 10px #00ff00;');

  // ═══════════════════════════════════════════════════════════════════════════════
  // INJECT CYBERPUNK STYLES
  // ═══════════════════════════════════════════════════════════════════════════════

  const injectStyles = () => {
    if (document.getElementById('vanz-instant-styles')) return;

    const style = document.createElement('style');
    style.id = 'vanz-instant-styles';
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

      @keyframes instant-glow {
        0%, 100% { box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00; }
        50% { box-shadow: 0 0 30px #00ffff, 0 0 50px #00ff00; }
      }

      @keyframes counter-pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }

      @keyframes redirect-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes slide-in-down {
        from { transform: translateY(-150%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      /* Overlay fullscreen */
      #vanz-instant-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(0,10,30,0.98), rgba(0,30,60,0.98));
        z-index: 9999999999;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      /* Main container */
      #vanz-instant-container {
        text-align: center;
        background: linear-gradient(135deg, rgba(0,20,40,0.95), rgba(0,40,80,0.95));
        border: 3px solid #00ff00;
        border-radius: 20px;
        padding: 50px;
        max-width: 500px;
        box-shadow: 0 0 80px rgba(0,255,0,0.8), inset 0 0 40px rgba(0,255,0,0.2);
        animation: slide-in-down 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        overflow: hidden;
      }

      #vanz-instant-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(0,255,0,0.1), transparent);
        animation: redirect-spin 3s linear infinite;
        pointer-events: none;
      }

      /* Title */
      .vanz-instant-title {
        font-size: 28px;
        font-weight: 900;
        color: #00ff00;
        letter-spacing: 2px;
        text-shadow: 0 0 20px rgba(0,255,0,0.8), 0 0 40px rgba(0,255,0,0.3);
        margin-bottom: 20px;
        font-family: 'Orbitron', monospace;
        text-transform: uppercase;
        position: relative;
        z-index: 2;
      }

      /* Status text */
      .vanz-instant-status {
        font-size: 16px;
        color: #00ffcc;
        margin-bottom: 30px;
        font-family: 'Orbitron', monospace;
        letter-spacing: 1.5px;
        position: relative;
        z-index: 2;
      }

      /* Spinner */
      .vanz-instant-spinner {
        width: 80px;
        height: 80px;
        margin: 0 auto 30px;
        position: relative;
        z-index: 2;
      }

      .vanz-spinner-ring {
        width: 80px;
        height: 80px;
        border: 4px solid rgba(0,255,0,0.2);
        border-top: 4px solid #00ff00;
        border-right: 4px solid #00ffcc;
        border-radius: 50%;
        animation: redirect-spin 1.2s linear infinite;
        box-shadow: 0 0 20px rgba(0,255,0,0.6);
      }

      /* Counter display */
      .vanz-instant-counter {
        font-size: 48px;
        font-weight: 900;
        color: #ff00ff;
        text-shadow: 0 0 20px #ff00ff, 0 0 40px #00ffff;
        animation: counter-pulse 1s ease-in-out infinite;
        font-family: 'Orbitron', monospace;
        margin: 20px 0;
        letter-spacing: 2px;
        position: relative;
        z-index: 2;
      }

      /* Info text */
      .vanz-instant-info {
        font-size: 13px;
        color: #00ff00;
        line-height: 1.8;
        margin-top: 20px;
        font-family: monospace;
        position: relative;
        z-index: 2;
      }

      .vanz-instant-info-row {
        margin: 8px 0;
        letter-spacing: 0.5px;
      }

      .vanz-instant-info-row.active {
        color: #00ffcc;
        font-weight: bold;
      }

      /* Progress bar */
      .vanz-instant-progress {
        width: 100%;
        height: 8px;
        background: rgba(0,255,0,0.2);
        border-radius: 10px;
        margin-top: 30px;
        overflow: hidden;
        border: 1px solid #00ff00;
        box-shadow: inset 0 0 10px rgba(0,255,0,0.1);
        position: relative;
        z-index: 2;
      }

      .vanz-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #00ff00, #00ffcc, #00ff00);
        border-radius: 10px;
        width: 0%;
        animation: progress-fill 5s linear forwards;
        box-shadow: 0 0 10px #00ff00;
      }

      @keyframes progress-fill {
        0% { width: 0%; }
        100% { width: 100%; }
      }

      /* Toast notification */
      .vanz-instant-toast {
        position: fixed;
        top: 30px;
        right: 30px;
        background: linear-gradient(135deg, rgba(0,20,40,0.95), rgba(0,40,80,0.95));
        border: 2px solid #00ff00;
        border-radius: 10px;
        padding: 20px 30px;
        color: #00ff00;
        font-family: 'Orbitron', monospace;
        font-size: 12px;
        font-weight: 700;
        z-index: 99999999999;
        animation: slide-in-down 0.6s ease-out;
        box-shadow: 0 0 30px rgba(0,255,0,0.6);
        letter-spacing: 1px;
      }

      /* Grid background */
      .vanz-instant-grid {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
          linear-gradient(0deg, transparent 24%, rgba(0,255,0,0.08) 25%, rgba(0,255,0,0.08) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.08) 75%, rgba(0,255,0,0.08) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0,255,0,0.08) 25%, rgba(0,255,0,0.08) 26%, transparent 27%, transparent 74%, rgba(0,255,0,0.08) 75%, rgba(0,255,0,0.08) 76%, transparent 77%, transparent);
        background-size: 40px 40px;
        pointer-events: none;
        z-index: 1;
      }

      /* Hide original page */
      body.vanz-instant-hidden {
        overflow: hidden;
      }

      body.vanz-instant-hidden * {
        visibility: hidden;
      }

      #vanz-instant-overlay * {
        visibility: visible;
      }
    `;
    document.head.appendChild(style);
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // MAIN INSTANT BYPASS ENGINE
  // ═══════════════════════════════════════════════════════════════════════════════

  class InstantSkipBypass {
    constructor() {
      this.currentSite = this.detectSite();
      this.countdownSeconds = 5;
      this.isProcessing = false;
    }

    // Detect current site
    detectSite() {
      const url = window.location.href.toLowerCase();
      if (url.includes('aincradmods.com')) return 'aincrad';
      if (url.includes('rodaemotor.com')) return 'rodaemotor';
      return 'unknown';
    }

    // Show toast
    showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'vanz-instant-toast';
      toast.innerHTML = `✅ ${message}`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }

    // Skip all ads on current page
    skipAds() {
      const adSelectors = [
        '[class*="ad-"]', '[id*="ad-"]', '[class*="ads"]', '[id*="ads"]',
        '[class*="advertisement"]', '[id*="advertisement"]',
        '[class*="popup"]', '[id*="popup"]', '[class*="modal"]', '[id*="modal"]',
        '[class*="overlay"]', '[id*="overlay"]', '[class*="survey"]', '[id*="survey"]',
        '[class*="captcha"]', '[id*="captcha"]', '[class*="banner"]', '[id*="banner"]',
        '[class*="publicidade"]', '[id*="publicidade"]',
        'iframe[src*="doubleclick"]', 'iframe[src*="googlesyndication"]',
        'iframe[src*="pagead"]', '.adsbygoogle', 'ins.adsbygoogle',
        '[data-ad-slot]', '[data-ad-client]',
        'video[src*="ad"]', '[class*="video-ad"]',
        'iframe[src*="short"]', 'iframe[src*="link"]',
        '[class*="redirect"]', 'div[role="dialog"]', '.swal2-container'
      ];

      let removed = 0;
      adSelectors.forEach(selector => {
        try {
          document.querySelectorAll(selector).forEach(el => {
            if (el && el.parentElement) {
              el.remove();
              removed++;
            }
          });
        } catch (e) {}
      });

      return removed;
    }

    // Block redirects and tracking
    blockMalicious() {
      const origOpen = window.open;
      window.open = (...args) => {
        const url = args[0] || '';
        if (url.includes('track') || url.includes('redirect') || url.includes('short')) {
          return null;
        }
        return origOpen.apply(window, args);
      };

      const origFetch = window.fetch;
      window.fetch = (...args) => {
        const url = args[0]?.toString() || '';
        if (url.includes('ads') || url.includes('track')) {
          return Promise.resolve(new Response('', { status: 204 }));
        }
        return origFetch.apply(window, args);
      };
    }

    // Create processing overlay
    createOverlay() {
      const overlay = document.createElement('div');
      overlay.id = 'vanz-instant-overlay';

      overlay.innerHTML = `
        <div class="vanz-instant-grid"></div>
        <div id="vanz-instant-container">
          <div class="vanz-instant-title">
            ⚡ INSTANT BYPASS ⚡
          </div>
          
          <div class="vanz-instant-status">
            🎯 PROCESSING & SKIPPING ALL ADS...
          </div>

          <div class="vanz-instant-spinner">
            <div class="vanz-spinner-ring"></div>
          </div>

          <div class="vanz-instant-counter" id="vanz-counter">5</div>

          <div class="vanz-instant-progress">
            <div class="vanz-progress-bar"></div>
          </div>

          <div class="vanz-instant-info">
            <div class="vanz-instant-info-row">🔥 Step 1: Scanning site...</div>
            <div class="vanz-instant-info-row">🗑️ Step 2: Removing all ads...</div>
            <div class="vanz-instant-info-row">🛡️ Step 3: Blocking redirects...</div>
            <div class="vanz-instant-info-row active">🚀 Step 4: Redirecting to RODAEMOTOR...</div>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);
      document.body.classList.add('vanz-instant-hidden');
      return overlay;
    }

    // Countdown and redirect
    startCountdown(callback) {
      const counterEl = document.getElementById('vanz-counter');
      let count = this.countdownSeconds;

      counterEl.textContent = count;

      const timer = setInterval(() => {
        count--;
        counterEl.textContent = count;

        if (count <= 0) {
          clearInterval(timer);
          callback();
        }
      }, 1000);
    }

    // Redirect to rodaemotor
    redirectToRodaemotor() {
      console.log('🚀 Redirecting to RODAEMOTOR...');
      window.location.replace('https://rodaemotor.com');
    }

    // Main execution
    execute() {
      if (this.isProcessing) return;
      this.isProcessing = true;

      console.log('✅ INSTANT BYPASS STARTING');
      console.log('📍 Current site:', this.currentSite);

      // Inject styles
      injectStyles();

      // Skip ads immediately
      const removed = this.skipAds();
      console.log(`🗑️ Removed ${removed} ad elements`);

      // Block malicious requests
      this.blockMalicious();
      console.log('🛡️ Blocking malicious requests');

      // Create overlay
      this.createOverlay();

      // Start countdown
      this.startCountdown(() => {
        this.showToast('🚀 REDIRECTING TO RODAEMOTOR...');
        this.redirectToRodaemotor();
      });

      console.log('🟢 BYPASS PROCESSING COMPLETE - REDIRECTING IN 5 SECONDS');
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // EXECUTE BYPASS
  // ═══════════════════════════════════════════════════════════════════════════════

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const bypass = new InstantSkipBypass();
      bypass.execute();
    });
  } else {
    const bypass = new InstantSkipBypass();
    bypass.execute();
  }

})();
