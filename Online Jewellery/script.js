
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down: hide navbar
        navbar.style.top = '-80px'; // Adjust based on the height of your header
    } else {
        // Scroll up: show navbar
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
const footer = document.querySelector('footer');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
        // User is at the bottom of the page: show footer
        footer.style.visibility = 'visible';
        footer.style.opacity = '1';
    } else {
        // User is not at the bottom: hide footer
        footer.style.visibility = 'visible';
        footer.style.opacity = '1';
    }
});
const shopNowBtn = document.querySelector('.cta-btn');

shopNowBtn.addEventListener('click', function() {
    const productSection = document.getElementById('sorte');
    productSection.scrollIntoView({ behavior: 'smooth' });
});
// Initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to add an item to the cart
    function addToCart(item) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${item.name} has been added to the cart.`);
    }

    // Listen for Add to Cart button clicks
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.getAttribute('data-name'),
                price: button.getAttribute('data-price'),
                description: button.getAttribute('data-description'),
                image: button.getAttribute('data-image')
            };
            addToCart(product);
        });
    });
});

// Show the login popup
document.getElementById('account-btn').addEventListener('click', function () {
    document.getElementById('login-popup').style.display = 'flex';
});

// Close the login popup
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('login-popup').style.display = 'none';
});

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check for empty fields
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Simulate a simple check (replace this with real authentication logic)
    if (username === "user" && password === "password123") {
        alert("Login successful!");
        closePopup(); // Close popup after login
    } else {
        alert("Invalid username or password. Try again.");
    }
}
function sortProducts() {
    const sortValue = document.getElementById("sort").value;
    const productList = document.getElementById("products");
    const products = Array.from(productList.getElementsByClassName("product"));

    let sortedProducts;

    if (sortValue === "priceLowHigh") {
        sortedProducts = products.sort((a, b) => a.getAttribute("data-price") - b.getAttribute("data-price"));
    } else if (sortValue === "priceHighLow") {
        sortedProducts = products.sort((a, b) => b.getAttribute("data-price") - a.getAttribute("data-price"));
    } else if (sortValue === "newest") {
        sortedProducts = products.sort((a, b) => b.getAttribute("data-newest") - a.getAttribute("data-newest"));
    }

    // Reorder the products in the DOM
    productList.innerHTML = '';
    sortedProducts.forEach(product => productList.appendChild(product));
}
