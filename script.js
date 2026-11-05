// ==========================================
// 1. TABLE DES 8 RARETÉS ET PROBABILITÉS
// ==========================================
const RARITIES = {
  COMMON:    { id: "COMMON",    name: "Commune",     chance: 55.00, color: "#a0a0a0" },
  UNCOMMON:  { id: "UNCOMMON",  name: "Peu Commune", chance: 25.00, color: "#2ecc71" },
  RARE:      { id: "RARE",      name: "Rare",        chance: 12.00, color: "#00d2ff" },
  EPIC:      { id: "EPIC",      name: "Épique",      chance: 5.00,  color: "#a855f7" },
  LEGENDARY: { id: "LEGENDARY", name: "Légendaire",  chance: 2.00,  color: "#ffcc00" },
  MYTHIC:    { id: "MYTHIC",    name: "Mythique",    chance: 0.80,  color: "#ff0044" },
  PLATINUM:  { id: "PLATINUM",  name: "Platine VIP", chance: 0.19,  color: "#00ffcc" },
  SECRET:    { id: "SECRET",    name: "HARD DROP",   chance: 0.01,  color: "#ff00ff" }
};

// ==========================================
// 2. TES CARTES (EXEMPLE DE CRÉATION)
// ==========================================
const CARDS_DB = [
  {
    id: 1,
    name: "L'Ingé Son",
    rarity: "MYTHIC", // Essaie de changer en COMMON, EPIC, PLATINUM ou SECRET pour voir les brillances !
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "Je t'ai déjà dit touche pas au master, TU COMPRENDS C'QUE J'TE DIT! Tu vas tre prendre des watts dans la gueule mon gars"
  },
  {
    id: 2,
    name: "Defqon 1",
    rarity: "SECRET", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "This is MAXIMUM FORCE"
  },
  {
    id: 3,
    name: "Angerfist",
    rarity: "SECRET", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Masterr of Hardcoree !"
  },
  {
    id: 4,
    name: "Tomorrowland",
    rarity: "SECRET", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Live Today, Love Tomorrowland, Unite Forever"
  },
  {
    id: 5,
    name: "Eco-cup fêlé",
    rarity: "COMMON", 
    category: "Objets",
    image: "https://picsum.photos/300/200",
    desc: "1 euros la consigne, c'est mort"
  },
  {
    id: 6,
    name: "Bouchon d'oreille",
    rarity: "COMMON",
    category: "Objets", 
    image: "https://picsum.photos/300/200",
    desc: "Protège toi j'te dit"
  },
  {
    id: 7,
    name: "Stagiaire Sécu",
    rarity: "COMMON",
    category: "Staff", 
    image: "https://picsum.photos/300/200",
    desc: "C'est mon premier jour vasy passe"
  },
  {
    id: 8,
    name: "L'agent de Sécu",
    rarity: "UNCOMMON", 
    category: "Staff", 
    image: "https://picsum.photos/300/200",
    desc: "Fait voir c'qu'il y a dans ta saccoche"
  },
  {
    id: 9,
    name: "Le Responsable Sécu",
    rarity: "RARE", 
    category: "Staff", 
    image: "https://picsum.photos/300/200",
    desc: "C'est pas du CBD ça, neutralise la menace"
  },
  {
    id: 10,
    name: "Maitre-Chien",
    rarity: "EPIC", 
    category: "Staff", 
    image: "https://picsum.photos/300/200",
    desc: "Ahhh l'batard !"
  },
  {
    id: 11,
    name: "Le festivalier puceau",
    rarity: "COMMON", 
    category: "Public", 
    image: "https://picsum.photos/300/200",
    desc: "Il assume pas le jeune"
  },
  {
    id: 12,
    name: "Le festivalier",
    rarity: "UNCOMMON",
    category: "Public", 
    image: "https://picsum.photos/300/200",
    desc: "J'ai plus de batterie si on se perd rdv au camping"
  },
  {
    id: 13,
    name: "L'habitué",
    rarity: "RARE", 
    category: "Public", 
    image: "https://picsum.photos/300/200",
    desc: "De toute façon j'ai ta loc, 17h rdv sur la Mainstage"
  },
  {
    id: 14,
    name: "Le vétéran",
    rarity: "EPIC",
    category: "Public",  
    image: "https://picsum.photos/300/200",
    desc: "Hardcore the pussy mother fuckeeer !"
  },
  {
    id: 15,
    name: "Le mec du regular",
    rarity: "LEGENDARY", 
    category: "Public", 
    image: "https://picsum.photos/300/200",
    desc: "T'façon j'ai pas de stratégie moi. Let's go after tente"
  },
  {
    id: 16,
    name: "Le bénévole",
    rarity: "COMMON", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "C'est quand mon shift ?"
  },
  {
    id: 17,
    name: "Le technicien lumière",
    rarity: "UNCOMMON", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "Envoie de la fumée, on voit pas les faisceaux. Fait gaffe tu me le grilles c'est 10000 balles mon gars "
  },
  {
    id: 18,
    name: "Le régisseur de scène",
    rarity: "RARE", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "Allez, on démonte et on charge ça cul camion"
  },
  {
    id: 19,
    name: "Le Respo artistes",
    rarity: "EPIC", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "La régis me pousse, il faut qu'on monte au plateau maintenant mon gars."
  },
  {
    id: 20,
    name: "Le Barman",
    rarity: "RARE", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "J'te sers quoi mon chef ?"
  },
  {
    id: 21,
    name: "Echafaudeur",
    rarity: "UNCOMMON", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "SEC SEC SEC! Purée ta pas l'équerre tu vas finir de travers"
  },
  {
    id: 22,
    name: "Pyrotechnicien",
    rarity: "MYTHIC", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "Plus de fioul !!"
  },
  {
    id: 23,
    name: "Pyrotechnicien",
    rarity: "LEGENDARY", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "Plus de fioul !!"
  },
  {
    id: 24,
    name: "Le Patron du Festival",
    rarity: "PLATINUM", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "Le piblic a répondu présent cette année !!"
  },
  {
    id: 25,
    name: "Le festivalier infiltré depuis 15 ans",
    rarity: "SECRET", 
    category: "Staff",
    image: "https://picsum.photos/300/200",
    desc: "Bon j'ai pas de badge, mais j'ai les clés de la régie"
  },
  {
    id: 26,
    name: "Notre gars sûr à tous",
    rarity: "LEGENDARY", 
    category: "Public",
    image: "https://picsum.photos/300/200",
    desc: "J'ai tout ce qui commence par une lettre fais toi plair mon chef"
  },
  {
    id: 27,
    name: "Dystopia",
    rarity: "COMMON", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Festvival hardtechno et industriel"
  },
  {
    id: 28,
    name: "Newrave",
    rarity: "COMMON", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Evenement new gen orienté nouvelle rave ?"
  },
  {
    id: 29,
    name: "Stereo Park",
    rarity: "UNCOMMON", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Ptit festival de Charente Maritime"
  },{
    id: 30,
    name: "Organik open Rave",
    rarity: "UNCOMMON", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "ça, ça c'est pas mal"
  },
  {
    id: 31,
    name: "Electronic Peak",
    rarity: "UNCOMMON", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Tu skies la journée, tu tapes du pied la nuit impeccable"
  },
  {
    id: 32,
    name: "Rotterdam Rave",
    rarity: "RARE", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Là on commence à causer"
  },
  {
    id: 33,
    name: "Blackworks",
    rarity: "RARE", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Ptit festival espagnol supplément sangria"
  },
  {
    id: 34,
    name: "Rave Rebels",
    rarity: "RARE", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Les Belges nous font bien kiffer"
  },
  {
    id: 35,
    name: "Complex Festival",
    rarity: "RARE", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Gros évènement chez les Néerlandais"
  },
  {
    id: 36,
    name: "HIVE Festival",
    rarity: "EPIQUE", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Grosse techno dans un complex industriel, le charbon va se fabriquer nickel moi j'te le dis"
  },
  {
    id: 37,
    name: "Madame Loyal",
    rarity: "EPIQUE", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Parc d'attraction sous tata... que dire"
  },
  {
    id: 38,
    name: "Ikarus Festival",
    rarity: "EPIQUE", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Granddddd festival électronique"
  },
  {
    id: 39,
    name: "Teletech",
    rarity: "LEGENDARY", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "J'avoue les British peuevent être chaud bouillant"
  },
  {
    id: 40,
    name: "MAYDAY",
    rarity: "LEGENDARY", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Un p'tit classique pour se faire kiffer"
  },
  {
    id: 41,
    name: "Dream Nation",
    rarity: "LEGENDARY", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Viens faire halloween là-bas c'est zinzin"
  },
  {
    id: 42,
    name: "Verknipt",
    rarity: "MYTHIC", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Là y a moyen que tu passes un très bon moment intdoor"
  },
  {
    id: 43,
    name: "Monegros Desert Festival",
    rarity: "MYTHIC", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Merci Klangkuenster pour cette hymne"
  },
  {
    id: 44,
    name: "Eskape Festival",
    rarity: "MYTHIC", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Eskapeeeee the pussy mother fucker"
  },
  {
    id: 45,
    name: "Dominator",
    rarity: "PLATINUM", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Tu vas t'en prendre plein la tronche"
  },
  {
    id: 46,
    name: "Decibel Outdoor",
    rarity: "PLATINUM", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Festvival hardtechno et industriel"
  },
  {
    id: 47,
    name: "Kappa FuturFestival",
    rarity: "PLATINUM", 
    category: "Festivals",
    image: "https://picsum.photos/300/200",
    desc: "Tu y vas, j'ai tu y vas c'est un ordre"
  },
  {
    id: 48,
    name: "Holy Priest",
    rarity: "COMMON", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Bienvenue à Bagdad"
  },
  {
    id: 49,
    name: "Roland Crystal",
    rarity: "COMMON", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "La panterraaa !!"
  },
  {
    id: 50,
    name: "Fantasm",
    rarity: "COMMON", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Bah tout est dans le prénom"
  },
  {
    id: 51,
    name: "Novah",
    rarity: "UNCOMMON", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: " I now what you sleep"
  },
  {
    id: 52,
    name: "6EJOU",
    rarity: "UNCOMMON", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "roi de l'impro"
  },
  {
    id: 53,
    name: "Klofama",
    rarity: "UNCOMMON", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "white dress code"
  },
  {
    id: 54,
    name: "Basswell",
    rarity: "UNCOMMON", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "RAS"
  },
  {
    id: 55,
    name: "Shlomo",
    rarity: "RARE", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Classqiue en vrai"
  },
  {
    id: 56,
    name: "Restricted",
    rarity: "RARE", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Du gros BOUM BOUM !!!"
  },
  {
    id: 57,
    name: "Trym",
    rarity: "RARE", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "ouais pas mal ta des bons goûts"
  },
  {
    id: 58,
    name: "Schlass",
    rarity: "RARE", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Le goat finalement"
  },
  {
    id: 59,
    name: "Onlynumbers",
    rarity: "EPIC", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Ecoutez son hymne s'il vous plaît c'est important"
  },
  {
    id: 60,
    name: "Vladimir Cauchemar",
    rarity: "EPIC", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Rien de plus à dire, qui ne le connait pas même"
  },
  {
    id: 61,
    name: "Mr Bassmeister",
    rarity: "EPIC", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "mettez des bouchons c'est un conseil"
  },
  {
    id: 62,
    name: "Less",
    rarity: "EPIC", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "J'suis dans la ville et j'vois un tas de porc"
  },
  {
    id: 63,
    name: "RDO",
    rarity: "RARE", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Mettez des bouchons, un casque antibruit et achetez de la mousse aussi (TUTITUTITU)"
  },
  {
    id: 64,
    name: "I Hate Models",
    rarity: "LEGENDARY", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Le roi de la trans"
  },
  {
    id: 65,
    name: "Mad Dog",
    rarity: "Légendaire", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Que dire de plus quoi..."
  },
  {
    id: 66,
    name: "Amélie Lens",
    rarity: "LEGENDARY", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Mixer enceinte franchement chapeau"
  },
  {
    id: 67,
    name: "Sara Landry",
    rarity: "MYTHIC", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "La goat finalement"
  },
  {
    id: 68,
    name: "Sub Zero Project",
    rarity: "MYTHIC", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Duo qui arrache tout"
  },
  {
    id: 69,
    name: "Nico Moreno",
    rarity: "MYTHIC", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Il représente la France ce mec"
  },
  {
    id: 70,
    name: "Dr Peacock",
    rarity: "PLATINUM", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Le papa du frenchcore"
  },
  {
    id: 71,
    name: "Klangkuester",
    rarity: "PLATINUM", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Le goat finalement"
  },
  {
    id: 72,
    name: "Dimitri Vegas",
    rarity: "COMMON", 
    category: "Artistes",
    image: "https://picsum.photos/300/200",
    desc: "Limite le patron de Tomorrowland"
  },
];


