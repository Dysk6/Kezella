// ================= PRODUCT DATA =================
// INSTRUCTIONS:
// 1. Name your files in GitHub exactly like the 'src' links below (e.g., p1_vid.mp4, p1_img1.jpg).
// 2. If you don't have a video for a product, delete the line with 'video'.
// 3. If you have more photos, copy and paste the 'image' line to add more.

const products = {
  // --- PRODUCT 1 ---
  1: {
    name: "Luxury Evening Dress",
    description: "An elegant luxury evening dress designed for special occasions.",
    media: [
      { type: 'video', src: 'images/p1_vid.mp4' },
      { type: 'image', src: 'images/p1_img1.jpg' },
      { type: 'image', src: 'images/p1_img2.jpg' },
      { type: 'image', src: 'images/p1_img3.jpg' }
    ],
    sizes: { S: 45000, M: 47500, L: 50000, XL: 52500, XXL: 55000 },
    stock: 10
  },

  // --- PRODUCT 2 (Has 2 Videos) ---
  2: {
    name: "Designer Outfit",
    description: "Premium designer outfit tailored for modern elegance.",
    media: [
      { type: 'video', src: 'images/p2_vid1.mp4' }, // Video 1
      { type: 'video', src: 'images/p2_vid2.mp4' }, // Video 2
      { type: 'image', src: 'images/p2_img1.jpg' },
      { type: 'image', src: 'images/p2_img2.jpg' }
    ],
    sizes: { S: 60000, M: 64000, L: 68000, XL: 72000, XXL: 75000 },
    stock: 5
  },

  // --- PRODUCT 3 ---
  3: {
    name: "Classic Wear",
    description: "Timeless classic wear suitable for all events.",
    media: [
      { type: 'video', src: 'images/p3_vid.mp4' },
      { type: 'image', src: 'images/p3_img1.jpg' },
      { type: 'image', src: 'images/p3_img2.jpg' }
    ],
    sizes: { S: 38000, M: 40500, L: 43000, XL: 45500, XXL: 48000 },
    stock: 8
  },

  // --- PRODUCT 4 ---
  4: {
    name: "Elegant Silk Gown",
    description: "Soft silk gown that flows with every step.",
    media: [
      { type: 'video', src: 'images/p4_vid.mp4' },
      { type: 'image', src: 'images/p4_img1.jpg' },
      { type: 'image', src: 'images/p4_img2.jpg' }
    ],
    sizes: { S: 50000, M: 52000, L: 55000 },
    stock: 12
  },

  // --- PRODUCT 5 ---
  5: {
    name: "Velvet Dinner Dress",
    description: "Rich velvet texture for a sophisticated look.",
    media: [
      { type: 'image', src: 'images/p5_img1.jpg' },
      { type: 'image', src: 'images/p5_img2.jpg' }
    ],
    sizes: { S: 40000, M: 42000, L: 45000 },
    stock: 7
  },

  // --- PRODUCT 6 ---
  6: {
    name: "Chic Summer Two-Piece",
    description: "Lightweight and stylish, perfect for warm weather.",
    media: [
      { type: 'image', src: 'images/p6_img1.jpg' },
      { type: 'image', src: 'images/p6_img2.jpg' },
      { type: 'image', src: 'images/p6_img3.jpg' }
    ],
    sizes: { S: 35000, M: 37000, L: 39000 },
    stock: 15
  },

  // --- PRODUCT 7 ---
  7: {
    name: "Royal Blue Maxi",
    description: "A stunning maxi dress in royal blue.",
    media: [
      { type: 'video', src: 'images/p7_vid.mp4' },
      { type: 'image', src: 'images/p7_img1.jpg' }
    ],
    sizes: { S: 48000, M: 50000, L: 52000 },
    stock: 6
  },

  // --- PRODUCT 8 ---
  8: {
    name: "Gold Sequin Dress",
    description: "Shine bright with this premium sequin dress.",
    media: [
      { type: 'video', src: 'images/p8_vid.mp4' },
      { type: 'image', src: 'images/p8_img1.jpg' },
      { type: 'image', src: 'images/p8_img2.jpg' }
    ],
    sizes: { S: 70000, M: 75000, L: 80000 },
    stock: 4
  },

  // --- PRODUCT 9 ---
  9: {
    name: "Corporate Chic Suit",
    description: "Power dressing for the modern woman.",
    media: [
      { type: 'image', src: 'images/p9_img1.jpg' },
      { type: 'image', src: 'images/p9_img2.jpg' }
    ],
    sizes: { S: 55000, M: 58000, L: 60000 },
    stock: 10
  },

  // --- PRODUCT 10 ---
  10: {
    name: "Black Cocktail Dress",
    description: "The essential little black dress, elevated.",
    media: [
      { type: 'video', src: 'images/p10_vid.mp4' },
      { type: 'image', src: 'images/p10_img1.jpg' }
    ],
    sizes: { S: 30000, M: 32000, L: 34000 },
    stock: 20
  },

  // --- PRODUCT 11 ---
  11: {
    name: "Floral Wrap Dress",
    description: "Beautiful floral patterns on premium fabric.",
    media: [
      { type: 'image', src: 'images/p11_img1.jpg' },
      { type: 'image', src: 'images/p11_img2.jpg' }
    ],
    sizes: { S: 28000, M: 30000, L: 32000 },
    stock: 12
  },

  // --- PRODUCT 12 ---
  12: {
    name: "Satin Slip Dress",
    description: "Smooth satin that feels like a second skin.",
    media: [
      { type: 'video', src: 'images/p12_vid.mp4' },
      { type: 'image', src: 'images/p12_img1.jpg' }
    ],
    sizes: { S: 25000, M: 27000, L: 29000 },
    stock: 14
  },

  // --- PRODUCT 13 ---
  13: {
    name: "Embroidered Kaftan",
    description: "Luxurious comfort with detailed embroidery.",
    media: [
      { type: 'image', src: 'images/p13_img1.jpg' },
      { type: 'image', src: 'images/p13_img2.jpg' },
      { type: 'image', src: 'images/p13_img3.jpg' }
    ],
    sizes: { OneSize: 45000 },
    stock: 8
  },

  // --- PRODUCT 14 ---
  14: {
    name: "Off-Shoulder Party Dress",
    description: "Show off your style with this off-shoulder piece.",
    media: [
      { type: 'video', src: 'images/p14_vid.mp4' },
      { type: 'image', src: 'images/p14_img1.jpg' }
    ],
    sizes: { S: 36000, M: 38000, L: 40000 },
    stock: 9
  },
};

