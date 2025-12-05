const selfFiles = [
  "self1.png",
  "self2.JPG",
  "self3.JPG",
  "self4.JPG",
  "self5.png",
  "self6.png",
  "self7.png",
  "self8.JPG",
  "self9.JPG",
  "self10.JPG",
  "self11.JPG",
  "self12.JPG",
  "self13.JPG",
  "self14.JPG",
  "self15.JPG",
  "self16.JPG"
];

const selfImages = selfFiles
  .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10))
  .map((file) => `../images/self/${file}`);

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
