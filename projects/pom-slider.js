const pomImages = [
  "../images/pom/pom1.png",
  "../images/pom/pom2.png",
  "../images/pom/pom3.png",
  "../images/pom/pom4.png",
  "../images/pom/pom5.png",
  "../images/pom/pom6.png"
];

let currentPom = 0;

function showPomSlide(idx) {
  const img = document.getElementById('pom-slide-img');
  img.src = pomImages[idx];
  img.alt = `Pomana image ${idx + 1}`;
}

function nextPomSlide() {
  currentPom = (currentPom + 1) % pomImages.length;
  showPomSlide(currentPom);
}

function prevPomSlide() {
  currentPom = (currentPom - 1 + pomImages.length) % pomImages.length;
  showPomSlide(currentPom);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('pom-next').addEventListener('click', nextPomSlide);
  document.getElementById('pom-prev').addEventListener('click', prevPomSlide);
  showPomSlide(currentPom);
});
