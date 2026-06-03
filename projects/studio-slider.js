const studioImages = [
  "../images/studio/IMG_4075.jpg",
  "../images/studio/IMG_4076.jpg",
  "../images/studio/IMG_4077.jpg",
  "../images/studio/IMG_4078.jpg",
  "../images/studio/IMG_4079.jpg",
  "../images/studio/IMG_4080.jpg",
  "../images/studio/IMG_4081.jpg",
  "../images/studio/IMG_4082.jpg",
  "../images/studio/IMG_4084.jpg",
  "../images/studio/IMG_4085.jpg",
  "../images/studio/IMG_4086.jpg",
  "../images/studio/IMG_4087.jpg",
  "../images/studio/IMG_4091.jpg",
  "../images/studio/IMG_4092.jpg",
  "../images/studio/IMG_4093.jpg",
  "../images/studio/IMG_4094.jpg",
  "../images/studio/IMG_4095.jpg",
  "../images/studio/IMG_4096.jpg",
  "../images/studio/IMG_4097.jpg",
  "../images/studio/IMG_4098.jpg",
  "../images/studio/IMG_4099.jpg",
  "../images/studio/IMG_4100.jpg",
  "../images/studio/IMG_4102.jpg",
  "../images/studio/IMG_4103.jpg",
  "../images/studio/IMG_4104.jpg",
  "../images/studio/IMG_4107.jpg",
  "../images/studio/IMG_4109.jpg",
  "../images/studio/IMG_4110.jpg",
  "../images/studio/IMG_4115.jpg",
  "../images/studio/IMG_4117.jpg",
  "../images/studio/IMG_4118.jpg",
  "../images/studio/IMG_4119.jpg",
  "../images/studio/IMG_4121.jpg",
  "../images/studio/IMG_4122.jpg",
  "../images/studio/IMG_4123.jpg",
  "../images/studio/IMG_4124.jpg",
  "../images/studio/IMG_4126.jpg"
];
let currentStudio = 0;
function showStudioSlide(idx) {
  const img = document.getElementById('studio-slide-img');
  img.src = studioImages[idx];
  img.alt = `Music Studio image ${idx + 1}`;
}
function nextStudioSlide() {
  currentStudio = (currentStudio + 1) % studioImages.length;
  showStudioSlide(currentStudio);
}
function prevStudioSlide() {
  currentStudio = (currentStudio - 1 + studioImages.length) % studioImages.length;
  showStudioSlide(currentStudio);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('studio-next').addEventListener('click', nextStudioSlide);
  document.getElementById('studio-prev').addEventListener('click', prevStudioSlide);
  showStudioSlide(currentStudio);
});
