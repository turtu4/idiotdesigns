const nunuImages = [
  "../images/nu/nu1.png",
  "../images/nu/nu2.png",
  "../images/nu/nu3.png",
  "../images/nu/nu4.png",
  "../images/nu/nu5.png",
  "../images/nu/nu6.png",
  "../images/nu/nu7.png",
  "../images/nu/nu8.png",
  "../images/nu/nu9.png",
  "../images/nu/nu10.png",
  "../images/nu/nu11.png",
  "../images/nu/nu12.png",
  "../images/nu/nu13.png",
  "../images/nu/nu14.png",
  "../images/nu/nu15.png",
];

let currentNunu = 0;

function showNunuSlide(idx) {
  const img = document.getElementById('nunu-slide-img');
  img.src = nunuImages[idx];
  img.alt = `NUNU image ${idx + 1}`;
}

function nextNunuSlide() {
  currentNunu = (currentNunu + 1) % nunuImages.length;
  showNunuSlide(currentNunu);
}

function prevNunuSlide() {
  currentNunu = (currentNunu - 1 + nunuImages.length) % nunuImages.length;
  showNunuSlide(currentNunu);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nunu-next').addEventListener('click', nextNunuSlide);
  document.getElementById('nunu-prev').addEventListener('click', prevNunuSlide);
  showNunuSlide(currentNunu);
});
