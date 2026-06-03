const prodigyImages = [
  "../images/prodigy/AA1.jpg",
  "../images/prodigy/AA2.jpg",
  "../images/prodigy/AA3.jpg",
  "../images/prodigy/AA4.jpg",
  "../images/prodigy/AA5.jpg",
  "../images/prodigy/AA6.jpg",
  "../images/prodigy/AA9.jpg",
  "../images/prodigy/AA10.jpg",
  "../images/prodigy/AA12.jpg",
  "../images/prodigy/AA13.jpg",
  "../images/prodigy/AA14.jpg",
  "../images/prodigy/AA15.jpg"
];
let currentProdigy = 0;
function showProdigySlide(idx) {
  const img = document.getElementById('prodigy-slide-img');
  img.src = prodigyImages[idx];
  img.alt = `Prodigy image ${idx + 1}`;
}
function nextProdigySlide() {
  currentProdigy = (currentProdigy + 1) % prodigyImages.length;
  showProdigySlide(currentProdigy);
}
function prevProdigySlide() {
  currentProdigy = (currentProdigy - 1 + prodigyImages.length) % prodigyImages.length;
  showProdigySlide(currentProdigy);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('prodigy-next').addEventListener('click', nextProdigySlide);
  document.getElementById('prodigy-prev').addEventListener('click', prevProdigySlide);
  showProdigySlide(currentProdigy);
});
