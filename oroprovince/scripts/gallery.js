document.querySelectorAll(".image-grid img").forEach(image => {
    image.addEventListener("click", function() {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", function() {
            lightbox.remove();
        });
    });
});
