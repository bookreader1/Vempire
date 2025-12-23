// -----------------------------
// 1. Utilities & Content
// -----------------------------
const slides = [];

function makeMessages(name, i) {
  const variants = [
    `${name} — Aaj ka din sirf tumhara hai! May your smile shine brighter than your birthday candles. 🎂✨`,
  `${name} — Tum haste hue sabse ache lagte ho. Khush raho hamesha, duniya ki saari muskurahatein tumhe mil jaayein. 😊💖`,
  `${name} — Happy Birthday to the one who can make even boring days funny! Tera humor priceless hai. 😂🎉`,
  `${name} — Life thodi filmy hai, par tu uska best character hai! Hero vibes all the way. 🎬💫`,
  `${name} — Tera presence hi mood fresh kar deta hai. Thank you for being sunshine with extra sparkle. ☀️🌸`,
  `${name} — Birthday wish simple hai: jitna cake khayein utni tension kam ho. 🧁😜`,
  `${name} — Tere jaise dost rare hote hain — annoying bhi, caring bhi, aur hamare favorite bhi! 😆❤️`,
  `${name} — Tum wo insan ho jo bina kuch bole sab samajh jaata hai. Thank you for that silent understanding. 🤍`,
  `${name} — Aaj cake ka size tumhari smile jitna bada hona chahiye. Big smile, bigger cake! 🍰😁`,
  `${name} — Kabhi socha nahi tha ek random insan itna important ban jaayega. Happy Birthday you precious chaos! 💫💖`,
  `${name} — Tumhare bina ye saal thoda adhura lagta. Aaj poora ho gaya — Happy Birthday! 🥰🎈`,
  `${name} — Zindagi ke syllabus mein tum wo topic ho jo repeat karne layak hai! 😄📚`,
  `${name} — Tera energy level aur tere jokes — dono limited edition hain. Never change! ⚡😂`,
  `${name} — May this year give you less overthinking aur zyada overjoying! 🧠💃`,
  `${name} — Birthday ke din tumhe sirf happiness ka spam milna chahiye! 📩😄`,
  `${name} — Tere bina ye friendship playlist adhoori lagti hai. Tu best track hai meri life ka. 🎶❤️`,
  `${name} — I hope today you laugh till your cheeks hurt — aur fir bhi smile karte raho. 😁✨`,
  `${name} — Tum wo insan ho jo dosti ko maza bana dete ho. Thank you for being my constant. 💫🤍`,
  `${name} — May your coffee be strong aur tumhara patience aur bhi strong! ☕😅`,
  `${name} — Tu jitni mast hai, utna hi mast tera birthday bhi hona chahiye! 🥳🔥`,
  `${name} — Aaj tumhara din hai, toh drama sirf tumhara chalega. Queen mode on! 👑💅`,
  `${name} — Kuch log toh temporary WiFi connection the, par tu full-time hotspot ban gaya!" 🔥😂`,
  `${name} — Happy Birthday to the person jiske bina chats boring lagti hain. 📱😂`,
  `${name} — Khush raho, aur zyada khush raho — tension lene ka kaam mujhe de do. 😌💌`,
  `${name} — Tere jaisa dost milna ek blessing hai, aur tujhe tang karna meri hobby. 😋🎁`,
  `${name} — Aaj ka din sirf tumhare naam. Thoda cake mujhe bhi dena please. 😜🍰`,
  `${name} — May your life be full of twinkle moments aur zero drama. 🌟🙌`,
  `${name} — Tumhari laugh contagious hai — please zyada se zyada spread karte raho! 😄✨`,
  `${name} — Dil se wish karta hoon, iss saal tumhare saare ‘almosts’ pure ho jaayein. 💭❤️`,
  `${name} — Happy Birthday meri emotional support human! Always there, always gold. 🤗💫`,
  `${name} — Tere bina conversations thodi bland ho jaati hain — tu extra tadka hai hum sabka! 🌶️😂`,
  `${name} — Tum jahan bhi jao, wahan thoda good vibe zarur chhod dena. 🌈💖`,
  `${name} — Aaj ke din stress cancel, smiles on repeat. That’s the rule! 😄🎶`,
  `${name} — Tumhare jokes ke bina duniya thodi boring hai. Stay the chaos we love! 😝💥`,
  `${name} — May this year bring more silly selfies, inside jokes, and late-night talks. 📸🌙`,
  `${name} — Tum jitne pyaare ho, utni hi acchi cheezein tumhare saath ho. ❤️🍀`,
  `${name} — Birthday wish: tumhara dil hamesha itna hi soft rahe — jaise freshly baked cake. 🎂💗`,
  `${name} — Duniya ke sabse cute insan ko Happy Birthday! May your sparkle never fade. 💖✨`
  ];
  return variants[i % variants.length] + "\n\n— From Kirtan ✨";
}

