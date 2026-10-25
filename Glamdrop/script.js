/* script.js – GlamDrop Real E-Commerce Engine */

/*** ==========================================================================
     1. Curated Fashion & Lifestyle Catalog
     - 100% Exact Photo-to-Item Match
     - Real Fashion Brands
     - Strict Safety Rule: Absolutely zero wolf/animal monster graphics.
     ========================================================================== ***/
const PRODUCTS = [
  // --- WOMEN'S WESTERN DRESSES ---
  {
    id: 1,
    brand: "ANTHEAA",
    name: "Floral Print Pastel Georgette Midi Dress",
    category: "Women",
    badge: "BESTSELLER",
    price: 2999,
    discount: 45,
    rating: 4.6,
    reviews: "2.3k",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#F3E8EE", "#FFD1DC", "#FFF9FB"],
    description: "Delicate peach blossom floral print midi dress crafted with breathable georgette fabric, featuring an A-line flare, sweetheart neckline, and concealed side zipper.",
  },
  {
    id: 2,
    brand: "TOKYO TALKIES",
    name: "Lavender Soft Cable Knit Cropped Cardigan",
    category: "Women",
    badge: "TRENDING",
    price: 2499,
    discount: 40,
    rating: 4.5,
    reviews: "1.4k",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=80",
    sizes: ["S", "M", "L"],
    colors: ["#E6E6FA", "#FAF7F2", "#F3E8EE"],
    description: "Ultra-soft pastel lavender cotton blend cardigan with vintage pearl buttons. Perfect lightweight layering piece for all seasons.",
  },
  {
    id: 3,
    brand: "STREET 9",
    name: "High-Waist Wide-Leg Pleated Beige Trousers",
    category: "Women",
    badge: "NEW",
    price: 2799,
    discount: 35,
    rating: 4.6,
    reviews: "950",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=700&q=80",
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["#FAF7F2", "#E8D8C8"],
    description: "Chic wide-leg tailored trousers made from premium breathable linen blend with deep slant pockets and structured front pleats.",
  },
  {
    id: 4,
    brand: "SASSAFRAS",
    name: "Emerald Green Silk Slip Evening Gown",
    category: "Women",
    badge: "HOT DEAL",
    price: 3999,
    discount: 40,
    rating: 4.7,
    reviews: "1.1k",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#0B6623", "#1E1B18"],
    description: "Lustrous mulberry silk slip dress with cowled neckline and adjustable cross-back spaghetti straps. Exudes effortless modern glamour.",
  },
  {
    id: 5,
    brand: "URBANIC",
    name: "Pastel Peach Ribbed Co-ord Lounge Set",
    category: "Women",
    badge: "TRENDING",
    price: 2699,
    discount: 30,
    rating: 4.4,
    reviews: "820",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
    sizes: ["S", "M", "L"],
    colors: ["#FFDAB9", "#FAF7F2"],
    description: "Two-piece ribbed knit co-ord set featuring a boxy crop top and matching relaxed wide-leg flare pants in soft peach.",
  },

  // --- ETHNIC WEAR ---
  {
    id: 6,
    brand: "LIBAS",
    name: "Embroidered Blush Pink Pure Chanderi Kurta Set",
    category: "Ethnic",
    badge: "BESTSELLER",
    price: 4999,
    discount: 50,
    rating: 4.8,
    reviews: "3.2k",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#F9CCD3", "#FAF7F2"],
    description: "Graceful handcrafted Chanderi silk kurta with intricate zardozi thread embroidery, paired with scalloped organza dupatta and cigarette pants.",
  },

  // --- MEN'S FASHION ---
  {
    id: 7,
    brand: "SNITCH",
    name: "Pure Linen Sky Blue Mandarin Collar Shirt",
    category: "Men",
    badge: "BESTSELLER",
    price: 2699,
    discount: 40,
    rating: 4.6,
    reviews: "3.5k",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#B0C4DE", "#FAF7F2", "#F3E8EE"],
    description: "Breathable 100% French flax linen casual shirt with a clean band collar. Naturally cooling, soft-washed texture for effortless smart styling.",
  },
  {
    id: 8,
    brand: "HIGHLANDER",
    name: "Tailored Slim Fit White Oxford Cotton Shirt",
    category: "Men",
    badge: "TRENDING",
    price: 1999,
    discount: 45,
    rating: 4.4,
    reviews: "4.8k",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    sizes: ["38", "40", "42", "44"],
    colors: ["#FFFFFF", "#87CEEB"],
    description: "Timeless basketweave Oxford shirt featuring button-down collar, reinforced mother-of-pearl buttons, and a tapered curved hem.",
  },
  {
    id: 9,
    brand: "ROADSTER",
    name: "Tailored Khaki Stretch Chino Trousers",
    category: "Men",
    badge: "NEW",
    price: 2499,
    discount: 30,
    rating: 4.5,
    reviews: "2.1k",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=80",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["#C2B280", "#1E1B18"],
    description: "Crafted from 98% premium combed cotton with 2% spandex for all-day flexible stretch and a polished silhouette.",
  },
  {
    id: 10,
    brand: "MAST & HARBOUR",
    name: "Pastel Sage Green Suede Bomber Jacket",
    category: "Men",
    badge: "HOT DEAL",
    price: 4999,
    discount: 35,
    rating: 4.7,
    reviews: "910",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=700&q=80",
    sizes: ["M", "L", "XL"],
    colors: ["#9CAF88", "#D2B48C"],
    description: "Brushed microfiber suede lightweight jacket with tonal ribbed cuffs, metallic zipper, and silky interior lining.",
  },

  // --- FOOTWEAR ---
  {
    id: 11,
    brand: "RED TAPE",
    name: "Minimalist White Leather Tennis Court Sneakers",
    category: "Footwear",
    badge: "BESTSELLER",
    price: 3899,
    discount: 55,
    rating: 4.8,
    reviews: "5.4k",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80",
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["#FFFFFF", "#FAF7F2"],
    description: "Crisp court sneakers engineered with cloud-foam cushioning insoles, padded ankle collars, and high-traction rubber soles.",
  },
  {
    id: 12,
    brand: "CARLTON LONDON",
    name: "Blush Pink Strappy Ankle-Strap Block Heels",
    category: "Footwear",
    badge: "TRENDING",
    price: 3499,
    discount: 40,
    rating: 4.6,
    reviews: "1.7k",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80",
    sizes: ["4", "5", "6", "7", "8"],
    colors: ["#F3E8EE", "#B76E79"],
    description: "Sophisticated 2.5-inch block heels featuring delicate criss-cross straps, square toe silhouette, and cushioned insoles for pain-free wear.",
  },
  {
    id: 13,
    brand: "DRESSBERRY",
    name: "Pastel Mint Suede Pointed Loafer Mules",
    category: "Footwear",
    badge: "NEW",
    price: 2199,
    discount: 35,
    rating: 4.3,
    reviews: "860",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=700&q=80",
    sizes: ["5", "6", "7", "8"],
    colors: ["#E0F2E9", "#FAF7F2"],
    description: "Chic slip-on backless mules crafted with velvety faux suede, gold bit horse-buckle accent, and padded footbed.",
  },

  // --- HANDBAGS ---
  {
    id: 14,
    brand: "MIRAGGIO",
    name: "Quilted Blush Pink Crossbody Chain Sling Bag",
    category: "Bags",
    badge: "BESTSELLER",
    price: 3699,
    discount: 30,
    rating: 4.9,
    reviews: "4.1k",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    sizes: ["Free Size"],
    colors: ["#F3E8EE", "#1E1B18", "#FFE4E1"],
    description: "Signature diamond-quilted vegan leather sling bag with polished gold-tone turn-lock clasp and interwoven chain strap.",
  },
  {
    id: 15,
    brand: "ZOUK",
    name: "Handcrafted Brown Vegan Leather Laptop Tote",
    category: "Bags",
    badge: "TRENDING",
    price: 4499,
    discount: 40,
    rating: 4.8,
    reviews: "3.4k",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    sizes: ["15.6 Inch"],
    colors: ["#8B5A2B", "#FAF7F2"],
    description: "PETA-approved vegan leather structured work tote featuring dedicated 15.6-inch padded laptop sleeve, bottle pocket, and zip closure.",
  },
  {
    id: 16,
    brand: "BAGS BUNNY",
    name: "Structured Pastel Lilac Croc Baguette Bag",
    category: "Bags",
    badge: "NEW",
    price: 2599,
    discount: 35,
    rating: 4.5,
    reviews: "980",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
    sizes: ["Free Size"],
    colors: ["#D8BFD8", "#FAF7F2"],
    description: "Retro Y2K baguette shoulder bag with embossed croc pattern, smooth nylon lining, and sleek silver zip pull.",
  },

  // --- ACCESSORIES & JEWELLERY ---
  {
    id: 17,
    brand: "GIVA",
    name: "Dainty Freshwater Pearl Pendant Gold Choker",
    category: "Accessories",
    badge: "BESTSELLER",
    price: 2499,
    discount: 25,
    rating: 4.9,
    reviews: "2.5k",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
    sizes: ["Adjustable"],
    colors: ["#D4AF37", "#FFFFFF"],
    description: "Authentic 925 sterling silver chain dipped in 18k gold vermeil, carrying a luminous hand-picked freshwater pearl with anti-tarnish e-coating.",
  },
  {
    id: 18,
    brand: "FOSSIL",
    name: "Minimalist Mesh Strap Rose Gold Analog Watch",
    category: "Accessories",
    badge: "HOT DEAL",
    price: 8995,
    discount: 20,
    rating: 4.9,
    reviews: "1.6k",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    sizes: ["32mm Dial"],
    colors: ["#B76E79", "#D4AF37"],
    description: "Japanese quartz movement wristwatch featuring an ultra-slim 7mm rose-gold case, shimmering mother-of-pearl dial, and Milanese magnetic mesh strap.",
  },
  {
    id: 19,
    brand: "VOYAGE",
    name: "Vintage Tortoise Shell Oval UV Sunglasses",
    category: "Accessories",
    badge: "NEW",
    price: 1899,
    discount: 40,
    rating: 4.5,
    reviews: "720",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    sizes: ["Standard"],
    colors: ["#8B4513", "#1E1B18"],
    description: "Handcrafted Italian acetate frames fitted with UV400 polarized scratch-resistant lenses for chic sun protection.",
  },

  // --- CUTE FINDS & LIFESTYLE GIFTS ---
  {
    id: 20,
    brand: "CHUMBAC",
    name: "Aesthetic 2026 Hardbound Pastel Goal Planner",
    category: "Stationery",
    badge: "BESTSELLER",
    price: 1299,
    discount: 20,
    rating: 4.9,
    reviews: "1.9k",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    sizes: ["A5"],
    colors: ["#F3E8EE", "#FAF7F2"],
    description: "Delightful gold-foil embossed planner with ribbon bookmark, monthly habit trackers, vision boards, sticker sheets, and 120 GSM bleed-free ivory paper.",
  },
  {
    id: 21,
    brand: "MINISO",
    name: "Kawaii Cloud Pastel Gel Pens Set of 6",
    category: "Stationery",
    badge: "TRENDING",
    price: 499,
    discount: 15,
    rating: 4.8,
    reviews: "2.8k",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=700&q=80",
    sizes: ["0.5mm"],
    colors: ["#FFD1DC", "#E6E6FA", "#D4F0F0"],
    description: "Velvety smooth 0.5mm quick-dry black gel ink pens with ergonomic soft-touch cloud rubber grips in pastel candy casings.",
  },
  {
    id: 22,
    brand: "EKAM",
    name: "French Vanilla & Amber Scented Soy Candle",
    category: "Stationery",
    badge: "NEW",
    price: 899,
    discount: 20,
    rating: 4.7,
    reviews: "1.2k",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    sizes: ["220g"],
    colors: ["#FAF7F2"],
    description: "Organic vegan soy wax candle infused with Madagascar vanilla and warm amber essential oils. 45 hours clean smokeless burn time in a reusable amber glass jar.",
  },
  {
    id: 23,
    brand: "ELLEMENTRY",
    name: "Handcrafted Ceramic Pastel Tulip Coffee Mug",
    category: "Stationery",
    badge: "BESTSELLER",
    price: 799,
    discount: 25,
    rating: 4.8,
    reviews: "940",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    sizes: ["350ml"],
    colors: ["#F3E8EE", "#FAF7F2"],
    description: "Adorable handmade ceramic coffee cup with sculpted flower petals and ergonomic handle. Lead-free, microwave & dishwasher safe.",
  }
];

