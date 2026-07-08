const gretaImages = [
  "../images/greta/greta1.jpg",
  "../images/greta/greta2.jpg",
  "../images/greta/greta3.jpg",
  "../images/greta/greta4.jpg",
  "../images/greta/greta5.jpg"
];

let currentGreta = 0;

function showGretaSlide(idx) {
  const img = document.getElementById('greta-slide-img');
  img.src = gretaImages[idx];
  img.alt = `Studio session image ${idx + 1}`;
}

function nextGretaSlide() {
  currentGreta = (currentGreta + 1) % gretaImages.length;
  showGretaSlide(currentGreta);
}

function prevGretaSlide() {
  currentGreta = (currentGreta - 1 + gretaImages.length) % gretaImages.length;
  showGretaSlide(currentGreta);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('greta-next').addEventListener('click', nextGretaSlide);
  document.getElementById('greta-prev').addEventListener('click', prevGretaSlide);
  showGretaSlide(currentGreta);
});