// Build slides
slides.push({ theme: 'vempire', title: 'Happy Birthday Gauri ✨', body: 'Happy Birthday Gauri — flip to read wishes, thank-you notes, and small reflections.' });
for (let i = 0; i < 12; i++) slides.push({ theme: 'vempire', title: 'Vempire', body: makeMessages('Vempire', i) });
for (let i = 13; i < 24; i++) slides.push({ theme: 'gauri', title: 'Gauri', body: makeMessages('Gauri', i) });
for (let i = 25; i < 38; i++) slides.push({ theme: 'riddhi', title: 'Riddhi', body: makeMessages('Riddhi', i) });
slides.push({ theme: 'gauri', title: 'With love', body: 'With love — May this year be kind to you, and may you be celebrated every day. — From Kirtan ✨' });

// -----------------------------
// 2. DOM Elements & State
// -----------------------------
const cardWrap = document.getElementById('cardWrap');
const frontInner = document.getElementById('frontInner');
const backInner = document.getElementById('backInner');
const sectionHead = document.getElementById('sectionHead');
const progress = document.getElementById('progress');
const intro = document.getElementById('intro');
const startBtn = document.getElementById('startBtn');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const lockScreen = document.getElementById('lockScreen');
const unlockBtn = document.getElementById('unlockBtn');
const passInput = document.getElementById('passInput');
const wrongMsg = document.getElementById('wrongMsg');
const mainMsg = document.getElementById('mainMsg');

let index = 0;
let animating = false;
let flipDirection = null;
let musicPlayed = false;
let heartsInterval = null;
let celebrationTicker = null;
let raf = null;

// -----------------------------
// 3. Book Logic
// -----------------------------
function applyToInner(slide, inner) {
  inner.classList.remove('theme-vempire', 'theme-gauri', 'theme-riddhi');
  inner.classList.add('theme-' + slide.theme);
  inner.querySelector('.title').textContent = slide.title;
  inner.querySelector('.cursive').textContent = slide.title;
  inner.querySelector('.body').textContent = slide.body;
  inner.querySelector('.sign').textContent = '— From Kirtan ✨';
  
  const bodyEl = inner.querySelector('.body');
  bodyEl.style.opacity = 0;
  bodyEl.style.transform = 'translateY(6px)';
  void bodyEl.offsetWidth;
  bodyEl.style.animation = 'fadeIn 540ms ease forwards 120ms';
}

function updateUI() {
  progress.textContent = `${index + 1} / ${slides.length}`;
  if (index === 0) sectionHead.textContent = 'Intro';
  else if (index >= 1 && index <= 12) sectionHead.textContent = 'Vempire ✨';
  else if (index >= 13 && index <= 24) sectionHead.textContent = 'Gauri ✨';
  else if (index >= 25 && index <= 36) sectionHead.textContent = 'Riddhi ✨';
  else sectionHead.textContent = 'With love ✨';
}

function showNext() {
  if (animating) return;
  animating = true;
  flipDirection = 'next';
  cardWrap.classList.add('flipped');
}

function showPrev() {
  if (animating) return;
  animating = true;
  flipDirection = 'prev';
  const prevIndex = (index - 1 + slides.length) % slides.length;
  applyToInner(slides[prevIndex], backInner);
  applyToInner(slides[index], frontInner);
  requestAnimationFrame(() => {
    cardWrap.classList.add('flipped');
  });
}

cardWrap.addEventListener('transitionend', (ev) => {
  if (ev.propertyName !== 'transform') return;
  if (cardWrap.classList.contains('flipped')) {
    if (flipDirection === 'next') {
      index = (index + 1) % slides.length;
      applyToInner(slides[index], frontInner);
      applyToInner(slides[(index + 1) % slides.length], backInner);
    } else if (flipDirection === 'prev') {
      index = (index - 1 + slides.length) % slides.length;
      applyToInner(slides[index], frontInner);
      applyToInner(slides[(index + 1) % slides.length], backInner);
    }
    cardWrap.style.transition = 'none';
    cardWrap.classList.remove('flipped');
    void cardWrap.offsetWidth;
    cardWrap.style.transition = '';
    animating = false;
    flipDirection = null;
    updateUI();
    maybeTriggerCelebration();
    startFloatingWords();
  }
});

// Controls
const stage = document.getElementById('stage');
stage.addEventListener('click', (e) => {
  const r = stage.getBoundingClientRect();
  const x = e.clientX - r.left;
  if (x < r.width * 0.36) showPrev(); else showNext();
});

let sx = 0;
stage.addEventListener('touchstart', e => sx = e.changedTouches[0].screenX);
stage.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].screenX - sx;
  if (dx > 40) showPrev(); else if (dx < -40) showNext();
});
window.addEventListener('keydown', e => { if (e.key === 'ArrowRight') showNext(); if (e.key === 'ArrowLeft') showPrev(); });

