const tshirtsImages = [
  "../images/tshirts/IMG_1025 1.jpg",
  "../images/tshirts/IMG_1028 1.jpg",
  "../images/tshirts/IMG_1029 1.jpg",
  "../images/tshirts/IMG_1030 1.jpg",
  "../images/tshirts/IMG_1032 1.jpg",
  "../images/tshirts/IMG_1033 1.jpg",
  "../images/tshirts/IMG_1034 1.jpg",
  "../images/tshirts/IMG_1035 1.jpg"
];
let currentTshirts = 0;
function showTshirtsSlide(idx) {
  const img = document.getElementById('tshirts-slide-img');
  img.src = tshirtsImages[idx];
  img.alt = `T-Shirts image ${idx + 1}`;
}
function nextTshirtsSlide() {
  currentTshirts = (currentTshirts + 1) % tshirtsImages.length;
  showTshirtsSlide(currentTshirts);
}
function prevTshirtsSlide() {
  currentTshirts = (currentTshirts - 1 + tshirtsImages.length) % tshirtsImages.length;
  showTshirtsSlide(currentTshirts);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('tshirts-next').addEventListener('click', nextTshirtsSlide);
  document.getElementById('tshirts-prev').addEventListener('click', prevTshirtsSlide);
  showTshirtsSlide(currentTshirts);
});
