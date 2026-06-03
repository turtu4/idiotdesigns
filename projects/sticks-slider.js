const sticksImages = [
  "../images/sticks/IMG_0202 1.jpg",
  "../images/sticks/IMG_0204 1.jpg",
  "../images/sticks/IMG_0206 1.jpg",
  "../images/sticks/IMG_0207 1.jpg",
  "../images/sticks/IMG_0254 1.jpg",
  "../images/sticks/IMG_0256 1.jpg",
  "../images/sticks/IMG_0265 1.jpg",
  "../images/sticks/IMG_0281 1.jpg"
];
let currentSticks = 0;
function showSticksSlide(idx) {
  const img = document.getElementById('sticks-slide-img');
  img.src = sticksImages[idx];
  img.alt = `Sticks image ${idx + 1}`;
}
function nextSticksSlide() {
  currentSticks = (currentSticks + 1) % sticksImages.length;
  showSticksSlide(currentSticks);
}
function prevSticksSlide() {
  currentSticks = (currentSticks - 1 + sticksImages.length) % sticksImages.length;
  showSticksSlide(currentSticks);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sticks-next').addEventListener('click', nextSticksSlide);
  document.getElementById('sticks-prev').addEventListener('click', prevSticksSlide);
  showSticksSlide(currentSticks);
});
