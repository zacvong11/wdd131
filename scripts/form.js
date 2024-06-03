document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: "1", name: "Guitar" },
        { id: "2", name: "Backpack" },
        { id: "3", name: "Fly rod" },
        { id: "4", name: "Snorkle" },
        { id: "5", name: "Belt" }
    ];

    const productSelect = document.getElementById("product-name");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });


    if (localStorage.getItem('reviewCount') === null) {
        localStorage.setItem('reviewCount', 0);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('review-count').textContent = `You have submitted ${reviewCount} reviews.`;
});