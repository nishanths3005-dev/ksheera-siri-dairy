/**
 * ==========================================================================
 * KSHEERA SIRI (ಕ್ಷೀರ ಸಿರಿ) — INTERACTIVE APPLICATION CORE
 * Bilingual Translation Engine, Products, Stores, Purity Scanner & Checkout
 * ==========================================================================
 */

// Global State
const appState = {
  currentLang: 'en',
  cart: [],
  selectedCity: 'bengaluru',
  activeProductFilter: 'all',
  validPincodesPrefixes: ['560', '570', '575', '580', '590']
};

// 7 Signature Dairy Products
const dairyProducts = [
  {
    id: 1,
    category: 'milk',
    name_en: 'Farm Fresh Cow Milk',
    name_kn: 'ಹಸು ಹಾಲು (Farm Fresh)',
    badge_en: 'Morning Cold Drop',
    badge_kn: 'ಮುಂಜಾನೆಯ ತಾಜಾ ಹಾಲು',
    emoji: '🥛',
    desc_en: '100% natural, antibiotic-free whole cow milk. Min 3.8% Fat & 8.7% SNF. Zero water dilution.',
    desc_kn: 'ಯಾವುದೇ ರಾಸಾಯನಿಕ, ನೀರು ಅಥವಾ ಪ್ರಿಸರ್ವೇಟಿವ್ ಇಲ್ಲದ ಅಪ್ಪಟ ಹಸು ಹಾಲು.',
    price: 32,
    pack_en: '500ml Cold Pouch',
    pack_kn: '೫೦೦ ಮಿ.ಲೀ. ಪ್ಯಾಕ್'
  },
  {
    id: 2,
    category: 'curd',
    name_en: 'Velvet Set Curd (Mosaru)',
    name_kn: 'ಮಧುರ ಗಟ್ಟಿ ಮೊಸರು',
    badge_en: 'Probiotic Rich',
    badge_kn: 'ಪ್ರೊಬಯೋಟಿಕ್ ಯುಕ್ತ',
    emoji: '🥣',
    desc_en: 'Traditional thick set curd with live bacterial culture. Naturally sweet, zero gelatin or starches.',
    desc_kn: 'ಅಜ್ಜಿಯ ಕೈ ರುಚಿಯ ಸಾಂಪ್ರದಾಯಿಕ ಗಟ್ಟಿ ಮೊಸರು. ಹೊಟ್ಟೆಯ ಆರೋಗ್ಯಕ್ಕೆ ಅತ್ಯುತ್ತಮ.',
    price: 35,
    pack_en: '450g Fresh Tub',
    pack_kn: '೪೫೦ ಗ್ರಾಂ ಟಬ್'
  },
  {
    id: 3,
    category: 'ghee',
    name_en: 'Traditional Bilona Cow Ghee',
    name_kn: 'ಸಾಂಪ್ರದಾಯಿಕ ಬಲೋನಾ ತುಪ್ಪ',
    badge_en: 'Curd Churned Bilona',
    badge_kn: 'ಮಂಥನ ಪದ್ಧತಿಯ ತುಪ್ಪ',
    emoji: '🧈',
    desc_en: 'Handcrafted by churning whole milk curd. Coarse golden granules with an intoxicating village aroma.',
    desc_kn: 'ಹರಳಿನಂತ ಬಂಗಾರದ ತುಪ್ಪ. ಮೈಸೂರು ಪಾಕ್, ಹೋಳಿಗೆ ಹಾಗೂ ಊಟಕ್ಕೆ ಸಾಟಿಯಿಲ್ಲದ ಸುವಾಸನೆ.',
    price: 650,
    pack_en: '500ml Glass Jar',
    pack_kn: '೫೦೦ ಮಿ.ಲೀ. ಗ್ಲಾಸ್ ಜಾರ್'
  },
  {
    id: 4,
    category: 'ghee',
    name_en: 'Karnataka Farm Butter',
    name_kn: 'ದಾವಣಗೆರೆ ಶೈಲಿಯ ಹಳ್ಳಿ ಬೆಣ್ಣೆ',
    badge_en: 'Freshly Churned',
    badge_kn: 'ತಾಜಾ ಬೆಣ್ಣೆ',
    emoji: '🥞',
    desc_en: 'Fresh, unsalted white and golden butter. The gold standard for Davanagere Benne Dosa & warm rotis.',
    desc_kn: 'ದಾವಣಗೆರೆ ಬೆಣ್ಣೆ ದೋಸೆ, ಅಕ್ಕಿ ರೊಟ್ಟಿ ಹಾಗೂ ಬಿಸಿ ಅನ್ನಕ್ಕೆ ಹೇಳಿ ಮಾಡಿಸಿದ ಬೆಣ್ಣೆ.',
    price: 115,
    pack_en: '200g Fresh Pack',
    pack_kn: '೨೦೦ ಗ್ರಾಂ ಪ್ಯಾಕ್'
  },
  {
    id: 5,
    category: 'paneer',
    name_en: 'Soft Malai Paneer',
    name_kn: 'ತಾಜಾ ಮಲೈ ಪನೀರ್',
    badge_en: '18g Protein / 100g',
    badge_kn: 'ಪ್ರೋಟೀನ್ ಸಮೃದ್ಧ',
    emoji: '🧀',
    desc_en: 'Melt-in-mouth cottage cheese crafted from single-origin morning milk. No citric preservatives.',
    desc_kn: 'ಬಾಯಲ್ಲಿ ಕರಗುವ ಅತ್ಯಂತ ಮೃದುವಾದ ಮತ್ತು ನೈಸರ್ಗಿಕ ಪೋಷಕಾಂಶಗಳಿರುವ ತಾಜಾ ಪನೀರ್.',
    price: 110,
    pack_en: '200g Vacuum Fresh',
    pack_kn: '೨೦೦ ಗ್ರಾಂ ಪ್ಯಾಕ್'
  },
  {
    id: 6,
    category: 'paneer',
    name_en: 'Artisanal Farmstead Cheese',
    name_kn: 'ಫಾರ್ಮ್‌ಸ್ಟೆಡ್ ಚೀಸ್',
    badge_en: 'Small-Batch Craft',
    badge_kn: 'ಕರಕುಶಲ ಚೀಸ್',
    emoji: '🍕',
    desc_en: 'Mild gouda and stretchy fresh mozzarella made locally at our Malnad micro-creameries.',
    desc_kn: 'ಮಲೆನಾಡಿನ ಡೈರಿ ಫಾರ್ಮ್‌ಗಳಲ್ಲಿ ತಯಾರಿಸಿದ ಶುದ್ಧ ಮತ್ತು ರುಚಿಕರ ಚೀಸ್.',
    price: 185,
    pack_en: '200g Artisan Block',
    pack_kn: '೨೦೦ ಗ್ರಾಂ ಬ್ಲಾಕ್'
  },
  {
    id: 7,
    category: 'flavoured',
    name_en: 'Roasted Badam & Elaichi Milk',
    name_kn: 'ಬಾದಾಮಿ-ಏಲಕ್ಕಿ ಸುವಾಸಿತ ಹಾಲು',
    badge_en: 'Real Coorg Cardamom',
    badge_kn: 'ಕೊಡಗಿನ ಅಸಲಿ ಏಲಕ್ಕಿ',
    emoji: '🧋',
    desc_en: 'Chilled whole milk infused with California roasted badam slivers, Kashmiri saffron, and Coorg elaichi.',
    desc_kn: 'ಕೊಡಗಿನ ಏಲಕ್ಕಿ ಮತ್ತು ಅಸಲಿ ಬಾದಾಮಿ-ಕೇಸರಿ ಸತ್ವವಿರುವ ಅತ್ಯಂತ ರುಚಿಕರ ತಂಪು ಹಾಲು.',
    price: 45,
    pack_en: '200ml Chilled Bottle',
    pack_kn: '೨೦೦ ಮಿ.ಲೀ. ಬಾಟಲ್'
  }
];