/*** ==========================================================================
     2. Application State & Storage
     ========================================================================== ***/
let cart = JSON.parse(localStorage.getItem('glamdrop_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('glamdrop_wishlist')) || [];
let activeCategory = 'All';
let activeQuickChip = 'all';
let searchTerm = '';
let sortOption = 'default';
let activeCoupon = localStorage.getItem('glamdrop_coupon') || null;

const AVAILABLE_COUPONS = {
  'GLAM20': { type: 'percent', value: 20, description: 'Flat 20% OFF' },
  'FIRSTBUY': { type: 'flat', value: 300, description: 'Flat ₹300 OFF' },
  'FREESHIP': { type: 'shipping', value: 0, description: 'Free Express Shipping' }
};

/*** ==========================================================================
     3. Helpers & Math Utilities
     ========================================================================== ***/
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function formatPrice(p) {
  return `₹${p.toLocaleString('en-IN')}`;
}

function getFinalPrice(p) {
  return p.discount ? Math.round(p.price * (1 - p.discount / 100)) : p.price;
}

function saveState() {
  localStorage.setItem('glamdrop_cart', JSON.stringify(cart));
  localStorage.setItem('glamdrop_wishlist', JSON.stringify(wishlist));
  if (activeCoupon) {
    localStorage.setItem('glamdrop_coupon', activeCoupon);
  } else {
    localStorage.removeItem('glamdrop_coupon');
  }
}

function showToast(message, icon = '✨') {
  const container = $('#toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

/*** ==========================================================================
     4. Product Grid Renderer (3:4 Aspect Ratio Myntra/Flipkart Cards)
     ========================================================================== ***/
function renderProducts() {
  const grid = $('#productGrid');
  if (!grid) return;
  grid.innerHTML = '';

  let filtered = PRODUCTS.filter(p => {
    // Category filter (mapping 'Ethnic' to Ethnic category or All)
    let catMatch = false;
    if (activeCategory === 'All') catMatch = true;
    else if (activeCategory === 'Women') catMatch = (p.category === 'Women' || p.category === 'Ethnic');
    else catMatch = (p.category === activeCategory);

    // Search query filter
    const searchLower = searchTerm.toLowerCase();
    const searchMatch = !searchTerm ||
      p.name.toLowerCase().includes(searchLower) ||
      p.brand.toLowerCase().includes(searchLower) ||
      p.category.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower);

    // Quick Chip filters
    let chipMatch = true;
    if (activeQuickChip === 'bestseller') chipMatch = (p.badge === 'BESTSELLER');
    else if (activeQuickChip === 'under1999') chipMatch = (getFinalPrice(p) <= 1999);
    else if (activeQuickChip === 'highrating') chipMatch = (p.rating >= 4.5);
    else if (activeQuickChip === 'bigdiscount') chipMatch = (p.discount >= 40);

    return catMatch && searchMatch && chipMatch;
  });

  // Sorting
  if (sortOption === 'price-asc') {
    filtered.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
  } else if (sortOption === 'price-desc') {
    filtered.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
  } else if (sortOption === 'rating-desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === 'discount-desc') {
    filtered.sort((a, b) => b.discount - a.discount);
  }

  // Update catalog count banner
  const countEl = $('#catalogCount');
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} curated pieces`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-box">
        <div class="no-results-icon">🔍</div>
        <h3>No matching pieces found</h3>
        <p>We couldn't find items matching "${searchTerm}". Try resetting your filters to explore all trends!</p>
        <button class="cta-btn small" onclick="clearFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const isWishlisted = wishlist.includes(p.id);
    const finalPrice = getFinalPrice(p);
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', p.id);

    card.innerHTML = `
      <!-- 3:4 Aspect Ratio Image Box -->
      <div class="card-media-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80'" />
        
        <!-- Trending / Bestseller Badge -->
        ${p.badge ? `<span class="card-tag ${p.badge.toLowerCase().replace(' ', '-')}">${p.badge}</span>` : ''}

        <!-- Wishlist Floating Toggle -->
        <button class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" aria-label="Save to wishlist" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
          ${isWishlisted ? '♥' : '♡'}
        </button>

        <!-- Customer Rating Badge -->
        <div class="card-rating-pill">
          <span>${p.rating}</span>
          <span class="rating-star-icon">★</span>
          <span class="rating-count-text">| ${p.reviews}</span>
        </div>
      </div>

      <!-- Card Information -->
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-title" title="${p.name}">${p.name}</div>
        
        <div class="product-price-row">
          <span class="price-final">${formatPrice(finalPrice)}</span>
          ${p.discount > 0 ? `<span class="price-original">${formatPrice(p.price)}</span>` : ''}
          ${p.discount > 0 ? `<span class="price-discount-tag">(${p.discount}% OFF)</span>` : ''}
        </div>

        <button class="card-add-btn" data-id="${p.id}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path></svg>
          Add to Bag
        </button>
      </div>
    `;

    // Interactive Event Listeners
    card.querySelector('.card-media-wrap img').addEventListener('click', () => openModal(p.id));
    card.querySelector('.product-title').addEventListener('click', () => openModal(p.id));
    card.querySelector('.product-brand').addEventListener('click', () => openModal(p.id));

    card.querySelector('.wishlist-heart-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(p.id);
    });

    card.querySelector('.card-add-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(p.id);
    });

    grid.appendChild(card);
  });
}

/*** ==========================================================================
     5. Cart, Coupons & Free Shipping Calculation
     ========================================================================== ***/
function updateBadges() {
  const totalCartQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = $('#cartCount');
  if (cartBadge) cartBadge.textContent = totalCartQty;

  const cartDrawerBadge = $('#cartBadgeInline');
  if (cartDrawerBadge) cartDrawerBadge.textContent = totalCartQty;

  const totalWishCount = wishlist.length;
  const wishBadge = $('#wishlistCount');
  if (wishBadge) wishBadge.textContent = totalWishCount;

  const wishDrawerBadge = $('#wishlistBadgeInline');
  if (wishDrawerBadge) wishDrawerBadge.textContent = totalWishCount;
}

function addToCart(id, size = null, color = null) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: id,
      qty: 1,
      selectedSize: size || (prod.sizes && prod.sizes.length ? prod.sizes[0] : null),
      selectedColor: color || (prod.colors && prod.colors.length ? prod.colors[0] : null)
    });
  }

  saveState();
  updateBadges();
  renderCart();
  showToast(`${prod.brand} added to your Bag!`, '🛍️');
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveState();
  updateBadges();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveState();
  updateBadges();
  renderCart();
  showToast('Item removed from Bag', '🗑️');
}

function toggleWishlist(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  const idx = wishlist.indexOf(id);

  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast(`Removed from Wishlist`, '💔');
  } else {
    wishlist.push(id);
    showToast(`Saved to Wishlist`, '💖');
  }

  saveState();
  updateBadges();
  renderWishlist();
  renderProducts();

  const modalWishHeart = $('#modalWishHeart');
  if (modalWishHeart) {
    modalWishHeart.textContent = wishlist.includes(id) ? '♥' : '♡';
  }
}

// Coupon Logic
function applyCouponDirect(code) {
  const upper = code.toUpperCase().trim();
  if (AVAILABLE_COUPONS[upper]) {
    activeCoupon = upper;
    saveState();
    renderCart();
    showToast(`Coupon ${upper} Applied! You unlocked extra savings! 🎉`, '🏷️');
  } else {
    showToast(`Invalid coupon code. Try GLAM20 or FIRSTBUY`, '⚠️');
  }
}

function removeCoupon() {
  activeCoupon = null;
  saveState();
  renderCart();
  showToast('Coupon removed', 'ℹ️');
}

function calculateCartTotals() {
  let mrpTotal = 0;
  let discountedTotal = 0;

  cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod) {
      mrpTotal += prod.price * item.qty;
      discountedTotal += getFinalPrice(prod) * item.qty;
    }
  });

  const productSavings = mrpTotal - discountedTotal;
  let couponSavings = 0;

  if (activeCoupon && AVAILABLE_COUPONS[activeCoupon]) {
    const cp = AVAILABLE_COUPONS[activeCoupon];
    if (cp.type === 'percent') {
      couponSavings = Math.round(discountedTotal * (cp.value / 100));
    } else if (cp.type === 'flat') {
      couponSavings = Math.min(discountedTotal, cp.value);
    }
  }

  const finalPayable = Math.max(0, discountedTotal - couponSavings);
  return { mrpTotal, discountedTotal, productSavings, couponSavings, finalPayable };
}

function renderCart() {
  const list = $('#cartItems');
  const emptyState = $('#cartEmptyState');
  const footer = $('#cartFooter');
  const thresholdBar = $('#shippingThresholdBar');
  const thresholdProgress = $('#thresholdProgress');
  const thresholdText = $('#thresholdText');

  if (!list) return;
  list.innerHTML = '';

  if (cart.length === 0) {
    emptyState.classList.remove('hidden');
    footer.classList.add('hidden');
    if (thresholdBar) thresholdBar.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  footer.classList.remove('hidden');
  if (thresholdBar) thresholdBar.classList.remove('hidden');

  const { mrpTotal, discountedTotal, productSavings, couponSavings, finalPayable } = calculateCartTotals();

  // Free delivery threshold indicator (Threshold = ₹1499)
  const freeThreshold = 1499;
  if (thresholdProgress && thresholdText) {
    if (discountedTotal >= freeThreshold) {
      thresholdProgress.style.width = '100%';
      thresholdText.innerHTML = '🎉 <strong>Free Express Delivery</strong> unlocked on this order!';
    } else {
      const remaining = freeThreshold - discountedTotal;
      const pct = Math.min(100, Math.round((discountedTotal / freeThreshold) * 100));
      thresholdProgress.style.width = `${pct}%`;
      thresholdText.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more to unlock <strong>FREE Express Shipping!</strong>`;
    }
  }

  // Render Bag Items
  cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (!prod) return;

    const finalPrice = getFinalPrice(prod);
    const li = document.createElement('li');
    li.className = 'drawer-item';
    li.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" />
      <div class="drawer-item-details">
        <span class="drawer-item-brand">${prod.brand}</span>
        <span class="drawer-item-title">${prod.name}</span>
        <div class="drawer-item-meta">
          ${item.selectedSize ? `<span class="meta-tag">Size: ${item.selectedSize}</span>` : ''}
          ${item.selectedColor ? `<span class="meta-color-dot" style="background:${item.selectedColor};" title="Selected Color"></span>` : ''}
        </div>
        <div class="drawer-item-price-row">
          <span class="item-current-price">${formatPrice(finalPrice)}</span>
          ${prod.discount > 0 ? `<span class="item-mrp-price">${formatPrice(prod.price)}</span>` : ''}
        </div>
        
        <div class="drawer-item-controls">
          <div class="qty-pill">
            <button class="dec-btn" data-id="${item.id}" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button class="inc-btn" data-id="${item.id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="item-delete-btn" data-id="${item.id}" title="Remove item">✕</button>
        </div>
      </div>
    `;

    li.querySelector('.dec-btn').addEventListener('click', () => updateCartQty(item.id, -1));
    li.querySelector('.inc-btn').addEventListener('click', () => updateCartQty(item.id, 1));
    li.querySelector('.item-delete-btn').addEventListener('click', () => removeFromCart(item.id));

    list.appendChild(li);
  });

  // Coupon badge state
  const couponBadge = $('#activeCouponBadge');
  const couponSavingsRow = $('#couponSavingsRow');
  if (activeCoupon && AVAILABLE_COUPONS[activeCoupon]) {
    couponBadge.classList.remove('hidden');
    couponBadge.querySelector('strong').textContent = activeCoupon;
    couponSavingsRow.classList.remove('hidden');
    $('#cartCouponDiscount').textContent = `-${formatPrice(couponSavings)}`;
  } else {
    couponBadge.classList.add('hidden');
    couponSavingsRow.classList.add('hidden');
  }

  // Update Summary Rows
  $('#cartMrp').textContent = formatPrice(mrpTotal);
  $('#cartProductDiscount').textContent = `-${formatPrice(productSavings)}`;
  $('#cartTotal').textContent = formatPrice(finalPayable);
}

function renderWishlist() {
  const list = $('#wishlistItems');
  const emptyState = $('#wishlistEmptyState');
  if (!list) return;
  list.innerHTML = '';

  if (wishlist.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  wishlist.forEach(id => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return;

    const finalPrice = getFinalPrice(prod);
    const li = document.createElement('li');
    li.className = 'drawer-item';
    li.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" />
      <div class="drawer-item-details">
        <span class="drawer-item-brand">${prod.brand}</span>
        <span class="drawer-item-title">${prod.name}</span>
        <span class="drawer-item-price">${formatPrice(finalPrice)}</span>
        
        <div class="drawer-item-controls" style="margin-top:0.6rem;">
          <button class="cta-btn small move-cart-btn" data-id="${id}">Move to Bag</button>
          <button class="item-delete-btn remove-wish-btn" data-id="${id}" title="Remove from wishlist">✕</button>
        </div>
      </div>
    `;

    li.querySelector('.move-cart-btn').addEventListener('click', () => {
      addToCart(id);
      toggleWishlist(id);
    });

    li.querySelector('.remove-wish-btn').addEventListener('click', () => {
      toggleWishlist(id);
    });

    list.appendChild(li);
  });
}

