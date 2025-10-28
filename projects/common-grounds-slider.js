const groundImages = [
  "../images/ground/g1.jpg",
  "../images/ground/g2.jpg",
  "../images/ground/g3.jpg",
  "../images/ground/g4.jpg",
  "../images/ground/g5.jpg",
  "../images/ground/g6.jpg",
  "../images/ground/g7.jpg",
  "../images/ground/g8.jpg"
];

let currentGround = 0;

function showGroundSlide(idx) {
  const img = document.getElementById('ground-slide-img');
  img.src = groundImages[idx];
  img.alt = `Common Grounds image ${idx + 1}`;
}

function nextGroundSlide() {
  currentGround = (currentGround + 1) % groundImages.length;
  showGroundSlide(currentGround);
}

function prevGroundSlide() {
  currentGround = (currentGround - 1 + groundImages.length) % groundImages.length;
  showGroundSlide(currentGround);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ground-next').addEventListener('click', nextGroundSlide);
  document.getElementById('ground-prev').addEventListener('click', prevGroundSlide);
  showGroundSlide(currentGround);
});