// -----------------------------
// 4. Visuals (Canvas & Confetti)
// -----------------------------


// -----------------------------
// UI updates and celebration triggers
// -----------------------------


function maybeTriggerCelebration(){
  // trigger when reaching certain pages (matches your original logic)
  if (index === 12 || index === 25 || index === 37) {
    triggerCelebration();
  }
}

// -----------------------------
// Hearts + confetti + fireworks
// -----------------------------
const fire = document.getElementById('fire'); const ctx = fire.getContext('2d');
const balloons = document.getElementById('balloons'); const btx = balloons.getContext('2d');
const sparkles = document.getElementById('sparkles'); const stx = sparkles.getContext('2d');

function resizeCanvas(){
  fire.width = innerWidth; fire.height = innerHeight;
  balloons.width = innerWidth; balloons.height = innerHeight;
  sparkles.width = innerWidth; sparkles.height = innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let particles = [], confettiBits = [], anim = null;

function spawnSparkles(x,y){
  const cols = ['#ffd166','#ffb86b','#ffe9a8'];
  const count = 20 + Math.floor(Math.random() * 30);
  for(let i=0;i<count;i++){
    const a = Math.random() * Math.PI * 2, s = 1 + Math.random()*3;
    particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:60+Math.random()*80,t:0,color:cols[Math.floor(Math.random()*cols.length)],r:1+Math.random()*2});
  }
}
function spawnConfettiBits(){
  const colors = ['#ff7ab6','#ffd166','#7afcff','#b8ff7a','#c77bff','#ffb86b'];
  const count = 28 + Math.floor(Math.random() * 36);
  for(let i=0;i<count;i++){
    confettiBits.push({
      x: Math.random()*fire.width, y: -10 - Math.random()*120,
      vx: (Math.random()*2-1)*2, vy: 1+Math.random()*3,
      r: 6 + Math.random()*8, color: colors[Math.floor(Math.random()*colors.length)],
      rot: Math.random()*360, life: 160 + Math.random()*200, t:0
    });
  }
}

  


function animLoop(){
  cancelAnimationFrame(anim);
  function loop(){
    ctx.clearRect(0,0,fire.width,fire.height);
    btx.clearRect(0,0,balloons.width,balloons.height);
    stx.clearRect(0,0,sparkles.width,sparkles.height);

    for(let i=particles.length-1;i>=0;i--){
      const p = particles[i];
      p.t++; p.x += p.vx; p.y += p.vy; p.vy += 0.02; p.vx *= 0.995;
      ctx.beginPath(); ctx.globalAlpha = Math.max(0,1-p.t/p.life); ctx.fillStyle = p.color; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      if (p.t > p.life) particles.splice(i,1);
    }
    for(let i=confettiBits.length-1;i>=0;i--){
      const c = confettiBits[i];
      c.t++; c.x += c.vx; c.y += c.vy; c.vy += 0.03; c.rot += 6;
      btx.save(); btx.translate(c.x,c.y); btx.rotate(c.rot*Math.PI/180);
      btx.fillStyle = c.color; btx.fillRect(-c.r/2,-c.r/2,c.r,c.r*0.6); btx.restore();
      if (c.t > c.life || c.y > balloons.height + 50) confettiBits.splice(i,1);
    }
    // tiny sparkles overlay
    for(let i=0;i<40;i++){
      const x = Math.random()*sparkles.width, y = Math.random()*sparkles.height;
      stx.fillStyle = 'rgba(255,255,255,0.02)'; stx.fillRect(x,y,1,1);
    }

    anim = requestAnimationFrame(loop);
  }
  loop();
}

function startCelebration(){
  if (celebrationTicker) return;
  spawnSparkles(fire.width*0.5, fire.height*0.2);
  spawnConfettiBits();
  animLoop();
  celebrationTicker = setInterval(()=>{ spawnSparkles(80+Math.random()*(fire.width-160),80+Math.random()*(fire.height-200)); spawnConfettiBits(); }, 100);
}
function stopCelebration(){
  clearInterval(celebrationTicker); celebrationTicker = null;
  particles = []; confettiBits = [];
  cancelAnimationFrame(anim);
  ctx.clearRect(0,0,fire.width,fire.height); btx.clearRect(0,0,balloons.width,balloons.height); stx.clearRect(0,0,sparkles.width,sparkles.height);
}
function triggerCelebration(){ startCelebration(); //setTimeout(()=>stopCelebration(),6000);
 }

// confetti library fire (canvas-confetti)
function fireConfettiLib(){
  if (typeof confetti === 'function') {
    confetti({ particleCount: 200, spread: 100, startVelocity: 40, origin: { y: 0.6 } });
  }
}



