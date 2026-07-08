const addictionaryImages = [
  "../images/addictionary/ad1.jpg",
  "../images/addictionary/ad2.jpg"
];
let currentAddictionary = 0;
function showAddictionarySlide(idx) {
  const img = document.getElementById('addictionary-slide-img');
  img.src = addictionaryImages[idx];
  img.alt = `Adictionary image ${idx + 1}`;
}
function nextAddictionarySlide() {
  currentAddictionary = (currentAddictionary + 1) % addictionaryImages.length;
  showAddictionarySlide(currentAddictionary);
}
function prevAddictionarySlide() {
  currentAddictionary = (currentAddictionary - 1 + addictionaryImages.length) % addictionaryImages.length;
  showAddictionarySlide(currentAddictionary);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addictionary-next').addEventListener('click', nextAddictionarySlide);
  document.getElementById('addictionary-prev').addEventListener('click', prevAddictionarySlide);
  showAddictionarySlide(currentAddictionary);
});
