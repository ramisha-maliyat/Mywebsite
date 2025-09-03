document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalGallery = document.getElementById("modal-gallery");
  const modalVideo = document.getElementById("modal-video");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".cake-item").forEach(card => {
    card.addEventListener("click", () => {
      const title = card.dataset.title;
      const images = card.dataset.images.split(",");
      const video = card.dataset.video;

      // Title
      modalTitle.textContent = title;

      // Images
      modalGallery.innerHTML = "";
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "w-full rounded-xl";
        modalGallery.appendChild(img);
      });

      // Video
      modalVideo.src = video;
      modalVideo.play();

      // Show modal
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  modalClose.addEventListener("click", () => {
    modalVideo.pause();
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  // Hover video play/pause
  modalVideo.addEventListener("mouseenter", () => modalVideo.play());
  modalVideo.addEventListener("mouseleave", () => modalVideo.pause());
});
