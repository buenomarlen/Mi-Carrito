// Actualizar carrito
function updateCart() {
  cartItemsList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(listItem);
    total += item.price;
  });

  totalElement.textContent = `Total: $${total}`;
}

// Manejar envío de archivo de pago
document.getElementById('payment-form').addEventListener('submit', event => {
  event.preventDefault();
  const fileInput = document.getElementById('payment-file');
  const file = fileInput.files[0];

  if (file) {
    alert(`Archivo "${file.name}" subido exitosamente.`);
  } else {
    alert('Por favor, sube un archivo.');
  }
});
