const puzzleImages = [
  "../images/puzzle/puzzle1.png",
  "../images/puzzle/puzzle2.png",
  "../images/puzzle/puzzle3.png"
];

let currentPuzzle = 0;

function showPuzzleSlide(idx) {
  const img = document.getElementById('puzzle-slide-img');
  img.src = puzzleImages[idx];
  img.alt = `Feeling Puzzled image ${idx + 1}`;
}

function nextPuzzleSlide() {
  currentPuzzle = (currentPuzzle + 1) % puzzleImages.length;
  showPuzzleSlide(currentPuzzle);
}

function prevPuzzleSlide() {
  currentPuzzle = (currentPuzzle - 1 + puzzleImages.length) % puzzleImages.length;
  showPuzzleSlide(currentPuzzle);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('puzzle-next').addEventListener('click', nextPuzzleSlide);
  document.getElementById('puzzle-prev').addEventListener('click', prevPuzzleSlide);
  showPuzzleSlide(currentPuzzle);
});
