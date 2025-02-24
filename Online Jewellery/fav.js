document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to display cart items
    function displayCartItems() {
        cartItemsContainer.innerHTML = ''; // Clear the current items
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your wishlist is empty.</p>';
            return;
        }

        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });

        // Attach event listeners to remove buttons
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    // Function to remove item from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    // Initial display of cart items
    displayCartItems();

    // Handle checkout button
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout!');
            // You can redirect to a checkout page here or implement checkout logic
        } else {
            alert('Your cart is empty. Please add items to your cart before checking out.');
        }
    });
});
