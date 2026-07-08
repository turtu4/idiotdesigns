const hockeyImages = [
  "../images/hockey/hockey1.jpg",
  "../images/hockey/hockey2.jpg",
  "../images/hockey/hockey3.jpg",
  "../images/hockey/hockey4.jpg",
  "../images/hockey/hockey5.jpg",
  "../images/hockey/hockey6.jpg",
  "../images/hockey/hockey7.jpg",
  "../images/hockey/hockey8.jpg",
  "../images/hockey/hockey9.jpg",
  "../images/hockey/hockey10.jpg",
  "../images/hockey/hockey11.jpg",
  "../images/hockey/hockey12.jpg"
];
let currentHockey = 0;
function showHockeySlide(idx) {
  const img = document.getElementById('hockey-slide-img');
  img.src = hockeyImages[idx];
  img.alt = `Hockey image ${idx + 1}`;
}
function nextHockeySlide() {
  currentHockey = (currentHockey + 1) % hockeyImages.length;
  showHockeySlide(currentHockey);
}
function prevHockeySlide() {
  currentHockey = (currentHockey - 1 + hockeyImages.length) % hockeyImages.length;
  showHockeySlide(currentHockey);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hockey-next').addEventListener('click', nextHockeySlide);
  document.getElementById('hockey-prev').addEventListener('click', prevHockeySlide);
  showHockeySlide(currentHockey);
});
