// ================= PRODUCT DATA (14 Items) =================
const products = {
  1: {
    name: "KEKE DRESS",
    description: "An ethereal, cloud-like white ensemble designed for clarity, peace, and the woman who commands the room with a serene, luminous presence.",
    story: `[Keep your original Keke story here...]`,
    media: [ /* Keep your media array here */ ],
    sizes: { "S": 95000, "M": 99500, "L": 104000 },
    stock: 10
  },
  2: {
    name: "STAR DRESS",
    description: "A magnificent, oversized avant-garde gown featuring 'Cloud' volume and architectural bell sleeves.",
    story: `[Keep your original Star story here...]`,
    media: [ /* Keep your media array here */ ],
    sizes: { "S": 175000, "M": 185000, "L": 195000 },
    stock: 10
  },
  3: {
    name: "GLORY DRESS",
    description: "A sculptural cream masterpiece featuring ladder-cut architecture and kinetic fringe.",
    story: `[Keep your original Glory story here...]`,
    media: [ /* Keep your media array here */ ],
    sizes: { "S": 80000, "M": 85500, "L": 92000 },
    stock: 10
  },
  4: {
    name: "DANNY'S POLKADOTS",
    story: `[Keep your original Danny story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 99000, "M": 106000, "L": 113000 },
    stock: 10
  },
  5: {
    name: "FANNY DRESS",
    story: `[Keep your original Fanny story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 155000, "M": 165000, "L": 175000 },
    stock: 10
  },
  6: {
    name: "EASTER MAJESTY",
    story: `[Keep your original Easter story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 299000, "M": 315000, "L": 329000 },
    stock: 10
  },
  7: {
    name: "DEEPER DRESS",
    story: `[Keep your original Deeper story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 210000, "M": 227000, "L": 241000 },
    stock: 10
  },
  8: {
    name: "KAY AMBROSE",
    story: `[Keep your original Kay story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 119000, "M": 124500, "L": 129000 },
    stock: 10
  },
  9: {
    name: "ZEDECK DRESS",
    story: `[Keep your original Zedeck story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 115000, "M": 119000, "L": 125000 },
    stock: 10
  },
  10: {
    name: "ELLA DRESS",
    story: `[Keep your original Ella story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 89000, "M": 93000, "L": 96000 },
    colors: [ {name: "Green", hex: "#006400"}, {name: "Brown", hex: "#5D4037"} ],
    stock: 10
  },
  11: {
    name: "THE DESIRE",
    story: `[Keep your original Desire story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 175000, "M": 185000, "L": 195000 },
    stock: 10
  },
  12: {
    name: "SERAPHINA'S GOWN",
    story: `[Keep your original Seraphina story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 102000, "M": 108000, "L": 114000 },
    stock: 10
  },
  13: {
    name: "KAMSI KIMONO",
    story: `[Keep your original Kamsi story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 55000, "M": 58000, "L": 61000 },
    colors: [ {name: "Blue", hex: "#0000FF"}, {name: "GreenBlue", hex: "#008080"} ],
    stock: 10
  },
  14: {
    name: "ELO DRESS",
    story: `[Keep your original Elo story here...]`,
    media: [ /* ... */ ],
    sizes: { "S": 40000, "M": 42500, "L": 45000 },
    stock: 10
  }
};

// Logic for Initialization
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "1";
  const product = products[productId];

  let selectedSize = "S";
  let selectedColor = product.colors ? product.colors[0].name : null;

  // 1. Fill Name & Price
  document.getElementById("productName").innerText = product.name;
  const priceEl = document.getElementById("productPrice");
  priceEl.innerText = "₦" + product.sizes[selectedSize].toLocaleString();

  // 2. Generate Size Buttons
  const sizeContainer = document.getElementById("sizeContainer");
  Object.keys(product.sizes).forEach(size => {
    const btn = document.createElement("button");
    btn.className = "size-btn" + (size === selectedSize ? " active" : "");
    btn.innerText = size;
    btn.onclick = () => {
      selectedSize = size;
      document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      priceEl.innerText = "₦" + product.sizes[size].toLocaleString();
    };
    sizeContainer.appendChild(btn);
  });

  // 3. Generate Color Boxes (For Ella & Kamsi)
  const colorWrapper = document.getElementById("colorWrapper");
  const colorContainer = document.getElementById("colorContainer");
  if (product.colors) {
    colorWrapper.style.display = "block";
    product.colors.forEach(c => {
      const box = document.createElement("div");
      box.className = "color-box" + (c.name === selectedColor ? " active" : "");
      box.style.backgroundColor = c.hex;
      box.title = c.name;
      box.onclick = () => {
        selectedColor = c.name;
        document.querySelectorAll(".color-box").forEach(b => b.classList.remove("active"));
        box.classList.add("active");
      };
      colorContainer.appendChild(box);
    });
  }

  // 4. Load Reviews
  displayReviews(productId);

  // 5. Review Form Visibility (Simulation)
  // In a real site, this checks your database. Here, we'll show it for testing.
  document.getElementById("reviewFormWrapper").style.display = "block";

  // Handle Review Submission
  document.getElementById("submitReview").onclick = () => {
    const rating = document.querySelector('input[name="rating"]:checked');
    const comment = document.getElementById("reviewComment").value;
    
    if (!rating) { alert("Please select a star rating!"); return; }

    const newReview = { rating: rating.value, comment: comment, date: new Date().toLocaleDateString() };
    let reviews = JSON.parse(localStorage.getItem("reviews_" + productId)) || [];
    reviews.push(newReview);
    localStorage.setItem("reviews_" + productId, JSON.stringify(reviews));
    
    alert("Thank you for your review!");
    location.reload(); // Refresh to show new review
  };
});

function displayReviews(id) {
  const reviews = JSON.parse(localStorage.getItem("reviews_" + id)) || [];
  const container = document.getElementById("existingReviews");
  if (reviews.length === 0) return;

  container.innerHTML = "";
  let totalStars = 0;

  reviews.forEach(r => {
    totalStars += parseInt(r.rating);
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `<div class="stars">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div>
                     <p>${r.comment}</p><small>${r.date} - Verified Buyer</small>`;
    container.appendChild(div);
  });

  const avg = (totalStars / reviews.length).toFixed(1);
  document.getElementById("ratingValue").innerText = avg;
}
