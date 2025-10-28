const selfImages = [
  "../images/self/000037 1.png",
  "../images/self/000048 2.JPG",
  "../images/self/000075.JPG",
  "../images/self/Dispute.JPG",
  "../images/self/Frame 62.png",
  "../images/self/Frame 63.png",
  "../images/self/Frame 64.png",
  "../images/self/Frame 65.png",
  "../images/self/IMG_2177 2.JPG",
  "../images/self/IMG_2187 2.JPG",
  "../images/self/IMG_2222 2.JPG",
  "../images/self/IMG_2224 2.JPG",
  "../images/self/IMG_2230 2.JPG",
  "../images/self/IMG_2241 2.JPG",
  "../images/self/IMG_2243 2.JPG",
  "../images/self/Opposition.JPG",
  "../images/self/R1-01249-0014 1.png",
  "../images/self/Unity.JPG",
  "../images/self/mama.png"
];

let currentSelf = 0;

function showSelfSlide(idx) {
  const img = document.getElementById('self-slide-img');
  img.src = selfImages[idx];
  img.alt = `Self-Exposures image ${idx + 1}`;
}

function nextSelfSlide() {
  currentSelf = (currentSelf + 1) % selfImages.length;
  showSelfSlide(currentSelf);
}

function prevSelfSlide() {
  currentSelf = (currentSelf - 1 + selfImages.length) % selfImages.length;
  showSelfSlide(currentSelf);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('self-next').addEventListener('click', nextSelfSlide);
  document.getElementById('self-prev').addEventListener('click', prevSelfSlide);
  showSelfSlide(currentSelf);
});
