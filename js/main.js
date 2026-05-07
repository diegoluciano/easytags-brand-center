/* Build unified gallery with featured mockups and social images. */
(function initBrandCenter() {
  initMobileMenu();

  const galleryGrid = document.getElementById("gallery-grid");
  const modal = document.getElementById("gallery-modal");
  const modalImage = document.getElementById("gallery-modal-image");
  const modalClose = document.getElementById("gallery-modal-close");
  if (!galleryGrid) return;

  const entries = [
    { file: "assets/mockups/reference-01.png", title: "Mockup editorial 01", source: "mockups" },
    { file: "assets/mockups/reference-02.png", title: "Mockup editorial 02", source: "mockups" },
    { file: "assets/mockups/mockup-new-01.png", title: "Mockup editorial 03", source: "mockups" },
    { file: "assets/mockups/mockup-new-02.png", title: "Mockup editorial 04", source: "mockups" }
  ];

  renderGallery(galleryGrid, entries);
  initGalleryModal();

  function renderGallery(container, items) {
    container.innerHTML = "";

    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "asset-card mazory-item";
      card.tabIndex = 0;

      const image = document.createElement("img");
      image.src = item.file;
      image.alt = item.title;
      image.loading = "lazy";
      image.onerror = () => {
        card.innerHTML = `<p>${item.title}: adicione o arquivo em <code>assets/${item.source}/</code>.</p>`;
      };

      const title = document.createElement("h3");
      title.textContent = item.title;

      card.addEventListener("click", () => openModal(item.file, item.title));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(item.file, item.title);
        }
      });

      card.append(image, title);
      container.appendChild(card);
    });
  }

  function initGalleryModal() {
    if (!modal || !modalImage || !modalClose) return;

    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  function openModal(src, alt) {
    if (!modal || !modalImage) return;
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal || !modalImage) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    modalImage.alt = "";
    document.body.style.overflow = "";
  }

  function initMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const links = document.getElementById("topnav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
