document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const email = document.querySelector("#email");
    const rating = document.querySelectorAll("input[name='rating']");
    const submitButton = document.querySelector("#submit");

    // Email validation
    email.addEventListener("input", function () {
        const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (!pattern.test(email.value)) {
            email.setCustomValidity("Please enter a valid email address.");
        } else {
            email.setCustomValidity("");
        }
    });

    // Ensure rating is selected
    form.addEventListener("submit", function (event) {
        let ratingSelected = false;
        rating.forEach(radio => {
            if (radio.checked) {
                ratingSelected = true;
            }
        });

        if (!ratingSelected) {
            event.preventDefault();
            alert("Please select a rating before submitting.");
        }
    });

    // Prevent empty fields
    form.addEventListener("submit", function (event) {
        const requiredFields = document.querySelectorAll("[required]");
        let allFilled = true;

        requiredFields.forEach(field => {
            if (!field.value) {
                allFilled = false;
                field.style.border = "2px solid red";
            } else {
                field.style.border = "1px solid #ccc";
            }
        });

        if (!allFilled) {
            event.preventDefault();
            alert("Please fill in all required fields.");
        }
    });
});

