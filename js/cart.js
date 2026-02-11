function addToCart() {
  if (!selectedSize || !selectedColor) {
    alert("Please select both a Size and a Color");
    return;
  }

  const cartItem = {
    id: currentProductId,
    name: product.name,
    image: product.media[1].src, // Uses the first image
    price: product.sizes[selectedSize], // Grabs price based on size
    size: selectedSize,
    color: selectedColor, // <--- NEW
    quantity: 1
  };

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
}
