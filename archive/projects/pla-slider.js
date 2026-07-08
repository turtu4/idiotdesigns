const plaImages = [
  "../images/pla/pla2.JPG",
  "../images/pla/pla3.JPG",
  "../images/pla/pla4.JPG"
];

let currentPla = 0;

function showPlaSlide(idx) {
  const img = document.getElementById('pla-slide-img');
  img.src = plaImages[idx];
  img.alt = `PLAqua image ${idx + 2}`;
}

function nextPlaSlide() {
  currentPla = (currentPla + 1) % plaImages.length;
  showPlaSlide(currentPla);
}

function prevPlaSlide() {
  currentPla = (currentPla - 1 + plaImages.length) % plaImages.length;
  showPlaSlide(currentPla);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('pla-next').addEventListener('click', nextPlaSlide);
  document.getElementById('pla-prev').addEventListener('click', prevPlaSlide);
  showPlaSlide(currentPla);
});
