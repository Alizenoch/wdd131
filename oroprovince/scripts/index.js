document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Prevent default only if scrolling to a section on the same page
        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        } else {
            // Allow navigation to other pages
            window.location.href = this.href;
        }
    });
});