

// Dynamically populate gallery using the object
document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector(".image-grid");

    for (const key in galleryImages) {
        const imgElement = document.createElement("img");
        imgElement.src = galleryImages[key].src;
        imgElement.alt = galleryImages[key].alt;
        imgElement.loading = "lazy";

        imgElement.addEventListener("click", function() {
            if (document.querySelector(".lightbox")) return;

            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function() {
                lightbox.remove();
            });
        });

        galleryContainer.appendChild(imgElement);
    }
});