// -----------------------------
// Hearts (start after unlock)
// -----------------------------
let heartsTimer = null;
function createHeart(){
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-10px';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heart.style.opacity = 0.9;
  heart.style.pointerEvents = 'none';
  heart.style.transition = 'transform 4s linear, opacity 4s linear';
  heart.style.transform = 'translateY(0)';
  document.body.appendChild(heart);
  requestAnimationFrame(()=> {
    heart.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(360deg)`;
    heart.style.opacity = '0';
  });
  setTimeout(()=> heart.remove(), 4200);
}
function startHearts(){ if (heartsTimer) return; heartsTimer = setInterval(createHeart, 500); }
function stopHearts(){ clearInterval(heartsTimer); heartsTimer = null; }

// -----------------------------
// Password unlock & typed message -> then start book
// -----------------------------
/*function typeText(element, text, speed = 60) {
  element.textContent = '';
  let i = 0;
  return new Promise(resolve => {
    function step() {
      if (i < text.length) {
        element.textContent += text.charAt(i++);
        setTimeout(step, speed);
      } else {
        resolve();
      }
    }
    step();
  });
}
*/

// types into an element node, letter-by-letter (awaitable)
function typeText(elementNode, text, speed = 60) {
  if (!elementNode || typeof text !== 'string') return Promise.resolve();
  elementNode.classList.remove('show');
  elementNode.textContent = '';
  return new Promise(resolve => {
    let i = 0;
    function step() {
      if (i < text.length) {
        elementNode.textContent += text.charAt(i++);
        setTimeout(step, speed);
      } else {
        // add CSS class to animate appearance if needed
        elementNode.classList.add('show');
        resolve();
      }
    }
    step();
  });
}



// types into an element node, letter-by-letter (awaitable)




// function floatWords(text = 'Happy Birthday Gauri5 💫💖') {
//   if (!text || typeof text !== 'string') return; // safety check

//   const words = text.split(' ');
//   let delay = 0;

//   words.forEach(word => {
//     setTimeout(() => {
//       const span = document.createElement('span');
//       span.textContent = word;
//       span.className = 'floating-word';
//       span.style.left = Math.random() * 80 + 10 + 'vw';
//       span.style.top = '90vh';
//       span.style.setProperty('--rot', `${Math.random() * 40 - 20}deg`);
//       document.body.appendChild(span);

//       // trigger animation
//       requestAnimationFrame(() => {
//         span.classList.add('fly-up');
//       });

//       // remove after done
//       setTimeout(() => span.remove(), 5000);
//     }, delay);
//     delay += 600; // gap between words
//   });
// }




function fireConfetti() {
  if (typeof confetti === 'function') {
    const count = 10; // number of bursts
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 300,
          spread: 120,
          startVelocity: 50,
          origin: { y: 0.6 }
        });
      }, i * 5000); // delay each burst
    }
  }
}

// ---- FLOATING WORDS LOOP ----
function floatWords(text) {
  const container = document.body;
  const word = document.createElement("span");
  word.className = "floating-word";
  word.textContent = text;
  container.appendChild(word);

  // Random start position and scale
  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight - 50;
  const scale = 0.8 + Math.random() * 0.7;
  word.style.left = `${startX}px`;
  word.style.top = `${startY}px`;
  word.style.transform = `scale(${scale})`;

  // Trigger animation
  setTimeout(() => {
    word.style.top = `${startY - (200 + Math.random() * 200)}px`;
    word.style.opacity = "0";
  }, 100);

  // Remove after animation
  setTimeout(() => word.remove(), 4000);
}

// auto float every 15 seconds
function startFloatingWords() {
  floatWords("Happy Birthday Gauri 💫💖");
  setInterval(() => {
    floatWords("Happy Birthday Gauri 💫💖");
  }, 15000);
}

// function fireSkyWords(text) {
//   const words = text.split(" "); // split into words
//   let delay = 0;

//   words.forEach((word, i) => {
//     setTimeout(() => {
//       createSkyWord(word);
//     }, delay);
//     delay += 400; // small gap between each word
//   });
// }







// create a single sky-shot word that launches upward and removes itself
function createSkyWord(word) {
  if (!word) return;
  const el = document.createElement('span');
  el.className = 'sky-word';
  el.textContent = word;
  document.body.appendChild(el);

  // random horizontal position + small random offset
  const startX = 0.1 * window.innerWidth + Math.random() * 0.8 * window.innerWidth;
  const startY = window.innerHeight - 40;

  el.style.left = `${startX}px`;
  el.style.top  = `${startY}px`;

  // small random rotate and scale
  const rot = (Math.random() * 40 - 20).toFixed(2);
  const scale = 1 + Math.random() * 0.6;
  el.style.transform = `translateX(-50%) translateY(0) scale(${scale}) rotate(${rot}deg)`;

  // trigger upward movement (use RAF so transitions apply)
  requestAnimationFrame(() => {
    // go up by 250-480 px
    const distance = 250 + Math.random() * 300;
    el.style.top = `${startY - distance}px`;
    el.style.opacity = '0';
    el.style.transform = `translateX(-50%) translateY(0) scale(${scale * 1.25}) rotate(${rot + 40}deg)`;
  });

  // remove when done
  setTimeout(() => {
    el.remove();
  }, 3200);
}

// fire words in sequence (word-by-word)
function fireSkyWords(sentence, gap = 450) {
  if (!sentence || typeof sentence !== 'string') return;
  const parts = sentence.split(' ');
  parts.forEach((p, i) => {
    setTimeout(() => createSkyWord(p), i * gap);
  });
}


// auto-repeat runner (start only once)
let _skyShowInterval = null;
function startSkyShow(intervalMs = 15000) {
  // start immediately
  fireSkyWords('Happy Birthday Gauri 💫💖', 450);
  // guard against double intervals
  if (_skyShowInterval) return;
  _skyShowInterval = setInterval(() => {
    fireSkyWords('Happy Birthday Gauri 💫💖', 450);
  }, intervalMs);
}
function stopSkyShow(){
  if (_skyShowInterval) {
    clearInterval(_skyShowInterval);
    _skyShowInterval = null;
  }
}







// -----------------------------
// 6. Audio & Countdown
// -----------------------------
musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) { bgMusic.play().catch(() => { }); musicToggle.textContent = '🔊 Music: On'; }
  else { bgMusic.pause(); musicToggle.textContent = '🔈 Music: Off'; }
});

function triggerFirst() {
  if (!musicPlayed) {
    bgMusic.play().catch(() => { });
    musicPlayed = true;
    musicToggle.textContent = '🔊 Music: On';
  }
}

startBtn.addEventListener('click', () => {
  intro.style.display = 'none';
  triggerFirst();
});

function startCountdown() {
  const countdownEl = document.getElementById('countdown');
  const targetDate = new Date('April 13, 2026 00:00:00').getTime();
  const update = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance <= 0) {
      countdownEl.textContent = "🎉 It's Gauri's Day! Happy Birthday! 🎉";
      clearInterval(interval); return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownEl.textContent = `🎂 You are early→ ${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  update();
  const interval = setInterval(update, 1000);
}

// -----------------------------
// 7. Unlock & Typing
// -----------------------------
function typeText(elementNode, text, speed = 60) {
  elementNode.classList.remove('show');
  elementNode.textContent = '';
  return new Promise(resolve => {
    let i = 0;
    function step() {
      if (i < text.length) {
        elementNode.textContent += text.charAt(i++);
        setTimeout(step, speed);
      } else {
        elementNode.classList.add('show');
        resolve();
      }
    }
    step();
  });
}

const secret = atob('YmloYXJpX3ZlbXBpcmU1Njc=');
const messagess = [
 "😜 Nope! Gauri’s secret is safe for now!",
  "🤨 Wrong again? Try harder, detective!",
  "💔 Oops! Wrong code — Gauri wouldn’t approve 😅",
  "🧠 Error 403: Cute hacker not authorized!",
  "💡 Hint: Think about something *special* about April 13 😉",
  "😏 Aree... itna bhi tough nahi hai!",
  "😂 Wrong! But nice try, Sherlock!",
  "🙃 You can’t guess this one that easy!",
  "🔥 Almost there! (Just kidding, you’re not.)",
  "👀 The code isn’t your birthday either, detective!",
  "😎 Even Google couldn’t crack this one!",
  "🥴 Error: brain not found. Try again.",
  "🤔 Gauri’s laughing right now… try again!",
  "🥶 That guess was colder than Antarctica.",
  "🕵️‍♀️ Mission failed! But style maintained 😎",
  "🤫 It’s something that only a true friend would know.",
  "🤣 Wrong code! But I appreciate the effort.",
  "💬 Hint: ‘No’… or is it? 😉",
  "🪄 Nope! This magic spell doesn’t work here.",
  "🎭 Plot twist: every wrong guess makes Gauri smile!"
];
function showRandomWrongMsg() {
  const msg = messagess[Math.floor(Math.random() * messagess.length)];
  const wrongMsgEl = document.getElementById("wrongMsg");
  wrongMsgEl.textContent = msg;
  wrongMsgEl.style.display = "block";
  wrongMsgEl.style.animation = "shake 0.4s ease";
  setTimeout(() => (wrongMsgEl.style.animation = ""), 400);
}

// Unlock logic
document.getElementById("unlockBtn").addEventListener("click", () => {
  const code = document.getElementById("passInput").value.trim();
  const wrongMsgEl = document.getElementById("wrongMsg");

  if (code === secret) {
    document.getElementById("lockScreen").style.display = "none";
  } else {
    showRandomWrongMsg();
    document.getElementById("passInput").value = "";
  }
});


unlockBtn.addEventListener('click', async () => {
  const code = passInput.value.trim().toLowerCase();
  if (code === secret) {
    wrongMsg.style.display = 'none';
    lockScreen.style.display = 'none';
    setTimeout(async () => {
      await typeText(mainMsg, 'Happy Birthday Gauri 💫💖', 80);
    }, 10000);
    fireConfettiLib();
    startCelebration();
    floatWords('Happy Birthday Gauri 💫💖');
    startHearts();
    setTimeout(() => {
      mainMsg.textContent = '';
      intro.style.display = 'none';
      triggerFirst();
      fireConfettiLib();
      fireConfetti();
      startFloatingWords();
     // startSkyShow();
      showVampireAfterUnlock();
      setupHorrorSecret();
     // activateSecretZone();
      ('Happy Birthday Gauri 💫💖');
      setTimeout(async () => {
       fireSkyWords('Happy Birthday Gauri 💫💖', 50);
    }, 4000);
      
    }, 1200);
    event_name("password_unlocked");
  } else {
    wrongMsg.style.display = 'block';
  }
});

passInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') unlockBtn.click(); });

// -----------------------------
// 8. SECRETS (Functions)
// -----------------------------

// Shared variable to remember music state
let wasMusicPlaying = false;

// --- Vampire Secret ---
function showVampireAfterUnlock() {
  const btn = document.createElement('div');
  btn.textContent = '🧛🏻‍♀️';
  btn.style.cssText = 'position:fixed; bottom:20px; right:20px; font-size:2rem; cursor:pointer; transition:transform 0.3s, filter 0.3s; z-index:9999; user-select:none;';
  document.body.appendChild(btn);

  let clicks = 0;
  btn.addEventListener('mouseenter', () => btn.style.filter = 'drop-shadow(0 0 6px red)');
  btn.addEventListener('mouseleave', () => btn.style.filter = 'none');
  
  btn.addEventListener('click', () => {
    clicks++;
    btn.style.transform = 'scale(1.3)';
    setTimeout(() => (btn.style.transform = 'scale(1)'), 200);
    if (clicks === 5) {
      clicks = 0;
      openSecretChamber();
    }
  });
}

function openSecretChamber() {
  const app = document.getElementById('app') || document.body;
  event_name("Inside secret chamber");
  // Save state and pause
  wasMusicPlaying = !bgMusic.paused;
  if (wasMusicPlaying) bgMusic.pause();

  app.style.transition = 'opacity 1s ease';
  app.style.opacity = '0';

  const chamber = document.createElement('div');
  chamber.id = 'secretChamber';
  chamber.style.cssText = 'position:fixed; inset:0; background:radial-gradient(circle at center, #0b0320 0%, #000 100%); display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; color:#ffd666; font-family:"Poppins", sans-serif; z-index:99999; opacity:0; transition:opacity 1s ease;';
  document.body.appendChild(chamber);

  chamber.innerHTML = `
    <h1 style="font-size:2.2em;text-shadow:0 0 10px #ffd666; animation:glowText 2s infinite alternate;">🌙</h1>
    <div id="buttonContainer">
      <button id="exitChamber">Return to the Book 📖</button>
      <button id="musicToggle2">🔇 Pause Music</button>
    </div>
    <audio id="bgMusic2" loop preload="auto"><source src="gauri.mp3" type="audio/mpeg"></audio>
  `;

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.cssText = `position:absolute; background:white; width:2px; height:2px; border-radius:50%; left:${Math.random()*100}vw; top:${Math.random()*100}vh; opacity:0.8; animation:twinkle 4s infinite ease-in-out; animation-delay:${Math.random()*4}s`;
    chamber.appendChild(star);
  }

  setTimeout(() => (chamber.style.opacity = '1'), 200);

  const bgMusic2 = document.getElementById('bgMusic2');
  const toggleBtn2 = document.getElementById('musicToggle2');
  bgMusic2.play().catch(() => {});

  toggleBtn2.addEventListener('click', () => {
    if (bgMusic2.paused) { bgMusic2.play(); toggleBtn2.textContent = "🔇 Pause Music"; }
    else { bgMusic2.pause(); toggleBtn2.textContent = "🔊 Play Music"; }
  });

  function createMagic(x, y) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.cssText = `position:absolute; border-radius:50%; width:0; height:0; background:radial-gradient(circle, rgba(255,214,102,0.6) 10%, transparent 70%); left:${x}px; top:${y}px; transform:translate(-50%, -50%); pointer-events:none; animation:rippleExpand 1s ease-out forwards;`;
    chamber.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);

    const emojis = ['✨','🌙','💫','⭐','🪄'];
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.cssText = `position:absolute; left:${x}px; top:${y}px; font-size:1.8em; pointer-events:none; animation:floatUp 1.5s ease-out forwards;`;
    chamber.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1500);
  }

  chamber.addEventListener('click', evt => createMagic(evt.clientX, evt.clientY));
  chamber.addEventListener('touchstart', evt => {
    const t = evt.touches[0];
    createMagic(t.clientX, t.clientY);
  });

  document.getElementById('exitChamber').addEventListener('click', () => {
    bgMusic2.pause();
    chamber.style.opacity = '0';
    setTimeout(() => chamber.remove(), 800);
    app.style.opacity = '1';
    
    // Resume ONLY if it was playing before
    if (wasMusicPlaying) bgMusic.play();
  });
}

