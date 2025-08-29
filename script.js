let currentIndex = 0;

const images = [
  "https://picsum.photos/id/1015/900/600",
  "https://picsum.photos/id/1025/900/600",
  "https://picsum.photos/id/1035/900/600",
  "https://picsum.photos/id/1045/900/600"
];

let viewer = document.getElementById("viewer");
let viewerImg = document.getElementById("viewerImg");

function openViewer(index) {
  currentIndex = index;
  viewer.style.display = "flex";
  viewerImg.src = images[currentIndex];
}

function closeViewer() {
  viewer.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  viewerImg.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  viewerImg.src = images[currentIndex];
}
