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

            // Use template literals to store last visited section in localStorage
            localStorage.setItem("lastVisitedSection", `${targetId}`);
        } else {
            // Allow navigation to other pages
            window.location.href = this.href;
        }
    });
});

// Restore last visited section on page load
document.addEventListener("DOMContentLoaded", () => {
    const lastSection = localStorage.getItem("lastVisitedSection");
    if (lastSection) {
        const targetSection = document.getElementById(lastSection);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });

            console.log(`Returning to section: ${lastSection}`);
        }
    }
});