// --- Cake Secret (Top-Left) ---
function setupCakeSecret() {
  const cakeBtn = document.getElementById("openCakeBtn");
  const closeBtn = document.getElementById("closeSurpriseBtn");
  const overlay = document.getElementById("surpriseOverlay");
  const frame = document.getElementById("surpriseFrame");
  
  cakeBtn.style.display = "none";
  cakeBtn.style.opacity = "0";
  cakeBtn.style.pointerEvents = "none";

  let secretClicks = 0;
  let hideTimeout = null;
  const SECRET_SIZE = 120; 

  document.addEventListener("click", (e) => {
    if (e.clientX <= SECRET_SIZE && e.clientY <= SECRET_SIZE) {
      secretClicks++;
      if (secretClicks === 5) {
        cakeBtn.style.display = "block";
        cakeBtn.style.opacity = "1";
        cakeBtn.style.pointerEvents = "auto";
        cakeBtn.animate([{ opacity: 0, transform: "scale(0.85)" }, { opacity: 1, transform: "scale(1)" }], { duration: 350, fill: "forwards" });
        
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          cakeBtn.style.opacity = "0";
          cakeBtn.style.pointerEvents = "none";
          setTimeout(() => cakeBtn.style.display = "none", 300);
          secretClicks = 0;
        }, 5000);
      }
    } else {
      secretClicks = 0;
    }
  });

  cakeBtn.addEventListener("click", () => {
    cakeBtn.style.display = "none";
    
    // Save state and pause
    wasMusicPlaying = !bgMusic.paused;
    if (wasMusicPlaying) bgMusic.pause();

    frame.src = "https://bookreader1.github.io/Cake/";
    overlay.classList.add("show");
    document.body.classList.add("no-scroll");
    event_name("Cake window");
  });

  // Shared close for both secrets
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
    setTimeout(() => frame.src = "", 500);
    
    // Resume ONLY if it was playing before
    if (wasMusicPlaying) bgMusic.play();
  });
}

