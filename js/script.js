// ================= HOME PAGE HERO SLIDER =================
// This handles the background images changing on your main landing page
const hero = document.querySelector(".hero");

const slides = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
  "images/slide4.jpg",
  "images/slide5.jpg",
  "images/slide6.jpg",
  "images/slide7.jpg",
  "images/slide8.jpg",
  "images/slide9.jpg",
  "images/slide10.jpg"
];

let index = 0;

// Only run the slider if the 'hero' element exists (on the home page)
if (hero) {
  // Set the first image immediately
  hero.style.backgroundImage = `url(${slides[index]})`;

  // Change image every 5 seconds
  setInterval(() => {
    index = (index + 1) % slides.length;
    hero.style.backgroundImage = `url(${slides[index]})`;
  }, 5000);
}

// ================= GLOBAL CART COUNT =================
// This function looks at the "local storage" to see how many items are in the bag
// and updates the number next to the shopping bag icon in the header.
function updateGlobalCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const badge = document.getElementById("cartCount");
  
  if (badge) {
    badge.innerText = count;
  }
}

// Run the count check as soon as the page loads
document.addEventListener("DOMContentLoaded", () => {
  updateGlobalCartCount();
});