// ==========================================
// 3. VARIABLES, MONNAIE (TAZ ▲) ET SÉLECTEURS
// ==========================================
let inventory = JSON.parse(localStorage.getItem("festival_inventory")) || {};

const DROP_COST = 100;
const TAZ_REWARDS = {
  COMMON: 25,
  UNCOMMON: 50,
  RARE: 100,
  EPIC: 250,
  LEGENDARY: 600,
  MYTHIC: 1500,
  PLATINUM: 4000,
  SECRET: 15000
};

let savedTaz = parseInt(localStorage.getItem("festival_taz"), 10);
let tazBalance = isNaN(savedTaz) ? 500 : savedTaz;

const spinBtn = document.getElementById("spin-btn");
const resetBtn = document.getElementById("reset-btn");
const rarityFilter = document.getElementById("rarity-filter");
const categoryFilter = document.getElementById("category-filter");
const tazBalanceEl = document.getElementById("taz-balance");
const mixAllBtn = document.getElementById("mix-all-btn");
const crossfaderKnob = document.getElementById("crossfader-knob");

const vinyl = document.getElementById("vinyl");
const platterRing = document.getElementById("platter-ring");
const labelText = document.getElementById("label-text");
const tonearm = document.getElementById("tonearm");
const vuMeter = document.getElementById("vu-meter");
const bpmScreen = document.getElementById("bpm-screen");
const pitchKnob = document.getElementById("pitch-knob");
const revealBox = document.getElementById("card-reveal");
const revealPlaceholder = document.getElementById("reveal-placeholder");