/*** ==========================================================================
     6. Product Detail Modal & Live Pincode Checker
     ========================================================================== ***/
let currentModalProductId = null;
let currentSelectedSize = null;
let currentSelectedColor = null;

function openModal(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  currentModalProductId = id;
  currentSelectedSize = prod.sizes && prod.sizes.length ? prod.sizes[0] : null;
  currentSelectedColor = prod.colors && prod.colors.length ? prod.colors[0] : null;

  const finalPrice = getFinalPrice(prod);

  $('#modalImg').src = prod.image;
  $('#modalImg').alt = prod.name;
  $('#modalBrand').textContent = prod.brand;
  $('#modalTitle').textContent = prod.name;
  $('#modalDesc').textContent = prod.description;
  $('#modalRating').innerHTML = `${prod.rating} <span style="color:#14958F;">★</span> (${prod.reviews})`;

  $('#modalPriceCurrent').textContent = formatPrice(finalPrice);
  if (prod.discount > 0) {
    $('#modalPriceOld').textContent = formatPrice(prod.price);
    $('#modalDiscountPercent').textContent = `(${prod.discount}% OFF)`;
    $('#modalDiscountBadge').textContent = `${prod.discount}% OFF`;
    $('#modalDiscountBadge').style.display = 'block';
  } else {
    $('#modalPriceOld').textContent = '';
    $('#modalDiscountPercent').textContent = '';
    $('#modalDiscountBadge').style.display = 'none';
  }

  // Stock Urgency Text
  const stockText = $('#stockUrgencyTxt');
  if (stockText) {
    stockText.textContent = prod.badge === 'BESTSELLER' 
      ? 'Hurry, only 3 pieces left in stock!' 
      : 'In Stock - Dispatched within 24 hours';
  }

  // Render Sizes
  const optionsWrap = $('#modalOptions');
  optionsWrap.innerHTML = '';

  if (prod.sizes && prod.sizes.length) {
    const sizeBox = document.createElement('div');
    sizeBox.innerHTML = `
      <div class="option-group-label">Select Size</div>
      <div class="size-pill-group">
        ${prod.sizes.map((s, idx) => `
          <button type="button" class="size-pill ${idx === 0 ? 'selected' : ''}" data-size="${s}">${s}</button>
        `).join('')}
      </div>
    `;

    sizeBox.querySelectorAll('.size-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBox.querySelectorAll('.size-pill').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentSelectedSize = btn.dataset.size;
      });
    });

    optionsWrap.appendChild(sizeBox);
  }

  // Render Colors
  if (prod.colors && prod.colors.length) {
    const colorBox = document.createElement('div');
    colorBox.innerHTML = `
      <div class="option-group-label">Available Shades</div>
      <div class="color-swatch-group">
        ${prod.colors.map((c, idx) => `
          <button type="button" class="color-swatch ${idx === 0 ? 'selected' : ''}" style="background-color: ${c};" data-color="${c}"></button>
        `).join('')}
      </div>
    `;

    colorBox.querySelectorAll('.color-swatch').forEach(btn => {
      btn.addEventListener('click', () => {
        colorBox.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentSelectedColor = btn.dataset.color;
      });
    });

    optionsWrap.appendChild(colorBox);
  }

  // Reset Pincode box
  const pinInput = $('#pincodeInput');
  const pinResult = $('#pincodeResult');
  if (pinInput) pinInput.value = '';
  if (pinResult) pinResult.classList.add('hidden');

  // Modal Wishlist state
  const isWish = wishlist.includes(id);
  $('#modalWishHeart').textContent = isWish ? '♥' : '♡';

  $('#productModal').classList.add('open');
  $('#productModal').focus();
}

