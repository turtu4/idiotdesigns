const guiImages = [
  "../images/gui/gui1.png",
  "../images/gui/gui2.png",
  "../images/gui/gui3.png",
  "../images/gui/gui4.png",
  "../images/gui/gui5.png",
  "../images/gui/gui6.png"
];

let currentGui = 0;

function showGuiSlide(idx) {
  const img = document.getElementById('gui-slide-img');
  img.src = guiImages[idx];
  img.alt = `Handledaren image ${idx + 1}`;
}

function nextGuiSlide() {
  currentGui = (currentGui + 1) % guiImages.length;
  showGuiSlide(currentGui);
}

function prevGuiSlide() {
  currentGui = (currentGui - 1 + guiImages.length) % guiImages.length;
  showGuiSlide(currentGui);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gui-next').addEventListener('click', nextGuiSlide);
  document.getElementById('gui-prev').addEventListener('click', prevGuiSlide);
  showGuiSlide(currentGui);
});
