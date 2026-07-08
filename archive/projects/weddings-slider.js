const weddingsImages = [
  "../images/weddings/weddings1.jpg",
  "../images/weddings/weddings2.jpg",
  "../images/weddings/weddings3.jpg",
  "../images/weddings/weddings4.jpg",
  "../images/weddings/weddings5.jpg",
  "../images/weddings/weddings6.jpg",
  "../images/weddings/weddings7.jpg",
  "../images/weddings/weddings8.jpg",
  "../images/weddings/weddings9.jpg",
  "../images/weddings/weddings10.jpg",
  "../images/weddings/weddings11.jpg",
  "../images/weddings/weddings12.jpg",
  "../images/weddings/weddings13.jpg",
  "../images/weddings/weddings14.jpg",
  "../images/weddings/weddings15.jpg",
  "../images/weddings/weddings16.jpg",
  "../images/weddings/weddings17.jpg",
  "../images/weddings/weddings18.jpg",
  "../images/weddings/weddings19.jpg",
  "../images/weddings/weddings20.jpg",
  "../images/weddings/weddings21.jpg"
];
let currentWeddings = 0;
function showWeddingsSlide(idx) {
  const img = document.getElementById('weddings-slide-img');
  img.src = weddingsImages[idx];
  img.alt = `Weddings image ${idx + 1}`;
}
function nextWeddingsSlide() {
  currentWeddings = (currentWeddings + 1) % weddingsImages.length;
  showWeddingsSlide(currentWeddings);
}
function prevWeddingsSlide() {
  currentWeddings = (currentWeddings - 1 + weddingsImages.length) % weddingsImages.length;
  showWeddingsSlide(currentWeddings);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('weddings-next').addEventListener('click', nextWeddingsSlide);
  document.getElementById('weddings-prev').addEventListener('click', prevWeddingsSlide);
  showWeddingsSlide(currentWeddings);
});
