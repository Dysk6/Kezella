// ================= PRODUCT DATA (14 Items) =================
const products = {
  // --- PRODUCT 1 ---
  1: {
    name: "KeKe Dress",
    description: "Featuring a cape and an under elegant multipurpose dress",
    media: [
      { type: 'video', src: 'images/p1_vid.mp4' },
      { type: 'image', src: 'images/p1_img1.jpg' },
      { type: 'image', src: 'images/p1_img2.jpg' },
      { type: 'image', src: 'images/p1_img3.jpg' },
      { type: 'image', src: 'images/p1_img4.jpg' },
      { type: 'image', src: 'images/p1_img5.jpg' },
      { type: 'image', src: 'images/p1_img6.jpg' },
      { type: 'image', src: 'images/p1_img7.jpg' }
    ],
    sizes: { XL: 74000 },
    stock: 1
  },

  // --- PRODUCT 2 ---
  2: {
    name: "Star Dress",
    description: "Premium designer outfit tailored for modern elegance.",
    media: [
      { type: 'video', src: 'images/p2_vid.mp4' },
      { type: 'image', src: 'images/p2_img1.jpg' },
      { type: 'image', src: 'images/p2_img2.jpg' }
    ],
    sizes: { XL: 110000 },
    stock: 1
  },

  // --- PRODUCT 3 ---
  3: {
    name: "Glory Dress",
    description: "Timeless classic wear suitable for all events.",
    media: [
      { type: 'video', src: 'images/p3_vid.mp4' },
      { type: 'image', src: 'images/p3_img1.jpg' },
      { type: 'image', src: 'images/p3_img2.jpg' },
      { type: 'image', src: 'images/p3_img3.jpg' },
      { type: 'image', src: 'images/p3_img4.jpg' },
      { type: 'image', src: 'images/p3_img5.jpg' },
      { type: 'image', src: 'images/p3_img6.jpg' },
      { type: 'image', src: 'images/p3_img7.jpg' },
      { type: 'image', src: 'images/p3_img8.jpg' }
    ],
    sizes: { XL: 75000 },
    stock: 1
  },

  // --- PRODUCT 4 ---
  4: {
    name: "Danny's Polkadots",
    description: "Soft silk gown that flows with every step.",
    media: [
      { type: 'video', src: 'images/p4_vid.mp4' },
      { type: 'image', src: 'images/p4_img1.jpg' },
      { type: 'image', src: 'images/p4_img2.jpg' },
      { type: 'image', src: 'images/p4_img3.jpg' },
      { type: 'image', src: 'images/p4_img4.jpg' },
      { type: 'image', src: 'images/p4_img5.jpg' },
      { type: 'image', src: 'images/p4_img6.jpg' }
    ],
    sizes: { XL: 66000 },
    stock: 1
  },

  // --- PRODUCT 5 ---
  5: {
    name: "Fanny Dress",
    description: "Rich velvet texture for a sophisticated look.",
    media: [
      { type: 'video', src: 'images/p5_vid.mp4' },
      { type: 'image', src: 'images/p5_img1.jpg' },
      { type: 'image', src: 'images/p5_img2.jpg' },
      { type: 'image', src: 'images/p5_img3.jpg' },
      { type: 'image', src: 'images/p5_img4.jpg' },
      { type: 'image', src: 'images/p5_img5.jpg' },
      { type: 'image', src: 'images/p5_img6.jpg' },
      { type: 'image', src: 'images/p5_img7.jpg' },
      { type: 'image', src: 'images/p5_img8.jpg' },
      { type: 'image', src: 'images/p5_img9.jpg' },
      { type: 'image', src: 'images/p5_img10.jpg' },
      { type: 'image', src: 'images/p5_img11.jpg' }
    ],
    sizes: { XL: 122000 },
    stock: 1
  },

  // --- PRODUCT 6 ---
  6: {
    name: "Easter Majesty",
    description: "Lightweight and stylish, perfect for warm weather.",
    media: [
      { type: 'image', src: 'images/p6_vid.mp4' }
      { type: 'image', src: 'images/p6_img1.jpg' },
      { type: 'image', src: 'images/p6_img2.jpg' },
      { type: 'image', src: 'images/p6_img3.jpg' },
      { type: 'image', src: 'images/p6_img4.jpg' }
    ],
    sizes: { XL: 205000 },
    stock: 1
  },

  // --- PRODUCT 7 ---
  7: {
    name: "Deeper Dress",
    description: "A stunning maxi dress in royal blue.",
    media: [
      { type: 'video', src: 'images/p7_vid.mp4' },
      { type: 'image', src: 'images/p7_img1.jpg' },
      { type: 'image', src: 'images/p7_img2.jpg' },
      { type: 'image', src: 'images/p7_img3.jpg' },
      { type: 'image', src: 'images/p7_img4.jpg' },
      { type: 'image', src: 'images/p7_img5.jpg' }
    ],
    sizes: { XL: 145000 },
    stock: 1
  },

  // --- PRODUCT 8 ---
  8: {
    name: "Kay Ambrose",
    description: "Shine bright with this premium sequin dress.",
    media: [
      { type: 'video', src: 'images/p8_vid.mp4' },
      { type: 'image', src: 'images/p8_img1.jpg' },
      { type: 'image', src: 'images/p8_img2.jpg' },
      { type: 'image', src: 'images/p8_img3.jpg' },
      { type: 'image', src: 'images/p8_img4.jpg' },
      { type: 'image', src: 'images/p8_img5.jpg' },
      { type: 'image', src: 'images/p8_img6.jpg' }
    ],
    sizes: { XL: 80000 },
    stock: 1
  },

  // --- PRODUCT 9 ---
  9: {
    name: "Zedeck Dress",
    description: "Power dressing for the modern woman.",
    media: [
      { type: 'image', src: 'images/p9_vid.mp4' },
      { type: 'image', src: 'images/p9_img1.jpg' },
      { type: 'image', src: 'images/p9_img2.jpg' },
      { type: 'image', src: 'images/p9_img3.jpg' },
      { type: 'image', src: 'images/p9_img4.jpg' },
      { type: 'image', src: 'images/p9_img5.jpg' },
      { type: 'image', src: 'images/p9_img6.jpg' },
      { type: 'image', src: 'images/p9_img7.jpg' },
      { type: 'image', src: 'images/p9_img8.jpg' },
      { type: 'image', src: 'images/p9_img9.jpg' }
    ],
    sizes: { XL: 91000 },
    stock: 1
  },

  // --- PRODUCT 10 ---
  10: {
    name: "Ella Dress",
    description: "The essential little black dress, elevated.",
    media: [
      { type: 'video', src: 'images/p10_vid1.mp4' },
      { type: 'image', src: 'images/p10_img1.jpg' },
      { type: 'image', src: 'images/p10_img2.jpg' },
      { type: 'image', src: 'images/p10_img3.jpg' },
      { type: 'image', src: 'images/p10_img4.jpg' },
      { type: 'image', src: 'images/p10_img5.jpg' },
      { type: 'video', src: 'images/p10_vid2.mp4' },
      { type: 'image', src: 'images/p10_img6.jpg' },
      { type: 'image', src: 'images/p10_img7.jpg' },
      { type: 'image', src: 'images/p10_img8.jpg' },
      { type: 'image', src: 'images/p10_img9.jpg' },
      { type: 'image', src: 'images/p10_img10.jpg' },
      { type: 'image', src: 'images/p10_img11.jpg' }
    ],
    selections: {green, brown},
    sizes: { XL: 59000 },
    stock: 1
  },

  // --- PRODUCT 11 ---
  11: {
    name: "The Desire",
    description: "Beautiful floral patterns on premium fabric.",
    media: [
      { type: 'image', src: 'images/p11_vid.mp4' }
    ],
    sizes: { XL: 150000 },
    stock: 1
  },

  // --- PRODUCT 12 ---
  12: {
    name: "Seraphina's Grown",
    description: "Smooth satin that feels like a second skin.",
    media: [
      { type: 'video', src: 'images/p12_vid.mp4' },
      { type: 'image', src: 'images/p12_img1.jpg' },
      { type: 'image', src: 'images/p12_img2.jpg' },
      { type: 'image', src: 'images/p12_img3.jpg' },
      { type: 'image', src: 'images/p12_img4.jpg' },
      { type: 'image', src: 'images/p12_img5.jpg' },
      { type: 'image', src: 'images/p12_img6.jpg' }
    ],
    sizes: { XL: 87000 },
    stock: 1
  },

  // --- PRODUCT 13 ---
  13: {
    name: "Kamsi Kimono",
    description: "Luxurious comfort with detailed embroidery.",
    media: [
      { type: 'video', src: 'images/p13_vid.mp4' },
      { type: 'image', src: 'images/p13_img1.jpg' },
      { type: 'image', src: 'images/p13_img2.jpg' },
      { type: 'image', src: 'images/p13_img3.jpg' }
    ],
    sizes: { OneSize: 31000 },
    stock: 1
  },

  // --- PRODUCT 14 ---
  14: {
    name: "Elo Dress",
    description: "Show off your style with this off-shoulder piece.",
    media: [
      { type: 'video', src: 'images/p14_vid.mp4' }
      { type: 'image', src: 'images/p14_img1.jpg' },
      { type: 'image', src: 'images/p14_img2.jpg' },
      { type: 'image', src: 'images/p14_img3.jpg' },
      { type: 'image', src: 'images/p14_img4.jpg' },
      { type: 'image', src: 'images/p14_img5.jpg' },
      { type: 'image', src: 'images/p14_img6.jpg' },
      { type: 'image', src: 'images/p14_img7.jpg' }
    ],
    sizes: { XL: 25000 },
    stock: 1
  }
};

// ================= PAGE LOGIC (DO NOT TOUCH BELOW) =================
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];
let selectedSize = ""; 

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

  // 3. SLIDER SCROLL TRACKER
  slider.addEventListener("scroll", () => {
    const scrollPos = slider.scrollLeft;
    const width = slider.offsetWidth;
    const index = Math.round(scrollPos / width);
    
    const dots = document.querySelectorAll(".dot");
    dots.forEach(d => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });

  // 4. PRICE & SIZES
  const sizeContainer = document.getElementById("sizeContainer");
  const priceEl = document.getElementById("productPrice");

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

  priceEl.textContent = "₦" + product.sizes[firstSize].toLocaleString();

  // 5. ADD TO CART
  document.getElementById("addToCart").addEventListener("click", () => {
    if (product.stock <= 0) {
      alert("Sorry, this item is out of stock!");
      return;
    }

    let thumbnail = "";
    const imageItem = product.media.find(m => m.type === 'image');
    if (imageItem) {
      thumbnail = imageItem.src;
    } else {
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

  // 6. ARROW BUTTONS LOGIC (For PC)
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -slider.offsetWidth, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: slider.offsetWidth, behavior: "smooth" });
  });
}
