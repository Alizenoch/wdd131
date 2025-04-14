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

    galleryImages.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.loading = "lazy";
        galleryContainer.appendChild(imgElement);

        imgElement.addEventListener("click", () => {
            if (document.querySelector(".lightbox")) return;

            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${image.src}" alt="${image.alt}">
                    <p>${image.alt}</p>
                </div>
            `;
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", () => {
                lightbox.remove();
            });
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            document.querySelector(".lightbox")?.remove();
        }
    });
});
