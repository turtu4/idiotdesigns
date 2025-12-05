const shineImages = [
  "../images/shine/dome.png",
  "../images/shine/shine1.png",
  "../images/shine/shine2.png",
  "../images/shine/shine3.png",
  "../images/shine/shine4.png"
];

let currentShine = 0;

function showShineSlide(idx) {
  const img = document.getElementById('shine-slide-img');
  img.src = shineImages[idx];
  img.alt = `Shine & Sparkle image ${idx + 1}`;
}

function nextShineSlide() {
  currentShine = (currentShine + 1) % shineImages.length;
  showShineSlide(currentShine);
}

function prevShineSlide() {
  currentShine = (currentShine - 1 + shineImages.length) % shineImages.length;
  showShineSlide(currentShine);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('shine-next').addEventListener('click', nextShineSlide);
  document.getElementById('shine-prev').addEventListener('click', prevShineSlide);
  showShineSlide(currentShine);
});
