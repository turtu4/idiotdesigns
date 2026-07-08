const andreaImages = [
  "../images/andrea/andrea1.jpg",
  "../images/andrea/andrea2.jpg",
  "../images/andrea/andrea3.jpg",
  "../images/andrea/andrea4.jpg",
  "../images/andrea/andrea5.jpg",
  "../images/andrea/andrea6.jpg"
];

let currentAndrea = 0;

function showAndreaSlide(idx) {
  const img = document.getElementById('andrea-slide-img');
  img.src = andreaImages[idx];
  img.alt = `Samhållighet image ${idx + 1}`;
}

function nextAndreaSlide() {
  currentAndrea = (currentAndrea + 1) % andreaImages.length;
  showAndreaSlide(currentAndrea);
}

function prevAndreaSlide() {
  currentAndrea = (currentAndrea - 1 + andreaImages.length) % andreaImages.length;
  showAndreaSlide(currentAndrea);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('andrea-next').addEventListener('click', nextAndreaSlide);
  document.getElementById('andrea-prev').addEventListener('click', prevAndreaSlide);
  showAndreaSlide(currentAndrea);
});
