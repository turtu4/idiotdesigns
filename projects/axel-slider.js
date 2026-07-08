const axelImages = [
  "../images/axel/axel1.jpg",
  "../images/axel/axel2.jpg",
  "../images/axel/axel3.jpg",
  "../images/axel/axel4.jpg",
  "../images/axel/axel5.jpg",
  "../images/axel/axel6.jpg"
];

let currentAxel = 0;

function showAxelSlide(idx) {
  const img = document.getElementById('axel-slide-img');
  img.src = axelImages[idx];
  img.alt = `Self Portrait image ${idx + 1}`;
}

function nextAxelSlide() {
  currentAxel = (currentAxel + 1) % axelImages.length;
  showAxelSlide(currentAxel);
}

function prevAxelSlide() {
  currentAxel = (currentAxel - 1 + axelImages.length) % axelImages.length;
  showAxelSlide(currentAxel);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('axel-next').addEventListener('click', nextAxelSlide);
  document.getElementById('axel-prev').addEventListener('click', prevAxelSlide);
  showAxelSlide(currentAxel);
});