// Karnataka Stores Directory across 5 Key Cities
const storeLocations = {
  bengaluru: [
    {
      name: 'Ksheera Siri Flagship Parlour',
      locality: 'Jayanagar 4th Block',
      address: '14th Main Rd, Opp. Post Office Circle, Bengaluru 560011',
      timings: '05:30 AM - 09:30 PM',
      stock_en: '🟢 Fresh Morning Batch Ready',
      stock_kn: '🟢 ಇಂದಿನ ತಾಜಾ ಹಾಲು ಲಭ್ಯವಿದೆ',
      map_query: 'Jayanagar+4th+Block+Bengaluru'
    },
    {
      name: 'Indiranagar Dairy Lounge',
      locality: '100ft Road, Indiranagar',
      address: 'Near 12th Main Junction, Indiranagar, Bengaluru 560038',
      timings: '06:00 AM - 10:00 PM',
      stock_en: '🟢 Fresh Paneer Available',
      stock_kn: '🟢 ತಾಜಾ ಪನೀರ್ ಲಭ್ಯವಿದೆ',
      map_query: '100ft+Road+Indiranagar+Bengaluru'
    },
    {
      name: 'Malleshwaram Heritage Milk Point',
      locality: '8th Cross, Margosa Road',
      address: 'Near Circle Maramma Temple, Bengaluru 560003',
      timings: '05:30 AM - 09:00 PM',
      stock_en: '🟢 Fresh Bilona Ghee on Tap',
      stock_kn: '🟢 ಶುದ್ಧ ತುಪ್ಪ ಲಭ್ಯವಿದೆ',
      map_query: 'Margosa+Road+Malleshwaram+Bengaluru'
    },
    {
      name: 'Whitefield Green Dairy Hub',
      locality: 'ITPL Main Road',
      address: 'Opposite Prestige Ozone, Whitefield, Bengaluru 560066',
      timings: '06:00 AM - 09:30 PM',
      stock_en: '🟢 Morning Milk & Curd Ready',
      stock_kn: '🟢 ಹಾಲು ಮತ್ತು ಮೊಸರು ಸಿದ್ಧವಿದೆ',
      map_query: 'Whitefield+ITPL+Bengaluru'
    }
  ],
  mysuru: [
    {
      name: 'Mysuru Heritage Milk Centre',
      locality: 'Saraswathipuram',
      address: 'Near Swimming Pool Circle, Saraswathipuram, Mysuru 570009',
      timings: '05:30 AM - 09:00 PM',
      stock_en: '🟢 Fresh Morning Batch Ready',
      stock_kn: '🟢 ಬೆಳಗಿನ ಹಾಲು ಲಭ್ಯವಿದೆ',
      map_query: 'Saraswathipuram+Mysuru'
    },
    {
      name: 'Gokulam Organic Dairy Parlour',
      locality: '3rd Stage, Gokulam',
      address: 'Opp. Doctors Corner, Gokulam, Mysuru 570002',
      timings: '06:00 AM - 09:30 PM',
      stock_en: '🟢 Bilona Ghee & Butter Ready',
      stock_kn: '🟢 ತುಪ್ಪ ಮತ್ತು ಬೆಣ್ಣೆ ಲಭ್ಯವಿದೆ',
      map_query: 'Gokulam+Mysuru'
    }
  ],
  mangaluru: [
    {
      name: 'Coastal Ksheera Siri Booth',
      locality: 'Kadri Hills',
      address: 'Near Kadri Manjunatha Temple Road, Mangaluru 575002',
      timings: '05:30 AM - 08:30 PM',
      stock_en: '🟢 Fresh Cold Milk Ready',
      stock_kn: '🟢 ತಾಜಾ ಹಾಲು ಲಭ್ಯವಿದೆ',
      map_query: 'Kadri+Mangaluru'
    },
    {
      name: 'Bejai Fresh Dairy Store',
      locality: 'Bejai New Road',
      address: 'Opposite KSRTC Main Terminal, Mangaluru 575004',
      timings: '06:00 AM - 09:00 PM',
      stock_en: '🟢 Fresh Curd Tubs Ready',
      stock_kn: '🟢 ಗಟ್ಟಿ ಮೊಸರು ಲಭ್ಯವಿದೆ',
      map_query: 'Bejai+Mangaluru'
    }
  ],
  hubballi: [
    {
      name: 'Vidyanagar Dairy Parlour',
      locality: 'Shirur Park Road',
      address: 'Near KIMS Main Gate, Vidyanagar, Hubballi 580021',
      timings: '06:00 AM - 09:00 PM',
      stock_en: '🟢 Fresh Morning Batch Ready',
      stock_kn: '🟢 ತಾಜಾ ಹಾಲು ಲಭ್ಯವಿದೆ',
      map_query: 'Vidyanagar+Hubballi'
    },
    {
      name: 'Dharwad Heritage Hub',
      locality: 'Jubilee Circle',
      address: 'Station Road, Near Court Circle, Dharwad 580001',
      timings: '06:00 AM - 09:30 PM',
      stock_en: '🟢 Pure Milk & Ghee Stocked',
      stock_kn: '🟢 ಹಾಲು ಹಾಗೂ ತುಪ್ಪ ಲಭ್ಯವಿದೆ',
      map_query: 'Jubilee+Circle+Dharwad'
    }
  ],
  belagavi: [
    {
      name: 'Tilakwadi Fresh Dairy Express',
      locality: 'Congress Road, Tilakwadi',
      address: 'Near 2nd Railway Gate, Tilakwadi, Belagavi 590006',
      timings: '06:00 AM - 08:30 PM',
      stock_en: '🟢 Fresh Morning Batch Ready',
      stock_kn: '🟢 ಬೆಳಗಿನ ಹಾಲು ಸಿದ್ಧವಿದೆ',
      map_query: 'Tilakwadi+Belagavi'
    },
    {
      name: 'Camp Market Milk Depot',
      locality: 'Camp Cantonment',
      address: 'Near Military Camp Gate, Belagavi 590001',
      timings: '06:00 AM - 09:00 PM',
      stock_en: '🟢 Pure Butter & Paneer Ready',
      stock_kn: '🟢 ಬೆಣ್ಣೆ ಮತ್ತು ಪನೀರ್ ಲಭ್ಯವಿದೆ',
      map_query: 'Camp+Belagavi'
    }
  ]
};

