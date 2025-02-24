document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to display cart items
    function displayCartItems() {
        cartItemsContainer.innerHTML = ''; // Clear the current items
        let totalPrice = 0; // Initialize total price

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
                <p class="cart-item-price">₹${item.price}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemDiv);

            // Add item's price to total
            totalPrice += parseFloat(item.price);
        });

        // Display total price at the bottom of the cart
        const totalDiv = document.createElement('div');
        totalDiv.className = 'cart-total';
        totalDiv.innerHTML = `
            <h3>Total Price: ₹${totalPrice.toFixed(2)}</h3>
        `;
        cartItemsContainer.appendChild(totalDiv);

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
