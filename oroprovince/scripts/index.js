document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });

            // Save last visited section using template literals
            localStorage.setItem("lastVisitedSection", `${targetId}`);
        } else {
            window.location.href = this.href;
        }
    });
});

// Scroll to last visited section on page load
document.addEventListener("DOMContentLoaded", () => {
    let lastSection = localStorage.getItem("lastVisitedSection");
    if (lastSection) {
        let targetSection = document.getElementById(lastSection);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });

            console.log(`Returning to section: ${lastSection}`);
        }
    }
});
