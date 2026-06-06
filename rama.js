(function () {
  "use strict";

  // ─── Konfigurasi URL & Style (Repository VanzXTP) ───────────────────────────
  const CONFIG = {
    r: "https://raw.githubusercontent.com/vanz-website/VanzBypass/main/vanz.txt",
    t: "https://raw.githubusercontent.com/vanz-website/VanzBypass/main/chanel.txt",
    m: "https://raw.githubusercontent.com/vanz-website/VanzBypass/main/music.mp3",
    s: "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);" +
       "background:rgba(4,6,14,0.96);backdrop-filter:blur(16px);" +
       "-webkit-backdrop-filter:blur(16px);color:#fff;padding:35px 25px;" +
       "border-radius:4px;z-index:2147483647;" +
       'font-family:"Courier New",Courier,monospace;' +
       "text-align:center;box-shadow:0 0 40px rgba(0,255,204,0.15), inset 0 0 20px rgba(0,255,204,0.05);" +
       "border-left:4px solid #00ffcc;border-right:4px solid #ff0055;width:320px;box-sizing:border-box;" +
       "animation: vanz-cyber-pulse 4s infinite ease-in-out;",
  };

  // ─── Key Manual ───────────────────────────────────────────────────────────────
  const VALID_KEYS = ["RAMA MODZ", "RAMAMODZ", "RAMA MODS", "RAMAMODS"];
  const FALLBACK_MUSIC_URL = "https://raw.githubusercontent.com/yuhb8756-lab/RAMA-MODZ-MUSIC/main/music.mp3";
  let audioPlayer = null;

  // ─── Main Execution ───────────────────────────────────────────────────────────
  (function () {
    // Bersihkan elemen duplikat
    document.getElementById("rama-auth-box")?.remove();
    document.getElementById("rama-floating-credit")?.remove();

    const titleName    = "VANZ XTP";
    const telegramLink = "https://t.me/ramachanel";

    // ── Inject CSS Animasi Interface ──────────────────────────────────────────
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @keyframes vanz-cyber-pulse {
        0%, 100% { box-shadow: 0 0 30px rgba(0,255,204,0.2), inset 0 0 15px rgba(0,255,204,0.05); }
        50% { box-shadow: 0 0 50px rgba(255,0,85,0.25), inset 0 0 25px rgba(255,0,85,0.05); }
      }
      @keyframes vanz-glitch-text {
        0% { text-shadow: 2px -1px 0 #ff0055, -1px 2px 0 #00ffcc; }
        10% { text-shadow: -2px 1px 0 #ff0055, 2px -2px 0 #00ffcc; }
        20% { text-shadow: 1px -2px 0 #ff0055, -2px 1px 0 #00ffcc; }
        30%, 100% { text-shadow: none; }
      }
      @keyframes rama-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes rama-fire-spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
      @keyframes vanz-terminal-glow {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }

      .vanz-terminal-input {
        width: 100%; padding: 12px; margin-bottom: 16px;
        border: 1px solid rgba(0,255,204,0.3); border-radius: 2px;
        background: rgba(2,4,10,0.9); color: #00ffcc; text-align: center;
        box-sizing: border-box; font-size: 13px; font-weight: bold;
        letter-spacing: 2px; outline: none; font-family: "Courier New", monospace;
        transition: all 0.3s ease;
      }
      .vanz-terminal-input:focus {
        border: 1px solid #ff0055;
        box-shadow: 0 0 15px rgba(255,0,85,0.4);
        color: #ff0055;
      }

      .vanz-cyber-btn {
        width: 100%; border: none; padding: 13px; font-weight: bold;
        cursor: pointer; font-size: 13px; letter-spacing: 2px; margin-bottom: 12px;
        font-family: "Courier New", monospace; text-transform: uppercase;
        transition: all 0.3s ease; clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
      }
      .vanz-btn-verify { background: #00ffcc; color: #000; }
      .vanz-btn-verify:hover { background: #fff; box-shadow: 0 0 20px #fff; }
      
      .vanz-btn-tg { background: #ff0055; color: #fff; }
      .vanz-btn-tg:hover { background: #fff; color: #000; box-shadow: 0 0 20px #ff0055; }

      .rama-mode-btn {
        width: 100%; border: 1px solid rgba(255,255,255,0.1); padding: 12px;
        font-weight: bold; cursor: pointer; font-size: 12px; letter-spacing: 1.5px;
        margin-bottom: 12px; color: #fff; font-family: "Courier New", monospace;
        transition: all 0.3s ease; text-transform: uppercase; background: rgba(255,255,255,0.03);
      }
      .rama-btn-fast   { border-left: 4px solid #00ff96; }
      .rama-btn-fast:hover   { background: #00ff96; color: #000; box-shadow: 0 0 15px #00ff96; }
      .rama-btn-secure { border-left: 4px solid #ffaa00; }
      .rama-btn-secure:hover { background: #ffaa00; color: #000; box-shadow: 0 0 15px #ffaa00; }
      .rama-btn-safe   { border-left: 4px solid #00ccff; }
      .rama-btn-safe:hover   { background: #00ccff; color: #000; box-shadow: 0 0 15px #00ccff; }

      .rama-clickable-credit {
        position: fixed; bottom: 14px; right: 20px; font-size: 14px; font-weight: bold;
        font-family: "Courier New", monospace; letter-spacing: 2px; z-index: 2147483647;
        text-decoration: none; cursor: pointer; color: #ff0055;
        text-shadow: 0 0 5px #ff0055; animation: vanz-terminal-glow 2s infinite;
      }
      .rama-clickable-credit:hover { color: #00ffcc; text-shadow: 0 0 10px #00ffcc; }
    `;
    document.head.appendChild(styleEl);

    // ── Floating Credit ───────────────────────────────────────────────────────
    const creditLink     = document.createElement("a");
    creditLink.id        = "rama-floating-credit";
    creditLink.className = "rama-clickable-credit";
    creditLink.innerText = "[ BY VANZ XTP ]";
    creditLink.href      = telegramLink;
    creditLink.target    = "_blank";
    document.body.appendChild(creditLink);

    // ── Buat Main Container ───────────────────────────────────────────────────
    const authBox         = document.createElement("div");
    authBox.id            = "rama-auth-box";
    authBox.style.cssText = CONFIG.s;
    
    const scanline = document.createElement("div");
    scanline.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,0.25) 50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06));background-size:100% 4px,6px 100%;z-index:11;pointer-events:none;overflow:hidden;border-radius:4px;";
    authBox.appendChild(scanline);

    authBox.innerHTML += `
      <button id="rama-music-btn" style="
        position:absolute;top:15px;right:15px;
        background:rgba(0,0,0,0.6);border:1px solid rgba(0,255,204,0.3);
        color:#ff0055;border-radius:2px;width:30px;height:30px;
        cursor:pointer;font-size:12px;display:flex;align-items:center;
        justify-content:center;box-shadow:0 0 5px rgba(0,0,0,0.5);
        transition:all 0.3s ease;z-index:12;font-family:monospace;">STATION_OFF</button>

      <h3 style="margin:0 0 4px 0;color:#00ffcc;font-size:22px;letter-spacing:2px;
                 font-weight:900;text-transform:uppercase;animation: vanz-glitch-text 3s infinite; position:relative; z-index:12;">
        ${titleName}
      </h3>
      <p style="margin:0 0 25px 0;color:#64748b;font-size:10px;letter-spacing:3px;font-weight:bold;position:relative; z-index:12;">
        SYS.ACCESS_CONTROL v4.0
      </p>

      <div style="position:relative; z-index:12;">
        <input type="text" id="rama-key-input" class="vanz-terminal-input" placeholder=">> ENTER SECRET_KEY">
      </div>

      <div style="position:relative; z-index:12;">
        <button id="rama-login-btn" class="vanz-cyber-btn vanz-btn-verify">EXECUTE VERIFY</button>
        <button id="rama-telegram-btn" class="vanz-cyber-btn vanz-btn-tg">SERVER_TELEGRAM</button>
      </div>

      <div id="rama-status" style="margin-top:20px;font-size:11px;font-weight:bold;
                                   color:#64748b;letter-spacing:2px;font-family:monospace;position:relative; z-index:12;">
        STATUS: READY_TO_RUN
      </div>
    `;
    document.body.appendChild(authBox);

    // ── Referensi Elemen ──────────────────────────────────────────────────────
    const musicBtn    = document.getElementById("rama-music-btn");
    const keyInput    = document.getElementById("rama-key-input");
    const loginBtn    = document.getElementById("rama-login-btn");
    const telegramBtn = document.getElementById("rama-telegram-btn");
    const statusEl    = document.getElementById("rama-status");

    // Penyesuaian Dimensi Layar HP
    setTimeout(() => {
      authBox.style.zIndex = "2147483647";
      if (window.innerWidth < 600) {
        authBox.style.width    = "90%";
        authBox.style.maxWidth = "320px";
      }
    }, 10);

    // ── Audio Engine Stream ───────────────────────────────────────────────────
    let musicLoading = false;
    musicBtn.addEventListener("click", async () => {
      if (musicLoading) return;

      if (!audioPlayer) {
        musicLoading         = true;
        musicBtn.textContent = "SYNC";
        let resolvedUrl      = FALLBACK_MUSIC_URL;
        try {
          const res      = await fetch(CONFIG.m + "?t=" + Date.now());
          const audioUrl = (await res.text()).trim();
          if (audioUrl && audioUrl.startsWith("http")) {
            resolvedUrl = audioUrl;
          }
        } catch (err) {
          console.log("Audio stream redirected to fallback.");
        }
        audioPlayer      = new Audio(resolvedUrl);
        audioPlayer.loop = true;
        musicLoading     = false;
      }

      if (audioPlayer.paused) {
        audioPlayer.play()
          .then(() => {
            musicBtn.textContent       = "STATION_ON";
            musicBtn.style.color       = "#00ffcc";
            musicBtn.style.borderColor = "#00ffcc";
            musicBtn.style.boxShadow   = "0 0 10px rgba(0,255,204,0.4)";
          })
          .catch(() => {
            musicBtn.textContent = "ERR_PLAY";
          });
      } else {
        audioPlayer.pause();
        musicBtn.textContent       = "STATION_OFF";
        musicBtn.style.color       = "#ff0055";
        musicBtn.style.borderColor = "rgba(0,255,204,0.3)";
        musicBtn.style.boxShadow   = "0 0 8px rgba(0,0,0,0.3)";
      }
    });

    // ── Telegram Redirector ───────────────────────────────────────────────────
    telegramBtn.addEventListener("click", () => {
      if (telegramLink.startsWith("http")) {
        window.open(telegramLink, "_blank");
      }
    });

    // ── Interface Transisi & Countdown Lingkaran ──────────────────────────────
    function runRedirect(countdownSeconds) {
      authBox.remove();

      const loadingOverlay = document.createElement("div");
      loadingOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(2,3,8,0.93);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:'Courier New',monospace;";
      loadingOverlay.innerHTML = `
        <div style="text-align:center; background:rgba(4,6,14,0.98); padding:40px 30px; border-radius:4px; border:1px solid #ff0055; width:300px; box-shadow: 0 0 30px rgba(255,0,85,0.2);">
          <div style="width:40px; height:40px; border:3px solid rgba(255,0,85,0.1); border-top:3px solid #ff0055; border-radius:50%; margin:0 auto 25px auto; animation:rama-spin 0.6s linear infinite; box-shadow:0 0 15px rgba(255,0,85,0.3);"></div>
          <p style="color:#ff0055; font-size:13px; font-weight:bold; margin:0; letter-spacing:2px; text-shadow:0 0 8px rgba(255,0,85,0.4);">>> LOADING RESOURCE...</p>
        </div>
      `;
      document.body.appendChild(loadingOverlay);

      setTimeout(async () => {
        loadingOverlay.remove();
        try {
          const redirectRes = await fetch(CONFIG.r + "?t=" + Date.now());
          const redirectUrl = (await redirectRes.text()).trim();

          if (!redirectUrl.startsWith("http")) return;

          const DASH_TOTAL       = 597;
          const countdownOverlay = document.createElement("div");
          countdownOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(2,3,8,0.95);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:'Courier New',monospace;";
          countdownOverlay.innerHTML = `
            <div style="text-align:center;">
              <div style="position:relative; width:250px; height:250px; margin:0 auto; display:flex; align-items:center; justify-content:center;">
                <div style="position:absolute; top:50%; left:50%; width:214px; height:214px; border-radius:50%; background:conic-gradient(transparent 0deg,#ff0055 120deg,#00ffcc 240deg,transparent 360deg); filter:blur(15px); opacity:0.6; animation:rama-fire-spin 2s linear infinite; z-index:1;"></div>
                <svg width="240" height="240" style="transform:rotate(-90deg); position:relative; z-index:3;">
                  <circle cx="120" cy="120" r="95" fill="rgba(4,6,14,0.85)" stroke="rgba(255,0,85,0.1)" stroke-width="10"></circle>
                  <circle id="progress" cx="120" cy="120" r="95" fill="none" stroke="#00ffcc" stroke-width="10" stroke-dasharray="${DASH_TOTAL}" stroke-dashoffset="${DASH_TOTAL}" stroke-linecap="square" style="filter:drop-shadow(0 0 8px #00ffcc); transition:stroke-dashoffset 1s linear;"></circle>
                </svg>
                <div id="countdown-text" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:58px; font-weight:900; color:#fff; text-shadow:0 0 20px #00ffcc; z-index:4;">${countdownSeconds}</div>
              </div>
              <p style="margin-top:35px; color:#ff0055; font-size:14px; font-weight:bold; letter-spacing:4px; text-shadow:0 0 10px #ff0055; position:relative; z-index:4;">>> INITIALIZING REDIRECT</p>
            </div>
          `;
          document.body.appendChild(countdownOverlay);

          let remaining        = countdownSeconds;
          const progressCircle = countdownOverlay.querySelector("#progress");
          const countdownText  = countdownOverlay.querySelector("#countdown-text");

          const timer = setInterval(() => {
            remaining--;
            countdownText.textContent             = remaining;
            progressCircle.style.strokeDashoffset = DASH_TOTAL * (remaining / countdownSeconds);

            if (remaining <= 0) {
              clearInterval(timer);
              if (audioPlayer) {
                audioPlayer.pause();
                audioPlayer = null;
              }
              countdownOverlay.remove();
              window.location.replace(redirectUrl);
            }
          }, 1000);

        } catch {
          alert("EXECUTION INTERRUPTED!");
        }
      }, 2000);
    }

    // ── Input Evaluator (Key Validation Link) ─────────────────────────────────
    loginBtn.addEventListener("click", () => {
      const inputKey = keyInput.value.trim();

      if (!inputKey) {
        statusEl.innerHTML = "<span style='color:#ff0055;'>[!] KEY REQUIRED</span>";
        return;
      }

      const isValid = VALID_KEYS.some(k => k.toLowerCase() === inputKey.toLowerCase());

      if (isValid) {
        statusEl.innerHTML   = "<span style='color:#00ffcc;'>[✓] SUCCESS</span>";
        loginBtn.disabled    = true;
        telegramBtn.disabled = true;

        setTimeout(() => {
          authBox.innerHTML = `
            <div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,0.25) 50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06));background-size:100% 4px,6px 100%;z-index:11;pointer-events:none;overflow:hidden;"></div>
            <h3 style="margin:0 0 4px 0;color:#ff0055;font-size:18px;letter-spacing:1.5px; font-weight:900;text-shadow:0 0 10px rgba(255,0,85,0.4); font-family:'Courier New',monospace;">CHOOSE_METHOD</h3>
            <p style="margin:0 0 25px 0;color:#64748b;font-size:10px;letter-spacing:2px;font-weight:bold;">SELECT ROUTING FREQUENCY</p>
            <button id="rama-btn-fast"   class="rama-mode-btn rama-btn-fast">METHOD_FAST (30s)</button>
            <button id="rama-btn-secure" class="rama-mode-btn rama-btn-secure">METHOD_SECURE (45s)</button>
            <button id="rama-btn-safe"   class="rama-mode-btn rama-btn-safe">METHOD_SAFE (60s)</button>
          `;
          document.getElementById("rama-btn-fast").addEventListener("click",   () => runRedirect(30));
          document.getElementById("rama-btn-secure").addEventListener("click", () => runRedirect(45));
          document.getElementById("rama-btn-safe").addEventListener("click",   () => runRedirect(60));
        }, 600);
      } else {
        statusEl.innerHTML = "<span style='color:#ff0055;'>[!] ACCESS DENIED</span>";
      }
    });

  })();
})();
