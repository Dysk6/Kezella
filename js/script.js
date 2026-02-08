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

// Initial image
hero.style.backgroundImage = `url(${slides[index]})`;

setInterval(() => {
  index = (index + 1) % slides.length;
  hero.style.backgroundImage = `url(${slides[index]})`;
}, 5000);