// --- Horror Secret (Bottom-Left) ---
function setupHorrorSecret() {
  const openSurpriseBtn = document.getElementById("openSurpriseBtn");
  const surpriseOverlay = document.getElementById("surpriseOverlay");
  const surpriseFrame = document.getElementById("surpriseFrame");

  openSurpriseBtn.style.display = "none";
  const secretZone = { xMax: 100, yMax: 100, clicksRequired: 5, clicks: 0 };

  document.addEventListener("click", function revealButton(e) {
    if (e.clientX <= secretZone.xMax && e.clientY >= window.innerHeight - secretZone.yMax) {
      secretZone.clicks++;
      if (secretZone.clicks === secretZone.clicksRequired) {
        openSurpriseBtn.style.display = "block";
        secretZone.clicks = 0;
        openSurpriseBtn.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
        document.removeEventListener("click", revealButton);
      }
    } else {
      secretZone.clicks = 0;
    }
  });

  openSurpriseBtn.addEventListener("click", () => {
    // Save state and pause
    wasMusicPlaying = !bgMusic.paused;
    if (wasMusicPlaying) bgMusic.pause();

    document.body.classList.add("no-scroll");
    surpriseFrame.src = "https://bookreader1.github.io/hbd/";
    surpriseOverlay.classList.add("show");
    event_name("horror window");
  });
}

