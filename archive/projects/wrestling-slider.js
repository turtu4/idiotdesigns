const wrestlingImages = [
  "../images/wrestling/w1.jpg",
  "../images/wrestling/w2.jpg",
  "../images/wrestling/w3.jpg"
];
let currentWrestling = 0;
function showWrestlingSlide(idx) {
  const img = document.getElementById('wrestling-slide-img');
  img.src = wrestlingImages[idx];
  img.alt = `Wrestling Tattoos image ${idx + 1}`;
}
function nextWrestlingSlide() {
  currentWrestling = (currentWrestling + 1) % wrestlingImages.length;
  showWrestlingSlide(currentWrestling);
}
function prevWrestlingSlide() {
  currentWrestling = (currentWrestling - 1 + wrestlingImages.length) % wrestlingImages.length;
  showWrestlingSlide(currentWrestling);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('wrestling-next').addEventListener('click', nextWrestlingSlide);
  document.getElementById('wrestling-prev').addEventListener('click', prevWrestlingSlide);
  showWrestlingSlide(currentWrestling);
});
