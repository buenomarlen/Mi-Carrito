// script.js

const cart = [];
const cartItemsList = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

// Añadir producto al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', event => {
    const product = event.target.closest('.product');
    const productId = product.getAttribute('data-id');
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    cart.push({ id: productId, name: productName, price: productPrice });
    updateCart();
  });
});

