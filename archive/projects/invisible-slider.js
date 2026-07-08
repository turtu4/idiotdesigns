const invisibleImages = [
  "../images/invisible/invisible0.png"
];

let currentInvisible = 0;

function showInvisibleSlide(idx) {
  const img = document.getElementById('invisible-slide-img');
  img.src = invisibleImages[idx];
  img.alt = `Invisible Exhibitions image ${idx + 1}`;
}

function nextInvisibleSlide() {
  currentInvisible = (currentInvisible + 1) % invisibleImages.length;
  showInvisibleSlide(currentInvisible);
}

function prevInvisibleSlide() {
  currentInvisible = (currentInvisible - 1 + invisibleImages.length) % invisibleImages.length;
  showInvisibleSlide(currentInvisible);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('invisible-next').addEventListener('click', nextInvisibleSlide);
  document.getElementById('invisible-prev').addEventListener('click', prevInvisibleSlide);
  showInvisibleSlide(currentInvisible);
});