// Batch Telemetry Database for Purity Scanner
const batchDatabase = {
  'MND-0430-A': {
    cluster: 'Mandya (Srirangapatna Dairy Cluster)',
    time: 'Today 04:30 AM',
    temp: '3.8°C (Cold-Chain Verified)',
    fat: '3.9%',
    snf: '8.8%',
    adulterants: '0.0% (Zero Detergent, Zero Urea)',
    aflatoxin: 'Passed (< 0.05 ppb Safe Limit)',
    farmers_count: '142 smallholders'
  },
  'HSN-0515-B': {
    cluster: 'Hassan (Holenarasipura Cooperative)',
    time: 'Today 05:15 AM',
    temp: '3.7°C (Cold-Chain Verified)',
    fat: '4.1%',
    snf: '8.9%',
    adulterants: '0.0% (Zero Water Dilution)',
    aflatoxin: 'Passed (Undetected)',
    farmers_count: '98 smallholders'
  },
  'MLN-0600-C': {
    cluster: 'Malnad Shimoga (Tirthahalli Pastures)',
    time: 'Today 06:00 AM',
    temp: '3.9°C (Cold-Chain Verified)',
    fat: '4.2%',
    snf: '9.0%',
    adulterants: '0.0% (100% Single Origin Pure)',
    aflatoxin: 'Passed (A2 Certified)',
    farmers_count: '115 smallholders'
  }
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initLanguageEngine();
  renderProductsCatalog('all');
  renderStoresList('bengaluru');
  initPurityScanner();
  initTrialCalculator();
  initCartDrawer();
  initPincodeModal();
  initMobileMenu();
});

