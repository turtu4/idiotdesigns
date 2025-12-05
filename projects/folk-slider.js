const folkImages = [
  "../images/folk/folk1.png",
  "../images/folk/folk2.png"
];

let currentFolk = 0;

function showFolkSlide(idx) {
  const img = document.getElementById('folk-slide-img');
  img.src = folkImages[idx];
  img.alt = `Murderfolk image ${idx + 1}`;
}

function nextFolkSlide() {
  currentFolk = (currentFolk + 1) % folkImages.length;
  showFolkSlide(currentFolk);
}

function prevFolkSlide() {
  currentFolk = (currentFolk - 1 + folkImages.length) % folkImages.length;
  showFolkSlide(currentFolk);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('folk-next').addEventListener('click', nextFolkSlide);
  document.getElementById('folk-prev').addEventListener('click', prevFolkSlide);
  showFolkSlide(currentFolk);
});