function closeModal() {
  $('#productModal').classList.remove('open');
  currentModalProductId = null;
}

// Live Pincode Checker
function handlePincodeCheck() {
  const pin = $('#pincodeInput').value.trim();
  const resEl = $('#pincodeResult');
  if (!resEl) return;

  if (!/^\d{6}$/.test(pin)) {
    resEl.className = 'pincode-result error';
    resEl.textContent = '❌ Please enter a valid 6-digit PIN code.';
    resEl.classList.remove('hidden');
    return;
  }

  // Compute realistic delivery date (2 business days ahead)
  const d = new Date();
  d.setDate(d.getDate() + 2);
  const dateStr = d.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });

  resEl.className = 'pincode-result success';
  resEl.innerHTML = `⚡ <strong>Delivery by ${dateStr}</strong> | Cash on Delivery Available | 7-day Doorstep Returns.`;
  resEl.classList.remove('hidden');
}

/*** ==========================================================================
     7. Checkout & Order Confirmation Flow
     ========================================================================== ***/
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your bag is empty! Add items first 💕', '🛍️');
    return;
  }
  closeDrawer($('#cartDrawer'));
  const { finalPayable } = calculateCartTotals();
  $('#checkoutFinalAmount').textContent = formatPrice(finalPayable);
  $('#checkoutModal').classList.add('open');
}

