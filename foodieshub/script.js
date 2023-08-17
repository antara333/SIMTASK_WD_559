// This is a simplified example of adding items to the cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const itemName = item.querySelector('h3').textContent;
        const itemPrice = parseFloat(item.querySelector('.price').textContent.slice(1));

        const cartItem = document.createElement('li');
        cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
        cartItemsList.appendChild(cartItem);

        total += itemPrice;
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    });
});

// Simplified checkout process
const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', () => {
    alert(`Total: $${total.toFixed(2)}. Thank you for your order!`);
    // You would typically perform more actions here, like sending the order to a server.
});
