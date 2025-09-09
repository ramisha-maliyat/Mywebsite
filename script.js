document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalGallery = document.getElementById("modal-gallery");
  const modalVideo = document.getElementById("modal-video");
  const modalClose = document.getElementById("modal-close");

  // Open modal on cake click
  document.querySelectorAll(".cake-item").forEach(card => {
    card.addEventListener("click", () => {
      const title = card.dataset.title;
      const images = card.dataset.images.split(",");
      const video = card.dataset.video;

      // Set modal title
      modalTitle.textContent = title;

      // Clear and add images to gallery
      modalGallery.innerHTML = "";
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "w-full rounded-xl flex-shrink-0"; // flex-shrink for smooth scrolling
        modalGallery.appendChild(img);
      });

      // Set modal video safelydocument.addEventListener("DOMContentLoaded", () => {
      const modal = document.getElementById("modal");
      const modalTitle = document.getElementById("modal-title");
      const modalGallery = document.getElementById("modal-gallery");
      const modalVideo = document.getElementById("modal-video");
      const modalClose = document.getElementById("modal-close");

      // Open modal on cake click
      document.querySelectorAll(".cake-item").forEach(card => {
        card.addEventListener("click", () => {
          const title = card.dataset.title;
          const images = card.dataset.images.split(",");
          const video = card.dataset.video;

          modalTitle.textContent = title;

          // Clear gallery
          modalGallery.innerHTML = "";
          images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.className = "rounded-xl flex-shrink-0";
            modalGallery.appendChild(img);
          });

          // Set video
          modalVideo.pause();
          modalVideo.src = "";
          modalVideo.src = video;
          modalVideo.load();
          modalVideo.play();

          // Show modal
          modal.classList.remove("hidden");
          modal.classList.add("flex");
        });
      });

      // Close modal
      modalClose.addEventListener("click", () => {
        modalVideo.pause();
        modal.classList.add("hidden");
        modal.classList.remove("flex");

        // Scroll to menu section
        const menuSection = document.getElementById("menu-section");
        if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
      });

      // Hover play/pause
      modalVideo.addEventListener("mouseenter", () => modalVideo.play());
      modalVideo.addEventListener("mouseleave", () => modalVideo.pause());
      modalVideo.pause();
      modalVideo.src = ""; // clear previous source
      modalVideo.src = video;
      modalVideo.load();
      modalVideo.play();

      // Show modal
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  // Close modal
  modalClose.addEventListener("click", () => {
    modalVideo.pause();
    modal.classList.add("hidden");
    modal.classList.remove("flex");

    // Smooth scroll back to menu section
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Optional: Hover play/pause on modal video
  modalVideo.addEventListener("mouseenter", () => modalVideo.play());
  modalVideo.addEventListener("mouseleave", () => modalVideo.pause());
});