/* ==========================================================================
   1. BILINGUAL LANGUAGE ENGINE (ENGLISH <-> KANNADA)
   ========================================================================== */

function initLanguageEngine() {
  const langBtn = document.getElementById('lang-btn');
  const langIndicator = document.getElementById('lang-indicator');

  langBtn.addEventListener('click', () => {
    appState.currentLang = appState.currentLang === 'en' ? 'kn' : 'en';
    document.documentElement.setAttribute('data-lang', appState.currentLang);

    if (appState.currentLang === 'kn') {
      langIndicator.textContent = 'ಕನ್ನಡ (KN)';
    } else {
      langIndicator.textContent = 'English (EN)';
    }

    // Update all elements with data-en & data-kn attributes
    document.querySelectorAll('[data-en]').forEach(el => {
      const text = el.getAttribute(`data-${appState.currentLang}`);
      if (text) {
        el.textContent = text;
      }
    });

    // Re-render dynamic lists with new language context
    renderProductsCatalog(appState.activeProductFilter);
    renderStoresList(appState.selectedCity);
    updateCartUI();
  });
}

/* ==========================================================================
   2. PRODUCT SHOWCASE RENDERING & CATEGORY FILTERING
   ========================================================================== */

function renderProductsCatalog(category) {
  appState.activeProductFilter = category;
  const container = document.getElementById('products-catalog');
  if (!container) return;

  container.innerHTML = '';
  const filtered = category === 'all' 
    ? dairyProducts 
    : dairyProducts.filter(item => item.category === category);

  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-item-card';

    const isKn = appState.currentLang === 'kn';
    const title = isKn ? p.name_kn : p.name_en;
    const subTitle = isKn ? p.name_en : p.name_kn;
    const desc = isKn ? p.desc_kn : p.desc_en;
    const badge = isKn ? p.badge_kn : p.badge_en;
    const pack = isKn ? p.pack_kn : p.pack_en;
    const addBtnText = isKn ? '+ ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿ' : '+ Add to Bag';

    card.innerHTML = `
      <div class="product-media">
        <span class="product-badge-flag">${badge}</span>
        <div class="product-icon">${p.emoji}</div>
      </div>
      <h3 class="product-title">${title}</h3>
      <div class="product-kannada-sub">${subTitle}</div>
      <p class="product-description">${desc}</p>
      <div class="product-action-row">
        <div class="product-price-box">
          <span class="price-currency">₹${p.price}</span>
          <span class="pack-size">${pack}</span>
        </div>
        <button class="btn btn-primary btn-sm add-cart-btn" data-id="${p.id}">
          ${addBtnText}
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach Add to Cart Listeners
  container.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = parseInt(btn.getAttribute('data-id'), 10);
      addToCart(prodId);
    });
  });

  // Bind filter buttons
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-filter') === category);
  });
}

// Filter Tab Click Handlers
document.querySelectorAll('.filter-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    renderProductsCatalog(filter);
  });
});

/* ==========================================================================
   3. PURITY SCANNER SIMULATOR (BATCH TRACEABILITY)
   ========================================================================== */

function initPurityScanner() {
  const input = document.getElementById('batch-code-input');
  const runBtn = document.getElementById('run-scan-btn');
  const sampleChips = document.querySelectorAll('.sample-code-chip');

  sampleChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const code = chip.getAttribute('data-code');
      input.value = code;
      executeScan(code);
    });
  });

  runBtn.addEventListener('click', () => {
    executeScan(input.value.trim());
  });

  // Execute initial scan on load
  executeScan('MND-0430-A');
}

function executeScan(rawCode) {
  const code = rawCode.toUpperCase();
  const resultCard = document.getElementById('scan-result-container');
  const data = batchDatabase[code] || batchDatabase['MND-0430-A'];

  const isKn = appState.currentLang === 'kn';

  resultCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E2E8F0; padding-bottom: 12px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
      <div>
        <h4 style="font-size: 1.15rem; color: #0B2545;">
          ${isKn ? 'ಪರಿಶೀಲಿಸಿದ ಬ್ಯಾಚ್:' : 'Verified Batch:'} <span style="color: #1E5631;">${code}</span>
        </h4>
        <span style="font-size: 0.85rem; color: #64748B;">📍 ${data.cluster} • ⏰ ${data.time}</span>
      </div>
      <span style="background: #DCFCE7; color: #15803D; font-size: 0.78rem; font-weight: 700; padding: 4px 12px; border-radius: 9999px;">
        ✓ ${isKn ? '೧೦೦% ಕಲಬೆರಕೆ-ಮುಕ್ತ ಪ್ರಮಾಣೀಕೃತ' : '100% Purity Certified'}
      </span>
    </div>

    <div class="scan-result-grid">
      <div class="scan-metric-box">
        <strong>${data.fat}</strong>
        <small>${isKn ? 'ನೈಸರ್ಗಿಕ ಕೊಬ್ಬು (Fat)' : 'Natural Milk Fat'}</small>
      </div>
      <div class="scan-metric-box">
        <strong>${data.snf}</strong>
        <small>${isKn ? 'ಎಸ್.ಎನ್.ಎಫ್ (SNF)' : 'Solid Not Fat (SNF)'}</small>
      </div>
      <div class="scan-metric-box">
        <strong>${data.temp}</strong>
        <small>${isKn ? 'ಶೀತಲೀಕರಣ ತಾಪಮಾನ' : 'Cold Storage Temp'}</small>
      </div>
      <div class="scan-metric-box">
        <strong>${data.adulterants}</strong>
        <small>${isKn ? 'ಕೃತಕ ಅಂಶಗಳು' : 'Adulterants Check'}</small>
      </div>
    </div>
    
    <div style="margin-top: 14px; font-size: 0.82rem; color: #475569; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
      <span>🛡️ FSSAI Central Lab Protocol #KA-9920-FMCG</span>
      <span>👨‍🌾 Collected ethically from ${data.farmers_count}</span>
    </div>
  `;
}