function closeCheckoutModal() {
  $('#checkoutModal').classList.remove('open');
}

function handlePlaceOrder(e) {
  e.preventDefault();
  const name = $('#custName').value.trim();
  const phone = $('#custPhone').value.trim();
  const address = $('#custAddress').value.trim();
  const pin = $('#custPincode').value.trim();

  if (!name || !phone || !address || !pin) {
    showToast('Please fill all required shipping fields', '⚠️');
    return;
  }

  // Generate realistic Order ID
  const randomId = 'GD-' + Math.floor(100000 + Math.random() * 900000);
  $('#successOrderId').textContent = randomId;

  // Delivery ETA: 3 days ahead
  const d = new Date();
  d.setDate(d.getDate() + 3);
  const etaStr = d.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' }) + ' by 5:00 PM';
  $('#successEtaTxt').innerHTML = `Estimated Delivery: <strong>${etaStr}</strong>`;

  // Clear Cart
  cart = [];
  activeCoupon = null;
  saveState();
  updateBadges();
  renderCart();

  closeCheckoutModal();
  $('#orderSuccessModal').classList.add('open');
}

function closeOrderSuccessModal() {
  $('#orderSuccessModal').classList.remove('open');
  showToast('Happy Shopping! Explore our latest arrivals ✨', '🌸');
}