function updateTaz(amount) {
  tazBalance += amount;
  localStorage.setItem("festival_taz", tazBalance);
  if (tazBalanceEl) tazBalanceEl.textContent = tazBalance;
  if (spinBtn) {
    spinBtn.innerHTML = `🔥 LANCER LE DROP (${DROP_COST} <span class="taz-icon">▲</span>)`;
  }
}

// ==========================================
// 4. GESTION DES ONGLETS DE NAVIGATION
// ==========================================
const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    
    btn.classList.add("active");
    const targetPanel = document.getElementById(btn.dataset.target);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});

// ==========================================
// 5. DISQUAIRE, DROP JOURNALIER & TIRAGE (RNG + COLLECTOR 5%)
// ==========================================
const PACK_COSTS = {
  DAILY: 0,
  STANDARD: 100,
  PEAK: 350,
  TARGET: 200
};

let currentPackType = "DAILY";
let collectorInventory = JSON.parse(localStorage.getItem("festival_collectors")) || {};
let claimedWristbands = JSON.parse(localStorage.getItem("festival_vip_claimed")) || {};
let lastDailyDrop = parseInt(localStorage.getItem("festival_last_daily"), 10) || 0;

const packCards = document.querySelectorAll(".vinyl-pack");
const targetCategorySelect = document.getElementById("target-category-select");
const dailyTimerEl = document.getElementById("daily-timer");

function isDailyAvailable() {
  return (Date.now() - lastDailyDrop) >= 86400000; // 24h en millisecondes
}

function refreshSpinButton() {
  if (!spinBtn) return;
  if (currentPackType === "DAILY") {
    if (isDailyAvailable()) {
      spinBtn.innerHTML = `🎁 LANCER LE DROP JOURNALIER (GRATUIT)`;
    } else {
      spinBtn.innerHTML = `⏳ DROP JOURNALIER EN RECHARGE`;
    }
  } else {
    const cost = PACK_COSTS[currentPackType];
    spinBtn.innerHTML = `🔥 LANCER LE DROP (${cost} <span class="taz-icon">▲</span>)`;
  }
}

