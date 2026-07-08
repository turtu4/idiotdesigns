const pingImages = [
  "../images/ping/ping1.png",
  "../images/ping/ping2.png",
  "../images/ping/ping3.png",
  "../images/ping/ping4.png",
  "../images/ping/ping5.png",
  "../images/ping/ping6.png"
];

let currentPing = 0;

function showPingSlide(idx) {
  const img = document.getElementById('ping-slide-img');
  img.src = pingImages[idx];
  img.alt = `Penhold Paddle image ${idx + 1}`;
}

function nextPingSlide() {
  currentPing = (currentPing + 1) % pingImages.length;
  showPingSlide(currentPing);
}

function prevPingSlide() {
  currentPing = (currentPing - 1 + pingImages.length) % pingImages.length;
  showPingSlide(currentPing);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ping-next').addEventListener('click', nextPingSlide);
  document.getElementById('ping-prev').addEventListener('click', prevPingSlide);
  showPingSlide(currentPing);
});
