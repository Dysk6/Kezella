// ==========================
// ADD TO CART FUNCTION
// ==========================
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if same product + same size already exists
  const existingItem = cart.find(cartItem =>
    cartItem.id === item.id &&
    cartItem.size === item.size
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
}

// ==========================
// UPDATE CART COUNT
// ==========================
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach(item => {
    total += item.quantity;
  });

  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    cartCount.innerText = total;
  }
}

// ==========================
// RUN ON EVERY PAGE LOAD
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
});