function updateDailyTimerUI() {
  if (!dailyTimerEl) return;
  const diff = 86400000 - (Date.now() - lastDailyDrop);
  if (diff <= 0) {
    dailyTimerEl.textContent = "✅ Disponible maintenant !";
    dailyTimerEl.style.color = "#00ffcc";
  } else {
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    dailyTimerEl.textContent = `⏳ Dans ${h}h ${m}m ${s}s`;
    dailyTimerEl.style.color = "#ffcc00";
  }
  if (currentPackType === "DAILY") refreshSpinButton();
}

setInterval(updateDailyTimerUI, 1000);

packCards.forEach(pack => {
  pack.addEventListener("click", () => {
    packCards.forEach(p => p.classList.remove("active"));
    pack.classList.add("active");
    currentPackType = pack.dataset.pack;
    refreshSpinButton();
  });
});

function rollRarity(packType) {
  // Le vinyle PEAK retire Commune et Peu Commune (Rare minimum garanti !)
  const pool = Object.values(RARITIES).filter(r => {
    if (packType === "PEAK") return r.id !== "COMMON" && r.id !== "UNCOMMON";
    return true;
  });

  const totalChance = pool.reduce((sum, r) => sum + r.chance, 0);
  const rand = Math.random() * totalChance;
  let cumulative = 0;

  for (const r of pool) {
    cumulative += r.chance;
    if (rand <= cumulative) return r;
  }
  return pool[0];
}

function drawCard(packType) {
  const chosenRarity = rollRarity(packType);
  let pool = CARDS_DB;

  // Si Vinyle Ciblé, on filtre sur la sous-collection choisie
  if (packType === "TARGET" && targetCategorySelect) {
    const targetCat = targetCategorySelect.value.trim().toLowerCase();
    const catCards = CARDS_DB.filter(c => (c.category || "").trim().toLowerCase() === targetCat);
    if (catCards.length > 0) pool = catCards;
  }

  let possibleCards = pool.filter(card => card.rarity === chosenRarity.id);
  if (possibleCards.length === 0) possibleCards = pool;

  const randomCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];
  const isCollector = Math.random() < 0.05; // 5% de chance d'Édition Collector !

  return {
    card: randomCard,
    rarityInfo: RARITIES[randomCard.rarity] || chosenRarity,
    isCollector
  };
}

// ==========================================
// 6. ANIMATION DE LA PLATINE DJ & COÛT EN TAZ
// ==========================================
if (spinBtn) {
  spinBtn.addEventListener("click", () => {
    if (CARDS_DB.length === 0) {
      alert("Ajoute au moins une carte dans CARDS_DB !");
      return;
    }

    if (currentPackType === "DAILY") {
      if (!isDailyAvailable()) {
        alert("Ton Drop Journalier est encore en recharge ! Choisis un autre vinyle au Disquaire.");
        return;
      }
      lastDailyDrop = Date.now();
      localStorage.setItem("festival_last_daily", lastDailyDrop);
      updateDailyTimerUI();
    } else {
      const cost = PACK_COSTS[currentPackType];
      if (tazBalance < cost) {
        alert(`Pas assez de Taz ! Il te faut ${cost} ▲ Taz pour ce vinyle.`);
        return;
      }
      updateTaz(-cost);
      refreshSpinButton();
    }

    spinBtn.disabled = true;
    revealBox.classList.add("hidden");
    revealPlaceholder.classList.remove("hidden");

    vinyl.style.borderColor = "#222";
    platterRing.style.boxShadow = "0 0 25px rgba(0,0,0,0.9)";
    labelText.textContent = "MIXING";
    bpmScreen.textContent = "165.0 BPM";
    pitchKnob.style.top = "15%";
    tonearm.classList.add("playing");
    vinyl.classList.add("spinning");
    vuMeter.classList.add("active");

    const result = drawCard(currentPackType);
    const cardId = result.card.id || (CARDS_DB.indexOf(result.card) + 1);

    setTimeout(() => {
      vinyl.classList.remove("spinning");
      tonearm.classList.remove("playing");
      vuMeter.classList.remove("active");
      pitchKnob.style.top = "42%";

      vinyl.style.borderColor = result.isCollector ? "#ffd700" : result.rarityInfo.color;
      platterRing.style.boxShadow = `0 0 40px ${result.isCollector ? "#ffd700" : result.rarityInfo.color}`;
      labelText.textContent = result.isCollector ? "COLLECTOR" : result.rarityInfo.name;
      bpmScreen.textContent = result.isCollector ? "★ CHROMA" : "DROP !";

      inventory[cardId] = (inventory[cardId] || 0) + 1;
      localStorage.setItem("festival_inventory", JSON.stringify(inventory));

      if (result.isCollector) {
        collectorInventory[cardId] = true;
        localStorage.setItem("festival_collectors", JSON.stringify(collectorInventory));
      }

      revealPlaceholder.classList.add("hidden");
      revealBox.innerHTML = createCardHTML(result.card, result.rarityInfo, null, result.isCollector);
      revealBox.classList.remove("hidden");
      attach3DTiltEvents(revealBox);

      renderInventory();
      renderMixer();
      renderStage();
      spinBtn.disabled = false;
      refreshSpinButton();
    }, 1800);
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("festival_inventory");
    localStorage.removeItem("festival_collectors");
    localStorage.removeItem("festival_vip_claimed");
    inventory = {};
    collectorInventory = {};
    claimedWristbands = {};
    tazBalance = 500;
    updateTaz(0);
    refreshSpinButton();
    revealBox.classList.add("hidden");
    revealPlaceholder.classList.remove("hidden");
    renderInventory();
    renderMixer();
    renderStage();
  });
}

