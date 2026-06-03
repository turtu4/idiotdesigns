const terrariumImages = [
  "../images/terrarium/terrarium1.jpg",
  "../images/terrarium/terrarium2.jpg",
  "../images/terrarium/terrarium3.jpg",
  "../images/terrarium/terrarium4.jpg",
  "../images/terrarium/terrarium5.jpg",
  "../images/terrarium/terrarium6.jpg"
];
let currentTerrarium = 0;
function showTerrariumSlide(idx) {
  const img = document.getElementById('terrarium-slide-img');
  img.src = terrariumImages[idx];
  img.alt = `Terrarium image ${idx + 1}`;
}
function nextTerrariumSlide() {
  currentTerrarium = (currentTerrarium + 1) % terrariumImages.length;
  showTerrariumSlide(currentTerrarium);
}
function prevTerrariumSlide() {
  currentTerrarium = (currentTerrarium - 1 + terrariumImages.length) % terrariumImages.length;
  showTerrariumSlide(currentTerrarium);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('terrarium-next').addEventListener('click', nextTerrariumSlide);
  document.getElementById('terrarium-prev').addEventListener('click', prevTerrariumSlide);
  showTerrariumSlide(currentTerrarium);
});
