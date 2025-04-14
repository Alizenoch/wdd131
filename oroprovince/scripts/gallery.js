const galleryImages = [
    { src: "images/scenic-view.png", alt: "Scenic View of Oro Province's Mountains" },
    { src: "images/festivals.webp", alt: "Local Festival Celebration" },
    { src: "images/wildlife.webp", alt: "Rare Wildlife of Oro Province" },
    { src: "images/waterfalls.webp", alt: "Majestic Waterfall in the Highlands" },
    { src: "images/beach.webp", alt: "Beautiful Coastal Beach" },
    { src: "images/forest.webp", alt: "Dense Rainforest in Oro Province" }
];

document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector(".image-grid");

    // Dynamically create gallery images
    galleryImages.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.loading = "lazy";
        galleryContainer.appendChild(imgElement);
    });

    // Event delegation for lightbox
    galleryContainer.addEventListener("click", (e) => {
        const imgElement = e.target.closest("img");
        if (!imgElement || document.querySelector(".lightbox")) return;

        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imgElement.src}" alt="${imgElement.alt}">
                <p>${imgElement.alt}</p>
            </div>
        `;
        document.body.appendChild(lightbox);

        lightbox.querySelector("img").focus(); // Improve accessibility

        // Close lightbox on click or Escape key
        lightbox.addEventListener("click", () => lightbox.remove());
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                lightbox.remove();
            }
        }, { once: true });

        // Save last clicked image
        localStorage.setItem("lastClickedImage", imgElement.src);
    });

    // Restore last viewed image on load
    const lastImageSrc = localStorage.getItem("lastClickedImage");
    if (lastImageSrc) {
        const lastImage = document.querySelector(`img[src="${lastImageSrc}"]`);
        if (lastImage) lastImage.scrollIntoView({ behavior: "smooth", block: "center" });
    }
});

