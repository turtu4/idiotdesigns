const xImages = [
  "../images/x/X Series-1.jpg",
  "../images/x/X Series-2.jpg",
  "../images/x/X Series-3.jpg",
  "../images/x/X Series-4.jpg",
  "../images/x/X Series-5.jpg",
  "../images/x/X Series-6.jpg"
];
let currentX = 0;
function showXSlide(idx) {
  const img = document.getElementById('x-slide-img');
  img.src = xImages[idx];
  img.alt = `X Series image ${idx + 1}`;
}
function nextXSlide() {
  currentX = (currentX + 1) % xImages.length;
  showXSlide(currentX);
}
function prevXSlide() {
  currentX = (currentX - 1 + xImages.length) % xImages.length;
  showXSlide(currentX);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('x-next').addEventListener('click', nextXSlide);
  document.getElementById('x-prev').addEventListener('click', prevXSlide);
  showXSlide(currentX);
});
