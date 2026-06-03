const thImages = [
  "../images/th/Fat Frumos.jpg",
  "../images/th/Lovesick.jpg",
  "../images/th/lvsk.jpg"
];
let currentTh = 0;
function showThSlide(idx) {
  const img = document.getElementById('th-slide-img');
  img.src = thImages[idx];
  img.alt = `Fat Frumos image ${idx + 1}`;
}
function nextThSlide() {
  currentTh = (currentTh + 1) % thImages.length;
  showThSlide(currentTh);
}
function prevThSlide() {
  currentTh = (currentTh - 1 + thImages.length) % thImages.length;
  showThSlide(currentTh);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('th-next').addEventListener('click', nextThSlide);
  document.getElementById('th-prev').addEventListener('click', prevThSlide);
  showThSlide(currentTh);
});
