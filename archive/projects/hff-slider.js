const hffImages = [
  "../images/hff/hff1.jpg",
  "../images/hff/hff2.jpg",
  "../images/hff/hff3.jpg",
  "../images/hff/hff4.jpg",
  "../images/hff/hff5.jpg"
];
let currentHff = 0;
function showHffSlide(idx) {
  const img = document.getElementById('hff-slide-img');
  img.src = hffImages[idx];
  img.alt = `H+FF image ${idx + 1}`;
}
function nextHffSlide() {
  currentHff = (currentHff + 1) % hffImages.length;
  showHffSlide(currentHff);
}
function prevHffSlide() {
  currentHff = (currentHff - 1 + hffImages.length) % hffImages.length;
  showHffSlide(currentHff);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hff-next').addEventListener('click', nextHffSlide);
  document.getElementById('hff-prev').addEventListener('click', prevHffSlide);
  showHffSlide(currentHff);
});
