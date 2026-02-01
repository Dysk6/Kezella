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

updateCartCount();