/* ==========================================================================
   4. STORE LOCATOR ENGINE
   ========================================================================== */

function renderStoresList(cityKey, searchQuery = '') {
  appState.selectedCity = cityKey;
  const container = document.getElementById('stores-grid-wrapper');
  if (!container) return;

  container.innerHTML = '';
  const list = storeLocations[cityKey] || [];
  const query = searchQuery.toLowerCase().trim();

  const filtered = query === '' 
    ? list 
    : list.filter(s => s.locality.toLowerCase().includes(query) || s.address.toLowerCase().includes(query) || s.name.toLowerCase().includes(query));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; background: white; border-radius: 12px; border: 1px dashed #CBD5E1;">
        <span style="font-size: 2.5rem; display: block; margin-bottom: 8px;">📍</span>
        <p style="color: #64748B;">No parlours found matching "<strong>${searchQuery}</strong>" in ${cityKey.toUpperCase()}. Try searching another locality or city.</p>
      </div>
    `;
    return;
  }

  const isKn = appState.currentLang === 'kn';

  filtered.forEach(s => {
    const card = document.createElement('div');
    card.className = 'store-item-card';

    const stockMsg = isKn ? s.stock_kn : s.stock_en;
    const dirBtn = isKn ? 'ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ನೋಡಿ →' : 'Get Directions →';

    card.innerHTML = `
      <div>
        <h3 class="store-title">${s.name}</h3>
        <div class="store-locality-tag">📍 ${s.locality}</div>
        <p class="store-full-addr">${s.address}</p>
        <p style="font-size: 0.8rem; color: #475569; margin-bottom: 12px;">⏰ ${s.timings}</p>
      </div>
      <div class="store-footer-meta">
        <span class="store-stock-tag">${stockMsg}</span>
        <a href="https://maps.google.com/?q=${encodeURIComponent(s.name + ' ' + s.address)}" target="_blank" class="store-map-link">
          ${dirBtn}
        </a>
      </div>
    `;
    container.appendChild(card);
  });

  // Highlight active city button
  document.querySelectorAll('.city-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-city') === cityKey);
  });
}

// City Button Listeners
document.querySelectorAll('.city-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const city = btn.getAttribute('data-city');
    document.getElementById('store-search-input').value = '';
    renderStoresList(city);
  });
});

// Store Search Input
const storeSearchInput = document.getElementById('store-search-input');
const clearSearchBtn = document.getElementById('clear-store-search');

if (storeSearchInput) {
  storeSearchInput.addEventListener('input', (e) => {
    renderStoresList(appState.selectedCity, e.target.value);
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    storeSearchInput.value = '';
    renderStoresList(appState.selectedCity);
  });
}

/* ==========================================================================
   5. 7-DAY TRIAL CALCULATOR & WHATSAPP GENERATOR
   ========================================================================== */

function initTrialCalculator() {
  const prodSelect = document.getElementById('calc-product-select');
  const citySelect = document.getElementById('calc-city-select');
  const priceDisplay = document.getElementById('calc-display-price');
  const bookBtn = document.getElementById('book-trial-whatsapp-btn');

  function calculatePrice() {
    const prodVal = prodSelect.value;
    let price = 224; // 32 * 7
    let productName = 'Farm Fresh Cow Milk (500ml/day)';

    if (prodVal === 'cow-milk-1000') {
      price = 448; // 64 * 7
      productName = 'Farm Fresh Cow Milk (1 Litre/day)';
    } else if (prodVal === 'combo-pack') {
      price = 330;
      productName = 'Breakfast Combo (500ml Milk + Curd)';
    }

    priceDisplay.textContent = `₹${price}`;
    return { price, productName, city: citySelect.value };
  }

  prodSelect.addEventListener('change', calculatePrice);
  citySelect.addEventListener('change', calculatePrice);

  bookBtn.addEventListener('click', () => {
    const { price, productName, city } = calculatePrice();
    const isKn = appState.currentLang === 'kn';

    let msg = `Namaskara Ksheera Siri! I would like to book the *7-Day Fresh Morning Milk Trial*:\n\n` +
              `📦 Package: ${productName}\n` +
              `📍 City: ${city}\n` +
              `💰 Trial Price: ₹${price} (Free doorstep delivery before 5:30 AM)\n\n` +
              `Please confirm my morning slot!`;

    if (isKn) {
      msg = `ನಮಸ್ಕಾರ ಕ್ಷೀರ ಸಿರಿ ತಂಡಕ್ಕೆ! ನಾನು ೭ ದಿನಗಳ ಬೆಳಗಿನ ಹಾಲಿನ ಟ್ರಯಲ್ ಬುಕ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ:\n\n` +
            `📦 ಪ್ಯಾಕೇಜ್: ${productName}\n` +
            `📍 ನಗರ: ${city}\n` +
            `💰 ಮೊತ್ತ: ₹${price} (ಮುಂಜಾನೆ ೫:೩೦ ರೊಳಗೆ ಉಚಿತ ಮನೆ ವಿತರಣೆ)\n\n` +
            `ದಯವಿಟ್ಟು ದೃಢೀಕರಿಸಿ!`;
    }

    window.open(`https://wa.me/919880474744?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // Link other CTA buttons to scroll to trial calculator
  const triggerBtns = ['hero-order-btn', 'subscribe-cta-btn', 'mobile-trial-btn'];
  triggerBtns.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', () => {
        document.getElementById('trial-calculator').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
}

