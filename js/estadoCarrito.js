(() => {
  document.addEventListener('DOMContentLoaded', (e) => {
    let Carrito = document.getElementById('carrito');
    let total = 0

    Carrito.innerHTML = `${total}<i class="bi bi-cart pe-none"></i> | Comprar`;
  });
})();
