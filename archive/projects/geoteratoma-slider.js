const geotératomaImages = [
  "../images/geoteratoma/IMG_5081 1.jpg",
  "../images/geoteratoma/IMG_5144 1.jpg",
  "../images/geoteratoma/cubes 1.jpg"
];
let currentGeoteratoma = 0;
function showGeoteratomaSlide(idx) {
  const img = document.getElementById('geoteratoma-slide-img');
  img.src = geotératomaImages[idx];
  img.alt = `GeoTeratoma image ${idx + 1}`;
}
function nextGeoteratomaSlide() {
  currentGeoteratoma = (currentGeoteratoma + 1) % geotératomaImages.length;
  showGeoteratomaSlide(currentGeoteratoma);
}
function prevGeoteratomaSlide() {
  currentGeoteratoma = (currentGeoteratoma - 1 + geotératomaImages.length) % geotératomaImages.length;
  showGeoteratomaSlide(currentGeoteratoma);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('geoteratoma-next').addEventListener('click', nextGeoteratomaSlide);
  document.getElementById('geoteratoma-prev').addEventListener('click', prevGeoteratomaSlide);
  showGeoteratomaSlide(currentGeoteratoma);
});
