const toolImages = [
  "../images/tool/tool1.png",
  "../images/tool/tool2.png",
  "../images/tool/tool3.png"
];

let currentTool = 0;

function showToolSlide(idx) {
  const img = document.getElementById('tool-slide-img');
  img.src = toolImages[idx];
  img.alt = `Friends as Tools for Play image ${idx + 1}`;
}

function nextToolSlide() {
  currentTool = (currentTool + 1) % toolImages.length;
  showToolSlide(currentTool);
}

function prevToolSlide() {
  currentTool = (currentTool - 1 + toolImages.length) % toolImages.length;
  showToolSlide(currentTool);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('tool-next').addEventListener('click', nextToolSlide);
  document.getElementById('tool-prev').addEventListener('click', prevToolSlide);
  showToolSlide(currentTool);
});
