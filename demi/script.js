document.addEventListener('DOMContentLoaded', () => {
    // Navbar hide/show on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('header');

    window.addEventListener('scroll', () => {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
            // Scroll down - hide the navbar
            navbar.style.top = '-60px';
        } else {
            // Scroll up - show the navbar
            navbar.style.top = '0';
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });

    // Footer visibility when scrolling to the bottom
    const footer = document.querySelector('footer');
    const setFooterVisibility = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.style.opacity = '1';
        } else {
            footer.style.opacity = '0';
        }
    };

    window.addEventListener('scroll', setFooterVisibility);
    setFooterVisibility(); // Initial check

    // Scroll to products section on "Shop Now" button click
    const shopNowButton = document.querySelector('.cta-btn');
    const productsSection = document.getElementById('products');

    shopNowButton.addEventListener('click', () => {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Filter dropdown show/hide functionality
    const filterBtn = document.getElementById('filter-btn');
    const filterDropdown = document.getElementById('filter-dropdown');

    filterBtn.addEventListener('click', () => {
        if (filterDropdown.style.display === 'none' || !filterDropdown.style.display) {
            filterDropdown.style.display = 'block';
        } else {
            filterDropdown.style.display = 'none';
        }
    });

    // Filter and search functionality
    const filterForm = document.getElementById('filter-form');
    const productElements = document.querySelectorAll('.catalog .product');
    const priceRange = document.getElementById('price');
    const priceValue = document.getElementById('price-value');
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('search-btn');

    // Update price range value display
    priceRange.addEventListener('input', () => {
        priceValue.textContent = `$${priceRange.value}`;
        filterProducts();
    });

    // Filter products based on dropdown and price range
    filterForm.addEventListener('change', filterProducts);

    function filterProducts() {
        const selectedFilter = filterForm.querySelector('select').value;
        const maxPrice = parseFloat(priceRange.value);

        productElements.forEach(product => {
            const priceText = product.querySelector('.price').textContent.replace('$', '');
            const price = parseFloat(priceText);

            const matchesFilter = selectedFilter === '' || product.querySelector('h3').textContent.toLowerCase().includes(selectedFilter.toLowerCase());
            const matchesPrice = price <= maxPrice;

            if (matchesFilter && matchesPrice) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Search products
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        productElements.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
