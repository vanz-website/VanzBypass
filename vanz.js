(function () {
  "use strict";

  // ─── Konfigurasi URL & Style Hard Dewa Core ──────────────────────────────────
  const CONFIG = {
    r: "https://raw.githubusercontent.com/vanz-website/VanzBypass/main/vanz.txt",
    t: "https://raw.githubusercontent.com/vanz-website/VanzBypass/main/chanel.txt",
    m: "https://raw.githubusercontent.com/vanz-website/VanzBypass/main/music.mp3",
    s: "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);" +
       "background:#060b16;color:#fff;padding:45px 35px;border-radius:16px;z-index:2147483647;" +
       "font-family:'Share Tech Mono',Consolas,'Courier New',monospace;text-align:center;" +
       "box-shadow:0 0 60px rgba(0,255,204,0.25), inset 0 0 30px rgba(0,0,0,0.9);" +
       "border:1px solid #00ffcc;width:350px;box-sizing:border-box;overflow:hidden;" +
       "animation: vanz-heavy-pulse 4s ease-in-out infinite;",
  };

  // ─── Key Manual (Bypass License) ─────────────────────────────────────────────
  const VALID_KEYS = [
    "VANZ VIP PREMIUM",
    "VANZXTP",
    "VANZ VIP",
    "RAMAMODZ", 
  ];

  const FALLBACK_MUSIC_URL = "https://raw.githubusercontent.com/vanz-website/VanzBypass/main/music.mp3";
  let audioPlayer = null;

  // ─── Main IIFE ────────────────────────────────────────────────────────────────
  (async function () {

    // Bersihkan sisa elemen lama jika ada
    document.getElementById("vanz-auth-box")?.remove();
    document.getElementById("vanz-floating-credit")?.remove();

    const titleName    = "VANZ VIP";
    const telegramLink = "https://t.me/stokvanzz12";

    // ── Inject CSS Animasi Mode Dewa (Laser Scan, Hex Orbit, & Glitch Extreme) ─
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
      
      @keyframes vanz-heavy-pulse {
        0%, 100% { border-color: #00ffcc; box-shadow: 0 0 40px rgba(0,255,204,0.2), inset 0 0 20px rgba(0,255,204,0.05); }
        50%      { border-color: #ff0055; box-shadow: 0 0 60px rgba(255,0,85,0.4), inset 0 0 30px rgba(255,0,85,0.1); }
      }
      @keyframes vanz-laser-scan {
        0% { top: 0%; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { top: 100%; opacity: 0; }
      }
      @keyframes vanz-ultra-glitch {
        0% { transform: translate(0) skew(0deg); text-shadow: 2px 0 0 #ff0055, -2px 0 0 #00ffff; }
        10% { transform: translate(-2px, 1px) skew(-3deg); }
        20% { transform: translate(1px, -1px) skew(2deg); text-shadow: -3px 0 0 #ff0055, 3px 0 0 #00ffff; }
        30% { transform: translate(0) skew(0deg); }
        100% { transform: translate(0) skew(0deg); text-shadow: 1px 0 0 #ff0055, -1px 0 0 #00ffff; }
      }
      @keyframes vanz-hex-rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes vanz-hex-reverse {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
      @keyframes vanz-text-pulse {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
      }

      .vanz-dewa-scanner {
        position: absolute; left: 0; width: 100%; height: 4px;
        background: linear-gradient(180deg, transparent, #00ffcc, transparent);
        box-shadow: 0 0 15px #00ffcc, 0 0 30px #00ffcc;
        z-index: 5; pointer-events: none;
        animation: vanz-laser-scan 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }

      .vanz-grid-bg {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background-image: linear-gradient(rgba(0,255,204,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,204,0.03) 1px, transparent 1px);
        background-size: 16px 16px; z-index: 0; pointer-events: none;
      }

      .vanz-clickable-credit {
        position: fixed; bottom: 15px; right: 20px; font-size: 13px; font-weight: bold;
        font-family: 'Share Tech Mono', monospace; letter-spacing: 3px; z-index: 2147483647;
        text-decoration: none; cursor: pointer; color: #00ffcc; text-shadow: 0 0 8px #00ffcc;
        background: rgba(0,0,0,0.7); padding: 6px 12px; border: 1px dashed #00ffcc;
      }

      .vanz-dewa-btn {
        width: 100%; border: 1px solid rgba(0,255,204,0.3); padding: 15px; border-radius: 0px;
        font-weight: bold; cursor: pointer; font-size: 13px; letter-spacing: 3px; margin-bottom: 14px;
        color: #fff; font-family: 'Share Tech Mono', monospace; transition: all 0.2s ease;
        background: rgba(0,0,0,0.6); text-transform: uppercase; position: relative;
      }
      .vanz-dewa-btn::before {
        content: ''; position: absolute; top: 0; left: 0; width: 2px; height: 100%; background: #00ffcc;
        transition: all 0.2s ease;
      }
      .vanz-dewa-btn:hover {
        background: rgba(0,255,204,0.1); border-color: #00ffcc; box-shadow: 0 0 15px rgba(0,255,204,0.3);
        text-shadow: 0 0 5px #00ffcc;
      }
      .vanz-dewa-btn:hover::before { height: 0%; }

      .vanz-mode-btn-dewa {
        width: 100%; border: 1px solid rgba(255,255,255,0.08); padding: 16px;
        font-weight: bold; cursor: pointer; font-size: 13px; letter-spacing: 2px; margin-bottom: 12px;
        color: #fff; font-family: 'Share Tech Mono', monospace; transition: all 0.3s ease;
        background: #040812; text-transform: uppercase; text-align: left;
      }
      .vanz-btn-fast-dewa   { border-right: 4px solid #ff0055; }
      .vanz-btn-fast-dewa:hover   { background: #ff0055; color: #fff; box-shadow: 0 0 25px rgba(255,0,85,0.5); }
      .vanz-btn-secure-dewa { border-right: 4px solid #ffaa00; }
      .vanz-btn-secure-dewa:hover { background: #ffaa00; color: #000; box-shadow: 0 0 25px rgba(255,170,0,0.5); }
      .vanz-btn-safe-dewa   { border-right: 4px solid #00ffcc; }
      .vanz-btn-safe-dewa:hover   { background: #00ffcc; color: #000; box-shadow: 0 0 25px rgba(0,255,204,0.5); }
    `;
    document.head.appendChild(styleEl);

    // ── Floating Credit ───────────────────────────────────────────────────────
    const creditLink     = document.createElement("a");
    creditLink.id        = "vanz-floating-credit";
    creditLink.className = "vanz-clickable-credit";
    creditLink.innerText = "SYS.LOC // VANZXTP";
    creditLink.href      = "https://t.me/ramachanel";
    creditLink.target    = "_blank";
    document.body.appendChild(creditLink);

    // ── Buat Auth Box ─────────────────────────────────────────────────────────
    const authBox         = document.createElement("div");
    authBox.id            = "vanz-auth-box";
    authBox.style.cssText = CONFIG.s;
    authBox.innerHTML     = `
      <div class="vanz-grid-bg"></div>
      <div class="vanz-dewa-scanner"></div>

      <button id="vanz-music-btn" style="
        position:absolute;top:15px;right:15px;
        background:rgba(255,0,85,0.1);border:1px solid #ff0055;
        color:#ff0055;width:28px;height:28px;font-family:'Share Tech Mono',monospace;
        cursor:pointer;font-size:12px;display:flex;align-items:center;
        justify-content:center;transition:all 0.3s ease;z-index:10;outline:none;">LN</button>

      <h3 style="margin:10px 0 2px 0;color:#00ffcc;font-size:28px;letter-spacing:3px;
                 font-weight:900;animation: vanz-ultra-glitch 4s infinite;text-transform:uppercase;position:relative;z-index:2;">
        ${titleName}
      </h3>
      <p style="margin:0 0 35px 0;color:#557094;font-size:11px;letter-spacing:4px;font-weight:bold;position:relative;z-index:2;">
        [ OVERRIDE_CONTRL_PANEL ]
      </p>

      <div style="position:relative; margin-bottom:25px; z-index:2;">
        <input type="text" id="vanz-key-input" placeholder=">> ENTER_MASTER_TOKEN <<" style="
          width:100%;padding:16px;border:1px dashed rgba(0,255,204,0.4);
          background:rgba(0,0,0,0.8);color:#00ffcc;text-align:center;font-family:'Share Tech Mono',monospace;
          box-sizing:border-box;font-size:14px;font-weight:bold;
          letter-spacing:2px;outline:none;transition:all 0.3s ease;box-shadow: inset 0 0 10px rgba(0,255,204,0.1);">
      </div>

      <button id="vanz-login-btn" class="vanz-dewa-btn" style="position:relative; z-index:2;">
        INITIALIZE_INJECTOR
      </button>

      <button id="vanz-telegram-btn" class="vanz-dewa-btn" style="border-color:rgba(34,158,217,0.4); position:relative; z-index:2;">
        SERVER_COMMUNITY
      </button>

      <div id="vanz-status" style="margin-top:25px;font-size:11px;font-weight:bold;
                                   color:#475569;letter-spacing:2px;position:relative;z-index:2;animation: vanz-text-pulse 2s infinite;">
        // CORE STATUS: READY_TO_LOAD
      </div>
    `;
    document.body.appendChild(authBox);

    const musicBtn    = document.getElementById("vanz-music-btn");
    const keyInput    = document.getElementById("vanz-key-input");
    const loginBtn    = document.getElementById("vanz-login-btn");
    const telegramBtn = document.getElementById("vanz-telegram-btn");
    const statusEl    = document.getElementById("vanz-status");

    setTimeout(() => {
      authBox.style.zIndex = "2147483647";
      if (window.innerWidth < 600) {
        authBox.style.width    = "92%";
        authBox.style.maxWidth = "350px";
      }
    }, 10);

    // ── Event: Tombol Musik ───────────────────────────────────────────────────
    let musicLoading = false;
    musicBtn.addEventListener("click", async () => {
      if (musicLoading) return;

      if (!audioPlayer) {
        musicLoading         = true;
        musicBtn.textContent = "??";
        let resolvedUrl      = FALLBACK_MUSIC_URL;
        try {
          const res      = await fetch(CONFIG.m + "?t=" + Date.now());
          const audioUrl = (await res.text()).trim();
          if (audioUrl && audioUrl.startsWith("http")) {
            resolvedUrl = audioUrl;
          }
        } catch (err) {
          console.log("Using fallback music:", err);
        }
        audioPlayer      = new Audio(resolvedUrl);
        audioPlayer.loop = true;
        musicLoading     = false;
      }

      if (audioPlayer.paused) {
        audioPlayer.play()
          .then(() => {
            musicBtn.textContent       = "ON";
            musicBtn.style.color       = "#00ffcc";
            musicBtn.style.borderColor = "#00ffcc";
            musicBtn.style.background  = "rgba(0,255,204,0.1)";
          })
          .catch(err => {
            console.log("Playback blocked:", err);
            musicBtn.textContent = "LN";
          });
      } else {
        audioPlayer.pause();
        musicBtn.textContent       = "LN";
        musicBtn.style.color       = "#ff0055";
        musicBtn.style.borderColor = "#ff0055";
        musicBtn.style.background  = "rgba(255,0,85,0.1)";
      }
    });

    keyInput.addEventListener("focus", () => {
      keyInput.style.borderColor = "#ff0055";
      keyInput.style.boxShadow = "0 0 15px rgba(255,0,85,0.2), inset 0 0 10px rgba(255,0,85,0.1)";
    });
    keyInput.addEventListener("blur", () => {
      keyInput.style.borderColor = "rgba(0,255,204,0.4)";
      keyInput.style.boxShadow = "inset 0 0 10px rgba(0,255,204,0.1)";
    });

    telegramBtn.addEventListener("click", () => {
      if (telegramLink && telegramLink.startsWith("http")) {
        window.open(telegramLink, "_blank");
      }
    });

    // ── Fungsi: Overlay Checking Update + Countdown MODE HARD DEWA ────────────
    function runRedirect(countdownSeconds) {
      authBox.remove();

      const loadingOverlay = document.createElement("div");
      loadingOverlay.style.cssText = `
        position:fixed; top:0; left:0; width:100%; height:100%;
        background:#03060f; z-index:2147483647;
        display:flex; align-items:center; justify-content:center;
        font-family:'Share Tech Mono',monospace;
      `;
      loadingOverlay.innerHTML = `
        <div style="text-align:center; background:#060b16;
                    padding:50px; border-radius:0px;
                    border:2px dashed #ff0055; width:330px;
                    box-shadow: 0 0 40px rgba(255,0,85,0.3); position:relative;">
          <div class="vanz-grid-bg"></div>
          <div style="width:35px; height:35px;
                      border:3px solid transparent;
                      border-left-color: #ff005
