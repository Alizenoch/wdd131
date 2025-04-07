    document.addEventListener("DOMContentLoaded", () => {
        // Retrieve the current count from localStorage or initialize to 0
        let reviewCount = localStorage.getItem("reviewCount") ? parseInt(localStorage.getItem("reviewCount")) : 0;
    
        // Increment the count since the page is successfully loaded
        reviewCount++;
    
        // Store the updated count in localStorage
        localStorage.setItem("reviewCount", reviewCount);
    
        // Display the updated count
        document.getElementById("review-counter").textContent = `Reviews submitted: ${reviewCount}`;
    
    

    // Product Array
    const products = [
        { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
    ];

    // Dynamically Populate Select Options
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;  // Use product ID as value
        option.textContent = product.name;  // Use product name for display
        productSelect.appendChild(option);
    });
});