// -----------------------------
// 9. Init & Extra CSS
// -----------------------------
applyToInner(slides[0], frontInner);
applyToInner(slides[1], backInner);
updateUI();
resizeCanvas();
startCountdown();

setupCakeSecret();
//setupHorrorSecret();

const style = document.createElement('style');
style.textContent = `
  @keyframes twinkle { 0%,100%{opacity:0.2;transform:translateY(0);} 50%{opacity:1;transform:translateY(-10px);} }
  @keyframes rippleExpand { to {width:200px;height:200px;opacity:0;} }
  @keyframes floatUp { 0%{transform:translateY(0) scale(1);opacity:1;} 100%{transform:translateY(-80px) scale(1.5);opacity:0;} }
  @keyframes glowText { from{text-shadow:0 0 10px #ffd666;} to{text-shadow:0 0 25px #ff9cda,0 0 40px #ffd666;} }
`;
document.head.appendChild(style);





/* ===============================
   CONFIG
================================ */
// Set this to TRUE while testing to force logs every refresh
const DEBUG_MODE = true; 

const LOG_URL_ADVANCE = "https://script.google.com/macros/s/AKfycbyzfBrB8UvnX1YsA_H8WY7bGkKGdF8mieb8wl2g0q8CVCJngyeu79RZZSdiq-kboSi3Mw/exec";

