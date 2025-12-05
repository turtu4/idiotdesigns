const hearImages = [
  "../images/hear/hear1.png",
  "../images/hear/hear2.png",
  "../images/hear/hear3.png",
  "../images/hear/hear4.png",
  "../images/hear/hear5.png",
  "../images/hear/hear6.png",
  "../images/hear/hear7.png"
];

let currentHear = 0;

function showHearSlide(idx) {
  const img = document.getElementById('hear-slide-img');
  img.src = hearImages[idx];
  img.alt = `Hearing Aids Are Cool image ${idx + 1}`;
}

function nextHearSlide() {
  currentHear = (currentHear + 1) % hearImages.length;
  showHearSlide(currentHear);
}

function prevHearSlide() {
  currentHear = (currentHear - 1 + hearImages.length) % hearImages.length;
  showHearSlide(currentHear);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hear-next').addEventListener('click', nextHearSlide);
  document.getElementById('hear-prev').addEventListener('click', prevHearSlide);
  showHearSlide(currentHear);
});
