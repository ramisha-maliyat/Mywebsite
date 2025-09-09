const cakeItems = document.querySelectorAll(".cake-item");
const modal = document.getElementById("modal");
const modalGallery = document.getElementById("modal-gallery");
const modalTitle = document.getElementById("modal-title");
const modalVideo = document.getElementById("modal-video");
const modalClose = document.getElementById("modal-close");

cakeItems.forEach(item => {
  item.addEventListener("click", () => {
    const title = item.dataset.title;
    const images = item.dataset.images ? item.dataset.images.split(",") : [];
    const videoSrc = item.dataset.video;

    modalTitle.textContent = title;

    // Clear gallery
    modalGallery.innerHTML = "";

    // Add images
    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      modalGallery.appendChild(img);
    });

    // Add video
    if (videoSrc) {
      modalVideo.src = videoSrc;
      modalVideo.style.display = "block";
      modalVideo.load();
    } else {
      modalVideo.style.display = "none";
    }

    modal.classList.remove("hidden");
  });
});

// Close modal
modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalVideo.pause();
});

// Responsive video width
window.addEventListener("resize", () => {
  if (modalVideo.style.display === "block") {
    const maxWidth = modalGallery.offsetWidth || 600;
    modalVideo.style.maxWidth = maxWidth + "px";
  }
});
