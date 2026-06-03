const stnedgeImages = [
  "../images/stnedge/stn-1.jpg",
  "../images/stnedge/stn-2.jpg",
  "../images/stnedge/stn.jpg"
];
let currentStnedge = 0;
function showStnedgeSlide(idx) {
  const img = document.getElementById('stnedge-slide-img');
  img.src = stnedgeImages[idx];
  img.alt = `Stone Edge image ${idx + 1}`;
}
function nextStnedgeSlide() {
  currentStnedge = (currentStnedge + 1) % stnedgeImages.length;
  showStnedgeSlide(currentStnedge);
}
function prevStnedgeSlide() {
  currentStnedge = (currentStnedge - 1 + stnedgeImages.length) % stnedgeImages.length;
  showStnedgeSlide(currentStnedge);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('stnedge-next').addEventListener('click', nextStnedgeSlide);
  document.getElementById('stnedge-prev').addEventListener('click', prevStnedgeSlide);
  showStnedgeSlide(currentStnedge);
});