if (rarityFilter) rarityFilter.addEventListener("change", renderInventory);
if (categoryFilter) categoryFilter.addEventListener("change", renderInventory);

// ==========================================
// 7. RENDU DES CARTES, BRACELETS VIP & POKÉDEX
// ==========================================
function createCardHTML(card, rarityInfo, count = null, forceCollector = false) {
  const cardId = card.id || (CARDS_DB.indexOf(card) + 1);
  const isCollector = forceCollector || collectorInventory[cardId];
  const cardNumber = `#${String(cardId).padStart(3, "0")}`;

  return `
    <div class="card rarity-${rarityInfo.id} ${isCollector ? 'collector-edition' : ''}">
      <div class="card-glare"></div>
      <span class="card-number">${cardNumber}</span>
      ${count ? `<span class="card-count">x${count}</span>` : ""}
      <div class="card-image-wrapper">
        <img src="${card.image}" alt="${card.name}">
      </div>
      <div class="card-badges-container">
        ${isCollector ? `<span class="collector-badge">★ COLLECTOR x2</span>` : ""}
        <span class="card-tag">${card.category || 'FESTIVAL'}</span>
        <span class="card-rarity-badge" style="background: ${rarityInfo.color}; color: #040406;">
          ${rarityInfo.name}
        </span>
      </div>
      <h3>${card.name}</h3>
      <p>${card.desc}</p>
    </div>
  `;
}

function createLockedCardHTML(card, rarityInfo) {
  const cardId = card.id || (CARDS_DB.indexOf(card) + 1);
  const cardNumber = `#${String(cardId).padStart(3, "0")}`;
  return `
    <div class="card locked">
      <span class="card-number">${cardNumber}</span>
      <div class="card-image-wrapper">
        <img src="${card.image}" alt="Carte verrouillée" class="silhouette-img">
      </div>
      <div class="locked-overlay">
        <span class="lock-icon">🔒</span>
        <span class="card-tag">${card.category || 'FESTIVAL'}</span>
        <h3>???</h3>
        <p>Rareté : <strong style="color: ${rarityInfo.color}">${rarityInfo.name}</strong></p>
      </div>
    </div>
  `;
}

function attach3DTiltEvents(container) {
  const cards = container.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 20;
      const rotateX = (0.5 - (y / rect.height)) * 20;

      card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });
}

// Calcule automatiquement le nombre de cartes par sous-collection et affiche les Bracelets VIP
function renderVIPWristbands() {
  const vipGrid = document.getElementById("vip-wristbands-grid");
  if (!vipGrid) return;

  const categories = ["Staff", "Public", "Objets", "Camping", "Festivals", "Artistes", "Stand"];
  vipGrid.innerHTML = "";

  categories.forEach(catName => {
    const catLower = catName.toLowerCase();
    const cardsInCat = CARDS_DB.filter(c => (c.category || "").trim().toLowerCase() === catLower);
    const totalInCat = cardsInCat.length;

    let ownedInCat = 0;
    cardsInCat.forEach(c => {
      const cId = c.id || (CARDS_DB.indexOf(c) + 1);
      if ((inventory[cId] || 0) > 0) ownedInCat++;
    });

    const isComplete = totalInCat > 0 && ownedInCat === totalInCat;
    const isClaimed = claimedWristbands[catLower];

    const bandEl = document.createElement("div");
    bandEl.className = `vip-band ${isComplete ? "unlocked" : ""}`;
    bandEl.innerHTML = `
      <div class="vip-band-top">
        <span>${isComplete ? "🎗️" : "🔒"} ${catName}</span>
        <span class="vip-band-count">${ownedInCat} / ${totalInCat}</span>
      </div>
      ${
        isComplete && !isClaimed
          ? `<button class="vip-claim-btn" data-cat="${catLower}">Réclamer +500 ▲</button>`
          : `<span style="font-size:0.7rem; color:${isClaimed ? '#00ffcc' : '#7c748e'};">
              ${isClaimed ? "★ Bracelet VIP Actif" : "Complète la série"}
            </span>`
      }
    `;
    vipGrid.appendChild(bandEl);
  });

  vipGrid.querySelectorAll(".vip-claim-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      if (!claimedWristbands[cat]) {
        claimedWristbands[cat] = true;
        localStorage.setItem("festival_vip_claimed", JSON.stringify(claimedWristbands));
        updateTaz(500);
        refreshSpinButton();
        renderVIPWristbands();
      }
    });
  });
}

