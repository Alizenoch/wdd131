document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#review-form");
    const email = document.querySelector("#email");
    const productDropdown = document.querySelector("#product");
    const installationDate = document.querySelector("#installation_date");
    const review = document.querySelector("#review");
    const rating = document.querySelectorAll("input[name='rating_value']");

    // Product Array
    const productList = [
        { id: "product1", name: "Product 1" },
        { id: "product2", name: "Product 2" },
        { id: "product3", name: "Product 3" },
        { id: "product4", name: "Product 4" }
    ];

    // Populate dropdown dynamically
    productList.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productDropdown.appendChild(option);
    });

    // Load saved form data
    function loadFormData() {
        email.value = localStorage.getItem("email") || "";
        productDropdown.value = localStorage.getItem("product_name") || "";
        installationDate.value = localStorage.getItem("installation_date") || "";
        review.value = localStorage.getItem("review_text") || "";
    }

    // Save form data
    function saveFormData() {
        localStorage.setItem("email", email.value);
        localStorage.setItem("product_name", productDropdown.value);
        localStorage.setItem("installation_date", installationDate.value);
        localStorage.setItem("review_text", review.value);
    }

    // Listen for input changes
    form.addEventListener("input", saveFormData);

    // Load stored data when the page loads
    loadFormData();

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

    // Clear localStorage when form is submitted
    form.addEventListener("submit", function () {
        localStorage.removeItem("email");
        localStorage.removeItem("product_name");
        localStorage.removeItem("installation_date");
        localStorage.removeItem("review_text");
    });
});