/* ===============================
   UTILS
================================ */
function safeValue(v) {
  return v !== null && v !== undefined ? v : "null";
}

function getSessionId() {
  let id = sessionStorage.getItem("sessionId");
  if (!id) {
    id = "sess-" + Math.random().toString(36).slice(2, 11);
    sessionStorage.setItem("sessionId", id);
  }
  return id;
}

function getFirstVisit() {
  let fv = localStorage.getItem("firstVisit");
  if (!fv) {
    fv = new Date().toISOString();
    localStorage.setItem("firstVisit", fv);
  }
  return fv;
}

/* ===============================
   GEO (With Timeout Safety)
================================ */
async function getGeoOnce() {
  const cached = sessionStorage.getItem("geo");
  if (cached) return JSON.parse(cached);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 sec timeout

    const res = await fetch("https://ipapi.co/json/", { signal: controller.signal });
    clearTimeout(timeoutId);
    
    const g = await res.json();
    const geo = {
      country: g.country_name || "null",
      region: g.region || "null",
      city: g.city || "null",
      isp: g.org || "null"
    };

    sessionStorage.setItem("geo", JSON.stringify(geo));
    return geo;
  } catch (err) {
    return { country: "null", region: "null", city: "null", isp: "null" };
  }
}

/* ===============================
   CORE LOGGER
================================ */
function logEvent(data = {}) {
  const payload = {
    sessionId: safeValue(data.sessionId),
    event: safeValue(data.event),
    page: safeValue(data.page),
    referrer: safeValue(data.referrer),
    firstVisit: safeValue(data.firstVisit),
    sessionDuration: "null", // <--- FORCE NULL
    device: safeValue(data.device),
    os: safeValue(data.os),
    browser: safeValue(data.browser),
    screen: safeValue(data.screen),
    language: safeValue(data.language),
    darkMode: safeValue(data.darkMode),
    timezone: safeValue(data.timezone),
    country: safeValue(data.country),
    region: safeValue(data.region),
    city: safeValue(data.city),
    isp: safeValue(data.isp),
    extra: safeValue(data.extra)
  };

  fetch(LOG_URL_ADVANCE, {
    method: "POST",
    redirect: "follow",
    keepalive: true,
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  }).then(() => {
    if(DEBUG_MODE) console.log("Data sent to Sheet:", data.event);
  }).catch(err => console.error("Log Error:", err));
}

/* ===============================
   VISIT — LOG ONCE ONLY
================================ */
(async () => {
  // If NOT in debug mode, check the flag.
  if (!DEBUG_MODE && sessionStorage.getItem("visitLogged")) return;
  
  sessionStorage.setItem("visitLogged", "1");

  const geo = await getGeoOnce();

  (async () => {
  if (!DEBUG_MODE && sessionStorage.getItem("visitLogged")) return;
  sessionStorage.setItem("visitLogged", "1");

  await event_name("visit");
})();

})();


async function buildBaseContext(extra = {}) {
  const geo = await getGeoOnce();

  return {
    sessionId: getSessionId(),
    page: location.href,
    referrer: document.referrer,
    firstVisit: getFirstVisit(),
    device: navigator.userAgent,
    os: navigator.platform,
    browser: navigator.appVersion,
    screen: `${screen.width}x${screen.height}`,
    language: navigator.language,
    darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    ...geo,
    extra
  };
}

async function event_name(event, extra = {}) {
  const context = await buildBaseContext(extra);

  logEvent({
    event,
    ...context
  });
}

/*
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return; // not a button
  event_name("button_click", { 
    buttonId: btn.id || "no-id", 
    buttonClass: btn.className || "no-class",
    buttonText: btn.innerText || ""
  });
});*/

document.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return; // Ignore non-buttons

  const btnInfo = `${btn.id || "no-id"} (${btn.innerText || ""})`;
  event_name(`button_click — ${btnInfo}`);
});