function renderInventory() {
  const grid = document.getElementById("inventory-grid");
  const countSpan = document.getElementById("collection-count");
  const uniqueProgress = document.getElementById("unique-progress");
  
  if (!grid) return;

  const selectedRarity = (rarityFilter && rarityFilter.value) ? rarityFilter.value : "ALL";
  const selectedCategory = (categoryFilter && categoryFilter.value) ? categoryFilter.value : "ALL";
  grid.innerHTML = "";

  let totalOwned = 0;
  let uniqueOwned = 0;

  CARDS_DB.forEach((card, index) => {
    const cardId = card.id || (index + 1);
    const ownedCount = inventory[cardId] || 0;

    if (ownedCount > 0) {
      totalOwned += ownedCount;
      uniqueOwned++;
    }

    const matchesRarity = (selectedRarity === "ALL" || !RARITIES[selectedRarity] || card.rarity === selectedRarity);
    const matchesCategory = (selectedCategory === "ALL" || !card.category || card.category.trim().toLowerCase() === selectedCategory.toLowerCase());

    if (matchesRarity && matchesCategory) {
      const rarityInfo = RARITIES[card.rarity] || RARITIES.COMMON;
      if (ownedCount > 0) {
        grid.innerHTML += createCardHTML(card, rarityInfo, ownedCount);
      } else {
        grid.innerHTML += createLockedCardHTML(card, rarityInfo);
      }
    }
  });

  if (countSpan) countSpan.textContent = totalOwned;
  if (uniqueProgress) {
    uniqueProgress.textContent = `Pokédex : ${uniqueOwned} / ${CARDS_DB.length} cartes uniques débloquées`;
  }
  renderVIPWristbands();
  attach3DTiltEvents(grid);
}

// ==========================================
// 8. TABLE DE MIXAGE & TAUX
// ==========================================
function renderMixer() {
  const mixerGrid = document.getElementById("mixer-grid");
  const dupCountEl = document.getElementById("mixer-dup-count");
  const totalTazEl = document.getElementById("mixer-total-taz");
  const mixAllGainEl = document.getElementById("mix-all-gain");

  if (!mixerGrid) return;
  mixerGrid.innerHTML = "";

  let totalDuplicates = 0;
  let totalPotentialTaz = 0;

  CARDS_DB.forEach((card, index) => {
    const cardId = card.id || (index + 1);
    const ownedCount = inventory[cardId] || 0;

    if (ownedCount > 1) {
      const dupCount = ownedCount - 1;
      const rewardPerCard = TAZ_REWARDS[card.rarity] || 25;
      totalDuplicates += dupCount;
      totalPotentialTaz += dupCount * rewardPerCard;

      const rarityInfo = RARITIES[card.rarity] || RARITIES.COMMON;
      const cardWrapper = document.createElement("div");
      cardWrapper.innerHTML = `
        <div class="card rarity-${rarityInfo.id}">
          <div class="card-glare"></div>
          <span class="card-count">Doublons : x${dupCount}</span>
          <div class="card-image-wrapper">
            <img src="${card.image}" alt="${card.name}">
          </div>
          <div class="card-badges-container">
            <span class="card-tag">${card.category || 'FESTIVAL'}</span>
            <span class="card-rarity-badge" style="background: ${rarityInfo.color}; color: #040406;">
              ${rarityInfo.name}
            </span>
          </div>
          <h3>${card.name}</h3>
          <button class="mix-one-btn" data-id="${cardId}" data-reward="${rewardPerCard}">
            🎛️ Mixer 1 (+${rewardPerCard} <span class="taz-icon">▲</span>)
          </button>
        </div>
      `;
      mixerGrid.appendChild(cardWrapper.firstElementChild);
    }
  });

  if (totalDuplicates === 0) {
    mixerGrid.innerHTML = `<p style="color:#7c748e; grid-column: 1/-1;">Aucun doublon à mixer pour le moment. Fais tourner la platine !</p>`;
  }

  if (dupCountEl) dupCountEl.textContent = totalDuplicates;
  if (totalTazEl) totalTazEl.textContent = totalPotentialTaz;
  if (mixAllGainEl) mixAllGainEl.textContent = totalPotentialTaz;
  if (mixAllBtn) mixAllBtn.disabled = totalDuplicates === 0;

  mixerGrid.querySelectorAll(".mix-one-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const reward = parseInt(btn.dataset.reward, 10);
      if (inventory[id] > 1) {
        inventory[id]--;
        localStorage.setItem("festival_inventory", JSON.stringify(inventory));
        updateTaz(reward);
        refreshSpinButton();
        renderInventory();
        renderMixer();
      }
    });
  });

  attach3DTiltEvents(mixerGrid);
}

if (mixAllBtn) {
  mixAllBtn.addEventListener("click", () => {
    let gainedTaz = 0;
    CARDS_DB.forEach((card, index) => {
      const cardId = card.id || (index + 1);
      const ownedCount = inventory[cardId] || 0;
      if (ownedCount > 1) {
        const dupCount = ownedCount - 1;
        const reward = TAZ_REWARDS[card.rarity] || 25;
        gainedTaz += dupCount * reward;
        inventory[cardId] = 1;
      }
    });

    if (gainedTaz > 0) {
      if (crossfaderKnob) crossfaderKnob.classList.toggle("mixing");
      localStorage.setItem("festival_inventory", JSON.stringify(inventory));
      updateTaz(gainedTaz);
      refreshSpinButton();
      renderInventory();
      renderMixer();
    }
  });
}

function renderRatesTable() {
  const list = document.getElementById("rates-list");
  if (!list) return;
  list.innerHTML = Object.values(RARITIES).map(r => `
    <div class="rate-row" style="border-left-color: ${r.color}">
      <span class="rate-name" style="color: ${r.color}">${r.name}</span>
      <span class="rate-val">${r.chance}%</span>
    </div>
  `).join("");
}

