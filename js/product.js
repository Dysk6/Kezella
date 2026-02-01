const products = {
  1: {
    name: "Luxury Evening Dress",
    image: "images/product1.jpg",
    description: "An elegant luxury evening dress designed for special occasions.",
    sizes: {
      S: 45000,
      M: 50000,
      L: 55000
    },
    rating: 0.0
  },
  2: {
    name: "Designer Outfit",
    image: "images/product2.jpg",
    description: "Premium designer outfit tailored for modern elegance.",
    sizes: {
      S: 60000,
      M: 68000,
      L: 75000
    },
    rating: 0.0
  },
  3: {
    name: "Classic Wear",
    image: "images/product3.jpg",
    description: "Timeless classic wear suitable for all events.",
    sizes: {
      S: 38000,
      M: 43000,
      L: 48000
    },
    rating: 0.0
  }
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];

if (product) {
  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("ratingValue").textContent = product.rating.toFixed(1);

  const sizeSelect = document.getElementById("sizeSelect");
  const priceEl = document.getElementById("productPrice");

  Object.keys(product.sizes).forEach(size => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  function updatePrice() {
    const size = sizeSelect.value;
    priceEl.textContent = "₦" + product.sizes[size].toLocaleString();
  }

  sizeSelect.addEventListener("change", updatePrice);
  updatePrice();

  document.getElementById("addToCart").addEventListener("click", () => {
    addToCart({
      id: productId,
      name: product.name,
      size: sizeSelect.value,
      price: product.sizes[sizeSelect.value],
      image: product.image
    });
  });
}
