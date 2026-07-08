const danielImages = [
  "../images/daniel/daniel1.jpg",
  "../images/daniel/daniel2.jpg",
  "../images/daniel/daniel3.jpg",
  "../images/daniel/daniel4.jpg",
  "../images/daniel/daniel5.jpg",
  "../images/daniel/daniel6.jpg",
  "../images/daniel/daniel7.jpg",
  "../images/daniel/daniel8.jpg",
  "../images/daniel/daniel9.jpg"
];

let currentDaniel = 0;

function showDanielSlide(idx) {
  const img = document.getElementById('daniel-slide-img');
  img.src = danielImages[idx];
  img.alt = `Farväl image ${idx + 1}`;
}

function nextDanielSlide() {
  currentDaniel = (currentDaniel + 1) % danielImages.length;
  showDanielSlide(currentDaniel);
}

function prevDanielSlide() {
  currentDaniel = (currentDaniel - 1 + danielImages.length) % danielImages.length;
  showDanielSlide(currentDaniel);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('daniel-next').addEventListener('click', nextDanielSlide);
  document.getElementById('daniel-prev').addEventListener('click', prevDanielSlide);
  showDanielSlide(currentDaniel);
});