/* ==========================================================================
   6. CART DRAWER & INSTANT WHATSAPP CHECKOUT
   ========================================================================== */

function initCartDrawer() {
  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const checkoutBtn = document.getElementById('checkout-whatsapp-btn');

  function openDrawer() {
    cartDrawer.classList.add('open');
    overlay.classList.add('active');
    cartDrawer.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    cartDrawer.classList.remove('open');
    overlay.classList.remove('active');
    cartDrawer.setAttribute('aria-hidden', 'true');
  }

  cartBtn.addEventListener('click', openDrawer);
  closeCartBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  checkoutBtn.addEventListener('click', () => {
    if (appState.cart.length === 0) return;

    const isKn = appState.currentLang === 'kn';
    let summaryText = isKn ? `ನಮಸ್ಕಾರ ಕ್ಷೀರ ಸಿರಿ! ನಾನು ಈ ಕೆಳಗಿನ ತಾಜಾ ಉತ್ಪನ್ನಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ:\n\n` 
                           : `Namaskara Ksheera Siri! I would like to place an order for tomorrow morning:\n\n`;

    let total = 0;
    appState.cart.forEach((item, index) => {
      const prod = dairyProducts.find(p => p.id === item.id);
      const name = isKn ? prod.name_kn : prod.name_en;
      const subtotal = prod.price * item.qty;
      total += subtotal;
      summaryText += `${index + 1}. ${name} (${prod.pack_en}) x ${item.qty} = ₹${subtotal}\n`;
    });

    summaryText += `\n💰 Total Amount: ₹${total}\n🚚 Requesting delivery before 05:30 AM.\nPlease share payment details!`;

    window.open(`https://wa.me/919880474744?text=${encodeURIComponent(summaryText)}`, '_blank');
  });
}

