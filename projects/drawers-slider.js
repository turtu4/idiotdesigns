const drawersImages = [
  "../images/drawers/drawers1.jpg",
  "../images/drawers/drawers2.jpg",
  "../images/drawers/drawers3.jpg",
  "../images/drawers/drawers4.jpg",
  "../images/drawers/drawers5.jpg",
  "../images/drawers/drawers6.jpg",
  "../images/drawers/drawers7.jpg",
  "../images/drawers/drawers8.jpg",
  "../images/drawers/drawers9.jpg",
  "../images/drawers/drawers10.jpg",
  "../images/drawers/drawers11.jpg",
  "../images/drawers/drawers12.jpg",
  "../images/drawers/drawers13.jpg",
  "../images/drawers/drawers14.jpg",
  "../images/drawers/drawers15.jpg",
  "../images/drawers/drawers16.jpg",
  "../images/drawers/drawers17.jpg",
  "../images/drawers/drawers18.jpg"
];
let currentDrawers = 0;
function showDrawersSlide(idx) {
  const img = document.getElementById('drawers-slide-img');
  img.src = drawersImages[idx];
  img.alt = `Art in Drawers image ${idx + 1}`;
}
function nextDrawersSlide() {
  currentDrawers = (currentDrawers + 1) % drawersImages.length;
  showDrawersSlide(currentDrawers);
}
function prevDrawersSlide() {
  currentDrawers = (currentDrawers - 1 + drawersImages.length) % drawersImages.length;
  showDrawersSlide(currentDrawers);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('drawers-next').addEventListener('click', nextDrawersSlide);
  document.getElementById('drawers-prev').addEventListener('click', prevDrawersSlide);
  showDrawersSlide(currentDrawers);
});