// ================= PAGE LOGIC (DO NOT TOUCH BELOW) =================
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];
let selectedSize = ""; // Start empty to force selection

if (product) {
  // 1. POPULATE TEXT DETAILS
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("stockCount").textContent = `${product.stock} items available`;

  // 2. BUILD THE SLIDER (Video + Images)
  const slider = document.getElementById("productSlider");
  const dotsContainer = document.getElementById("sliderDots");

  product.media.forEach((item, index) => {
    // Create Slide
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide-item";
    
    if (item.type === 'video') {
      // Auto-play muted video loop
      slideDiv.innerHTML = `<video src="${item.src}" controls loop muted playsinline autoplay></video>`;
    } else {
      slideDiv.innerHTML = `<img src="${item.src}" alt="${product.name}">`;
    }
    slider.appendChild(slideDiv);

    // Create Dot
    const dot = document.createElement("div");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dotsContainer.appendChild(dot);
  });

  // 3. SLIDER SCROLL TRACKER (For Dots)
  slider.addEventListener("scroll", () => {
    const scrollPos = slider.scrollLeft;
    const width = slider.offsetWidth;
    const index = Math.round(scrollPos / width);
    
    // Update dots
    const dots = document.querySelectorAll(".dot");
    dots.forEach(d => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });

  // 4. PRICE & SIZES
  const sizeContainer = document.getElementById("sizeContainer");
  const priceEl = document.getElementById("productPrice");

  // Select the first size automatically
  const firstSize = Object.keys(product.sizes)[0];
  selectedSize = firstSize;

  Object.keys(product.sizes).forEach(size => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (size === firstSize ? " active" : "");
    btn.textContent = size;
    btn.onclick = () => {
      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = size;
      priceEl.textContent = "₦" + product.sizes[size].toLocaleString();
    };
    sizeContainer.appendChild(btn);
  });

  // Initial Price
  priceEl.textContent = "₦" + product.sizes[firstSize].toLocaleString();

  // 5. ADD TO CART
  document.getElementById("addToCart").addEventListener("click", () => {
    if (product.stock <= 0) {
      alert("Sorry, this item is out of stock!");
      return;
    }

    // FIND FIRST IMAGE FOR CART THUMBNAIL (Avoid using video)
    let thumbnail = "";
    const imageItem = product.media.find(m => m.type === 'image');
    if (imageItem) {
      thumbnail = imageItem.src;
    } else {
      // Fallback if product ONLY has videos (unlikely, but safe)
      thumbnail = "favicon.png"; 
    }

    const cartItem = {
      id: productId,
      name: product.name,
      size: selectedSize,
      price: product.sizes[selectedSize],
      image: thumbnail, 
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(i => i.id === productId && i.size === selectedSize);
    
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Added to cart!");
  });
}
