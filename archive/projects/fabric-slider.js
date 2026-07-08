const fabricImages = [
  "../images/fabric/fabric1.jpg",
  "../images/fabric/fabric2.jpg",
  "../images/fabric/fabric3.jpg",
  "../images/fabric/fabric4.jpg",
  "../images/fabric/fabric5.jpg",
  "../images/fabric/fabric6.jpg",
  "../images/fabric/fabric7.jpg",
  "../images/fabric/fabric8.jpg",
  "../images/fabric/fabric9.jpg",
  "../images/fabric/fabric10.jpg",
  "../images/fabric/fabric11.jpg"
];
let currentFabric = 0;
function showFabricSlide(idx) {
  const img = document.getElementById('fabric-slide-img');
  img.src = fabricImages[idx];
  img.alt = `Fabric on Film image ${idx + 1}`;
}
function nextFabricSlide() {
  currentFabric = (currentFabric + 1) % fabricImages.length;
  showFabricSlide(currentFabric);
}
function prevFabricSlide() {
  currentFabric = (currentFabric - 1 + fabricImages.length) % fabricImages.length;
  showFabricSlide(currentFabric);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fabric-next').addEventListener('click', nextFabricSlide);
  document.getElementById('fabric-prev').addEventListener('click', prevFabricSlide);
  showFabricSlide(currentFabric);
});