// ==========================================
// 9. MODE MAINSTAGE (AVEC BONUS COLLECTOR x2)
// ==========================================
const STAGE_CATEGORIES = [
  { id: "artistes",  title: "🎧 ARTISTES",  category: "Artistes",  x: 50, y: 16 }, // Nord : Mainstage
  { id: "staff",     title: "🛡️ STAFF",     category: "Staff",     x: 20, y: 26 }, // Nord-Ouest : Backstage / Régie
  { id: "festivals", title: "🎪 FESTIVALS", category: "Festivals", x: 80, y: 26 }, // Nord-Est : Arche & Déco
  { id: "public",    title: "🙌 PUBLIC",    category: "Public",    x: 50, y: 48 }, // Centre : La Fosse
  { id: "stand",     title: "🍔 STAND",     category: "Stand",     x: 20, y: 62 }, // Ouest : Bars & Food
  { id: "objets",    title: "🎒 OBJETS",    category: "Objets",    x: 80, y: 62 }, // Est : Merch & Matos
  { id: "camping",   title: "⛺ CAMPING",   category: "Camping",   x: 50, y: 84 }  // Sud : Village Tentes
];

let selectedStageCatId = "artistes";

const STAGE_SLOTS = [];
STAGE_CATEGORIES.forEach(cat => {
  STAGE_SLOTS.push({ id: `${cat.id}_1`, title: `${cat.title} #1`, preferredCategory: cat.category });
  STAGE_SLOTS.push({ id: `${cat.id}_2`, title: `${cat.title} #2`, preferredCategory: cat.category });
});

const STAGE_PRODUCTION = {
  COMMON:    { tazPerHour: 0.2,  db: 10 },
  UNCOMMON:  { tazPerHour: 0.5,  db: 15 },
  RARE:      { tazPerHour: 1,    db: 22 },
  EPIC:      { tazPerHour: 2,    db: 30 },
  LEGENDARY: { tazPerHour: 4,    db: 40 },
  MYTHIC:    { tazPerHour: 8,    db: 55 },
  PLATINUM:  { tazPerHour: 18,   db: 75 },
  SECRET:    { tazPerHour: 40,   db: 100 }
};

let stageLineup = JSON.parse(localStorage.getItem("festival_stage")) || {};
let pendingStageTaz = parseFloat(localStorage.getItem("festival_pending_taz")) || 0;
let lastStageTick = parseInt(localStorage.getItem("festival_last_tick"), 10) || Date.now();

const claimStageBtn = document.getElementById("claim-stage-btn");
const pendingTazEl = document.getElementById("stage-pending-taz");

function calculateStageStats() {
  let totalTazPerHour = 0;
  let totalDb = 0;

  STAGE_SLOTS.forEach(slot => {
    const equippedCardId = stageLineup[slot.id];
    if (!equippedCardId || !inventory[equippedCardId]) return;

    const card = CARDS_DB.find((c, idx) => String(c.id || idx + 1) === String(equippedCardId));
    if (card) {
      const base = STAGE_PRODUCTION[card.rarity] || STAGE_PRODUCTION.COMMON;
      const cardCat = (card.category || "").trim().toLowerCase();
      const slotCat = slot.preferredCategory.toLowerCase();
      const hasSynergy = (cardCat === slotCat);
      const isCollector = collectorInventory[equippedCardId] ? 2 : 1; // x2 si Collector !
      const multiplier = (hasSynergy ? 1.5 : 1) * isCollector;

      totalTazPerHour = +(totalTazPerHour + (base.tazPerHour * multiplier)).toFixed(2);
      totalDb += base.db;
    }
  });

  return { totalTazPerHour, totalDb };
}

