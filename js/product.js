const products = {
  1: {
    name: "Luxury Evening Dress",
    image: "images/product1.jpg",
    description: "An elegant luxury evening dress designed for special occasions.",
    sizes: { S: 45000, M: 47500, L: 50000, XL: 52500, XXL: 55000 },
    rating: 0.0
  },
  2: {
    name: "Designer Outfit",
    image: "images/product2.jpg",
    description: "Premium designer outfit tailored for modern elegance.",
    sizes: { S: 60000, M: 64000, L: 68000, XL: 72000, XXL: 75000 },
    rating: 0.0
  },
  3: {
    name: "Classic Wear",
    image: "images/product3.jpg",
    description: "Timeless classic wear suitable for all events.",
    sizes: { S: 38000, M: 40500, L: 43000, XL: 45500, XXL: 48000 },
    rating: 0.0
  }
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];
let selectedSize = "S";

if (product) {
  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("ratingValue").textContent = product.rating.toFixed(1);

  const sizeContainer = document.getElementById("sizeContainer");
  const priceEl = document.getElementById("productPrice");

  // Create Size Buttons
  Object.keys(product.sizes).forEach(size => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (size === "S" ? " active" : "");
    btn.textContent = size;
    btn.onclick = () => {
      // Remove active from others
      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("active"));
      // Add to this one
      btn.classList.add("active");
      selectedSize = size;
      priceEl.textContent = "₦" + product.sizes[size].toLocaleString();
    };
    sizeContainer.appendChild(btn);
  });

  // Initial Price Display
  priceEl.textContent = "₦" + product.sizes["S"].toLocaleString();

  document.getElementById("addToCart").addEventListener("click", () => {
    const cartItem = {
      id: productId,
      name: product.name,
      size: selectedSize,
      price: product.sizes[selectedSize],
      image: product.image,
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Check if item already in cart
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
