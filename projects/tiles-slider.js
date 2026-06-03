const tilesImages = [
  "../images/tiles/tile1.jpg",
  "../images/tiles/tile2.jpg",
  "../images/tiles/tile3.jpg"
];
let currentTiles = 0;
function showTilesSlide(idx) {
  const img = document.getElementById('tiles-slide-img');
  img.src = tilesImages[idx];
  img.alt = `Concrete Tiles image ${idx + 1}`;
}
function nextTilesSlide() {
  currentTiles = (currentTiles + 1) % tilesImages.length;
  showTilesSlide(currentTiles);
}
function prevTilesSlide() {
  currentTiles = (currentTiles - 1 + tilesImages.length) % tilesImages.length;
  showTilesSlide(currentTiles);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('tiles-next').addEventListener('click', nextTilesSlide);
  document.getElementById('tiles-prev').addEventListener('click', prevTilesSlide);
  showTilesSlide(currentTiles);
});
