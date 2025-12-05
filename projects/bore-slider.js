const boreImages = [
  "../images/bore/bore1.png",
  "../images/bore/bore2.png"
];

let currentBore = 0;

function showBoreSlide(idx) {
  const img = document.getElementById('bore-slide-img');
  img.src = boreImages[idx];
  img.alt = `Boredom image ${idx + 1}`;
}

function nextBoreSlide() {
  currentBore = (currentBore + 1) % boreImages.length;
  showBoreSlide(currentBore);
}

function prevBoreSlide() {
  currentBore = (currentBore - 1 + boreImages.length) % boreImages.length;
  showBoreSlide(currentBore);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bore-next').addEventListener('click', nextBoreSlide);
  document.getElementById('bore-prev').addEventListener('click', prevBoreSlide);
  showBoreSlide(currentBore);
});
