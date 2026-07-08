const azurImages = [
  "../images/azur/azur1.png",
  "../images/azur/azur2.png",
  "../images/azur/azur3.png",
  "../images/azur/azur4.png",
  "../images/azur/azur5.png",
  "../images/azur/azur6.png",
  "../images/azur/azur7.png",
  "../images/azur/azur8.png",
  "../images/azur/azur9.png",
  "../images/azur/azur10.png"
];

let currentAzur = 0;

function showAzurSlide(idx) {
  const img = document.getElementById('azur-slide-img');
  img.src = azurImages[idx];
  img.alt = `Azur Foundation simulation report image ${idx + 1}`;
}

function nextAzurSlide() {
  currentAzur = (currentAzur + 1) % azurImages.length;
  showAzurSlide(currentAzur);
}

function prevAzurSlide() {
  currentAzur = (currentAzur - 1 + azurImages.length) % azurImages.length;
  showAzurSlide(currentAzur);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('azur-next').addEventListener('click', nextAzurSlide);
  document.getElementById('azur-prev').addEventListener('click', prevAzurSlide);
  showAzurSlide(currentAzur);
});