/*** ==========================================================================
     8. Drawers, Categories & Quick Filter Handlers
     ========================================================================== ***/
function openDrawer(drawer) {
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer(drawer) {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
}

function applyCategory(cat) {
  activeCategory = cat;
  // Update category story bubbles
  $$('.story-circle-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === cat);
  });
  renderProducts();
}

function applyQuickFilter(chipType) {
  activeQuickChip = chipType;
  $$('.chip-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.chip === chipType);
  });
  renderProducts();
}

function clearFilters() {
  activeCategory = 'All';
  activeQuickChip = 'all';
  searchTerm = '';
  sortOption = 'default';

  const searchInput = $('#search');
  if (searchInput) searchInput.value = '';

  const clearBtn = $('#searchClearBtn');
  if (clearBtn) clearBtn.classList.add('hidden');

  const sortSelect = $('#sortSelect');
  if (sortSelect) sortSelect.value = 'default';

  $$('.story-circle-item').forEach(btn => btn.classList.toggle('active', btn.dataset.category === 'All'));
  $$('.chip-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.chip === 'all'));

  renderProducts();
  showToast('All filters cleared', '✨');
}

let searchDebounceTimer = null;
function handleSearchInput(e) {
  clearTimeout(searchDebounceTimer);
  const val = e.target.value.trim();
  const clearBtn = $('#searchClearBtn');

  if (val.length > 0) {
    clearBtn.classList.remove('hidden');
  } else {
    clearBtn.classList.add('hidden');
  }

  searchDebounceTimer = setTimeout(() => {
    searchTerm = val;
    renderProducts();
  }, 220);
}

/*** ==========================================================================
     9. Initialization
     ========================================================================== ***/
function hideSplash() {
  const splash = $('#splash');
  if (splash) {
    splash.style.opacity = '0';
    splash.style.pointerEvents = 'none';
    setTimeout(() => {
      splash.style.display = 'none';
      const app = $('#app');
      if (app) {
        app.classList.remove('hidden');
        app.focus();
      }
    }, 550);
  }
}

function init() {
  renderProducts();
  renderCart();
  renderWishlist();
  updateBadges();

  // Cart & Wishlist Navigation buttons
  const cartBtn = $('#cartBtn');
  const closeCartBtn = $('#closeCartBtn');
  const cartDrawer = $('#cartDrawer');
  if (cartBtn && cartDrawer) {
    cartBtn.addEventListener('click', () => openDrawer(cartDrawer));
  }
  if (closeCartBtn && cartDrawer) {
    closeCartBtn.addEventListener('click', () => closeDrawer(cartDrawer));
  }

  const wishlistBtn = $('#wishlistBtn');
  const closeWishlistBtn = $('#closeWishlistBtn');
  const wishlistDrawer = $('#wishlistDrawer');
  if (wishlistBtn && wishlistDrawer) {
    wishlistBtn.addEventListener('click', () => openDrawer(wishlistDrawer));
  }
  if (closeWishlistBtn && wishlistDrawer) {
    closeWishlistBtn.addEventListener('click', () => closeDrawer(wishlistDrawer));
  }

  // Modal Close
  const closeModalBtn = $('#closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Modal Add to Cart
  const modalAddToCartBtn = $('#modalAddToCart');
  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener('click', () => {
      if (currentModalProductId) {
        addToCart(currentModalProductId, currentSelectedSize, currentSelectedColor);
        closeModal();
      }
    });
  }

  // Modal Wishlist Toggle
  const modalWishBtn = $('#modalWishBtn');
  if (modalWishBtn) {
    modalWishBtn.addEventListener('click', () => {
      if (currentModalProductId) {
        toggleWishlist(currentModalProductId);
      }
    });
  }

  // Pincode Checker
  const pinBtn = $('#pincodeCheckBtn');
  if (pinBtn) {
    pinBtn.addEventListener('click', handlePincodeCheck);
  }
  const pinInput = $('#pincodeInput');
  if (pinInput) {
    pinInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handlePincodeCheck();
    });
  }

  // Checkout Modal Open
  const checkoutOpenBtn = $('#openCheckoutModalBtn');
  if (checkoutOpenBtn) {
    checkoutOpenBtn.addEventListener('click', openCheckoutModal);
  }

  // Coupon Apply in Cart
  const applyCouponBtn = $('#applyCouponBtn');
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
      const code = $('#couponInput').value.trim();
      if (code) applyCouponDirect(code);
    });
  }
  const removeCouponBtn = $('#removeCouponBtn');
  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', removeCoupon);
  }

  // Search input & clear
  const searchInput = $('#search');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
  }

  const searchClearBtn = $('#searchClearBtn');
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchTerm = '';
      searchClearBtn.classList.add('hidden');
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = $('#sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortOption = e.target.value;
      renderProducts();
    });
  }

  // Reset filters
  const clearFiltersBtn = $('#clearFilters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', clearFilters);
  }

  // Category Story Circles
  $$('.story-circle-item').forEach(btn => {
    btn.addEventListener('click', () => {
      applyCategory(btn.dataset.category);
    });
  });

  // Quick Filter Chips
  $$('.chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyQuickFilter(btn.dataset.chip);
    });
  });

  // Payment method selection highlight in checkout
  $$('.payment-option input').forEach(radio => {
    radio.addEventListener('change', () => {
      $$('.payment-option').forEach(l => l.classList.remove('selected'));
      radio.closest('.payment-option').classList.add('selected');
    });
  });

  // Splash auto-transition
  const splash = $('#splash');
  if (splash) {
    splash.addEventListener('animationend', (e) => {
      if (e.animationName === 'splashFadeOut') {
        hideSplash();
      }
    });
    setTimeout(hideSplash, 2800);
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (cartDrawer && cartDrawer.classList.contains('open')) closeDrawer(cartDrawer);
      if (wishlistDrawer && wishlistDrawer.classList.contains('open')) closeDrawer(wishlistDrawer);
      const modal = $('#productModal');
      if (modal && modal.classList.contains('open')) closeModal();
      const checkoutModal = $('#checkoutModal');
      if (checkoutModal && checkoutModal.classList.contains('open')) closeCheckoutModal();
      const successModal = $('#orderSuccessModal');
      if (successModal && successModal.classList.contains('open')) closeOrderSuccessModal();
    }
  });
}

// Execute on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