function addToCart(productId) {
  const existing = appState.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    appState.cart.push({ id: productId, qty: 1 });
  }

  updateCartUI();
  // Open cart drawer on first add
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('active');
}

function updateCartUI() {
  const counter = document.getElementById('cart-counter');
  const container = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-drawer-footer');
  const totalAmountEl = document.getElementById('cart-total-amount');

  const totalCount = appState.cart.reduce((sum, item) => sum + item.qty, 0);
  counter.textContent = totalCount;

  if (appState.cart.length === 0) {
    footer.style.display = 'none';
    const isKn = appState.currentLang === 'kn';
    container.innerHTML = `
      <div class="empty-cart-state">
        <span class="empty-icon">🥛</span>
        <p>${isKn ? 'ನಿಮ್ಮ ಬುಟ್ಟಿ ಖಾಲಿಯಾಗಿದೆ. ತಾಜಾ ಹಾಲು ಅಥವಾ ಮೊಸರು ಸೇರಿಸಿ!' : 'Your morning basket is empty. Add fresh cow milk or curd to start!'}</p>
      </div>
    `;
    return;
  }

  footer.style.display = 'block';
  container.innerHTML = '';
  let grandTotal = 0;
  const isKn = appState.currentLang === 'kn';

  appState.cart.forEach(item => {
    const product = dairyProducts.find(p => p.id === item.id);
    const itemTotal = product.price * item.qty;
    grandTotal += itemTotal;

    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-info">
        <strong>${isKn ? product.name_kn : product.name_en}</strong>
        <small>₹${product.price} / ${product.pack_en}</small>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="modifyQty(${product.id}, -1)">-</button>
        <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.qty}</span>
        <button class="qty-btn" onclick="modifyQty(${product.id}, 1)">+</button>
      </div>
    `;
    container.appendChild(row);
  });

  totalAmountEl.textContent = `₹${grandTotal}`;
}

// Global Quantity Modifier
window.modifyQty = function(productId, delta) {
  const index = appState.cart.findIndex(i => i.id === productId);
  if (index !== -1) {
    appState.cart[index].qty += delta;
    if (appState.cart[index].qty <= 0) {
      appState.cart.splice(index, 1);
    }
    updateCartUI();
  }
};

/* ==========================================================================
   7. PINCODE VALIDATOR MODAL
   ========================================================================== */

function initPincodeModal() {
  const openBtn = document.getElementById('pincode-trigger-btn');
  const closeBtn = document.getElementById('close-pincode-btn');
  const modal = document.getElementById('pincode-modal');
  const validateBtn = document.getElementById('validate-pincode-btn');
  const input = document.getElementById('pincode-input');
  const feedback = document.getElementById('pincode-feedback');

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    input.focus();
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    feedback.textContent = '';
  });

  validateBtn.addEventListener('click', () => {
    const pin = input.value.trim();
    const isKn = appState.currentLang === 'kn';

    if (pin.length !== 6 || isNaN(pin)) {
      feedback.className = 'pincode-feedback pincode-error';
      feedback.textContent = isKn ? 'ದಯವಿಟ್ಟು ಸರಿಯಾದ ೬ ಅಂಕಿಯ ಪಿನ್‌ಕೋಡ್ ನಮೂದಿಸಿ.' : 'Please enter a valid 6-digit postal code.';
      return;
    }

    const prefix = pin.substring(0, 3);
    if (appState.validPincodesPrefixes.includes(prefix)) {
      feedback.className = 'pincode-feedback pincode-success';
      feedback.textContent = isKn 
        ? `🎉 ಅಭಿನಂದನೆಗಳು! ಪಿನ್‌ಕೋಡ್ ${pin} ನಲ್ಲಿ ಮುಂಜಾನೆ ೫:೩೦ ರೊಳಗಾಗಿ ನೇರ ಡೆಲಿವರಿ ಲಭ್ಯವಿದೆ.`
        : `🎉 Great news! Pincode ${pin} is eligible for 5:30 AM morning cold-chain delivery.`;
    } else {
      feedback.className = 'pincode-feedback pincode-error';
      feedback.textContent = isKn
        ? `ಕ್ಷಮಿಸಿ, ಪಿನ್‌ಕೋಡ್ ${pin} ನಲ್ಲಿ ಶೀಘ್ರದಲ್ಲೇ ಆರಂಭವಾಗಲಿದೆ. ಮೈಸೂರು, ಬೆಂಗಳೂರು, ಹುಬ್ಬಳ್ಳಿ ಅಥವಾ ಬೆಳಗಾವಿ ಪ್ರಯತ್ನಿಸಿ.`
        : `We are currently not serving pincode ${pin}. Available across Bengaluru (560xxx), Mysuru (570xxx), Mangaluru (575xxx), Hubballi (580xxx) and Belagavi (590xxx).`;
    }
  });
}

/* ==========================================================================
   8. MOBILE RESPONSIVE HAMBURGER NAVIGATION
   ========================================================================== */

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobilePanel = document.getElementById('mobile-nav-panel');

  if (toggleBtn && mobilePanel) {
    toggleBtn.addEventListener('click', () => {
      mobilePanel.classList.toggle('open');
    });

    mobilePanel.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('open');
      });
    });
  }
}
