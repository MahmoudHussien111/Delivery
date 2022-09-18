// Select Landing Page
let landing = document.querySelector(".landing");
let overlay = document.querySelector(".landing .overlay");

// Image Array
let image = ["-1.jpg", "-2.jpg", "-3.jpg"];

// ForEach
setInterval(function () {
  let random = Math.floor(Math.random() * image.length + 1);
  landing.style.backgroundImage = `url("image/-${random}.jpg")`;
}, 3000);

setInterval(function () {
  overlay.style.animation = "rotat 3s infinite ease";
}, 3000);
// Style Overlay