function renderStage() {
  const mapContainer = document.getElementById("map-nodes-container");
  const grid = document.getElementById("stage-slots-grid");
  const dbEl = document.getElementById("stage-db");
  const rateEl = document.getElementById("stage-rate");
  const inspectorTitle = document.getElementById("inspector-title");
  const inspectorYield = document.getElementById("inspector-yield");
  if (!grid || !mapContainer) return;

  mapContainer.innerHTML = "";
  grid.innerHTML = "";

  const unlockedCards = CARDS_DB.filter((card, idx) => {
    const id = card.id || (idx + 1);
    return (inventory[id] || 0) > 0;
  });

  // 1. GÉNÉRATION DES 7 PIONS SUR LA CARTE 2D
  STAGE_CATEGORIES.forEach(cat => {
    const slotIds = [`${cat.id}_1`, `${cat.id}_2`];
    let zoneRate = 0;
    let equippedCount = 0;

    const avatarsHTML = slotIds.map(sId => {
      const eqId = stageLineup[sId];
      const card = unlockedCards.find((c, idx) => String(c.id || idx + 1) === String(eqId));
      if (!card) {
        if (eqId) delete stageLineup[sId];
        return `<div class="node-mini-slot">➕</div>`;
      }
      equippedCount++;
      const rarityInfo = RARITIES[card.rarity] || RARITIES.COMMON;
      const base = STAGE_PRODUCTION[card.rarity] || STAGE_PRODUCTION.COMMON;
      const colMult = collectorInventory[eqId] ? 2 : 1;
      zoneRate = +(zoneRate + (base.tazPerHour * 1.5 * colMult)).toFixed(2);

      return `
        <div class="node-mini-slot" style="border: 2px solid ${rarityInfo.color}; box-shadow: 0 0 8px ${rarityInfo.color}">
          <img src="${card.image}" alt="${card.name}">
        </div>
      `;
    }).join("");

    const nodeEl = document.createElement("div");
    nodeEl.className = `map-node ${cat.id === selectedStageCatId ? "active" : ""} ${equippedCount === 2 ? "full" : ""}`;
    nodeEl.style.left = `${cat.x}%`;
    nodeEl.style.top = `${cat.y}%`;
    nodeEl.innerHTML = `
      <span class="node-header">${cat.title}</span>
      <div class="node-avatars">${avatarsHTML}</div>
      <span class="node-rate">+${zoneRate} ▲/h (${equippedCount}/2)</span>
    `;

    nodeEl.addEventListener("click", () => {
      selectedStageCatId = cat.id;
      renderStage();
    });

    mapContainer.appendChild(nodeEl);

    if (cat.id === selectedStageCatId) {
      if (inspectorTitle) inspectorTitle.textContent = `${cat.title} // POSTES #1 & #2`;
      if (inspectorYield) inspectorYield.textContent = `+${zoneRate} ▲ / h`;
    }
  });

  // 2. AFFICHAGE DES 2 CARTES DE LA ZONE SÉLECTIONNÉE À DROITE
  const activeSlots = STAGE_SLOTS.filter(s => s.id.startsWith(selectedStageCatId + "_"));
  const currentlyEquippedIds = Object.values(stageLineup);

  activeSlots.forEach(slot => {
    const equippedId = stageLineup[slot.id];
    const equippedCard = unlockedCards.find((c, idx) => String(c.id || idx + 1) === String(equippedId));
    const slotCatLower = slot.preferredCategory.toLowerCase();

    let cardDisplayHTML = `
      <div class="empty-stage-slot">
        <span style="font-size:2rem;">➕</span>
        <span>${slot.preferredCategory} vacant</span>
      </div>
    `;

    if (equippedCard) {
      const rarityInfo = RARITIES[equippedCard.rarity] || RARITIES.COMMON;
      cardDisplayHTML = createCardHTML(equippedCard, rarityInfo);
    }

    const categoryCards = unlockedCards.filter(
      c => (c.category || "").trim().toLowerCase() === slotCatLower
    );

    const optionsHTML = categoryCards.map(c => {
      const cId = String(c.id || (CARDS_DB.indexOf(c) + 1));
      const isSelected = cId === String(equippedId);
      const isAlreadyUsedElsewhere = currentlyEquippedIds.includes(cId) && !isSelected;
      const ownedCount = inventory[cId] || 0;
      const isDuplicateAllowed = ownedCount > 1;

      if (isAlreadyUsedElsewhere && !isDuplicateAllowed) {
        return `<option value="${cId}" disabled>❌ ${c.name} (Déjà équipée)</option>`;
      }

      const base = STAGE_PRODUCTION[c.rarity] || STAGE_PRODUCTION.COMMON;
      const colMult = collectorInventory[cId] ? 2 : 1;
      const prod = +(base.tazPerHour * 1.5 * colMult).toFixed(2);
      const colStar = collectorInventory[cId] ? "★ " : "";
      return `<option value="${cId}" ${isSelected ? "selected" : ""}>${colStar}${c.name} (+${prod} ▲/h)</option>`;
    }).join("");

    const slotEl = document.createElement("div");
    slotEl.className = "stage-slot-card";
    slotEl.innerHTML = `
      <span class="slot-title">${slot.title}</span>
      <div class="slot-card-preview">${cardDisplayHTML}</div>
      <select class="slot-select" data-slot="${slot.id}">
        <option value="">-- Choisir (${slot.preferredCategory}) --</option>
        ${optionsHTML}
      </select>
    `;

    grid.appendChild(slotEl);
  });

  grid.querySelectorAll(".slot-select").forEach(select => {
    select.addEventListener("change", (e) => {
      const slotId = e.target.dataset.slot;
      const chosenCardId = e.target.value;
      if (chosenCardId) {
        stageLineup[slotId] = chosenCardId;
      } else {
        delete stageLineup[slotId];
      }
      localStorage.setItem("festival_stage", JSON.stringify(stageLineup));
      renderStage();
    });
  });

  const stats = calculateStageStats();
  if (dbEl) dbEl.textContent = `${stats.totalDb} dB`;
  if (rateEl) rateEl.textContent = stats.totalTazPerHour;

  attach3DTiltEvents(grid);
}

function updateStagePassiveIncome() {
  const now = Date.now();
  const elapsedHours = (now - lastStageTick) / 3600000;
  lastStageTick = now;
  localStorage.setItem("festival_last_tick", lastStageTick);

  const { totalTazPerHour } = calculateStageStats();
  if (totalTazPerHour > 0 && elapsedHours > 0) {
    pendingStageTaz += totalTazPerHour * elapsedHours;
    localStorage.setItem("festival_pending_taz", pendingStageTaz);
  }

  const claimableTaz = Math.floor(pendingStageTaz);
  if (pendingTazEl) {
    pendingTazEl.textContent = pendingStageTaz < 1 && pendingStageTaz > 0
      ? pendingStageTaz.toFixed(2)
      : claimableTaz;
  }
  if (claimStageBtn) {
    claimStageBtn.disabled = claimableTaz < 1;
  }
}

setInterval(updateStagePassiveIncome, 1000);

if (claimStageBtn) {
  claimStageBtn.addEventListener("click", () => {
    const claimableTaz = Math.floor(pendingStageTaz);
    if (claimableTaz >= 1) {
      updateTaz(claimableTaz);
      refreshSpinButton();
      pendingStageTaz -= claimableTaz;
      localStorage.setItem("festival_pending_taz", pendingStageTaz);
      updateStagePassiveIncome();
    }
  });
}
// Initialisation globale
updateTaz(0);
updateDailyTimerUI();
refreshSpinButton();
renderInventory();
renderMixer();
renderRatesTable();
renderStage();
updateStagePassiveIncome();
