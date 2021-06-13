(() => {
  const TBody = document.getElementById('checkoutBody');
  // construyendo la logica una vez el dom haya cargado completamente
  document.addEventListener('DOMContentLoaded', (e) => {
    if (!TBody) TBody = document.getElementById('checkoutBody');
    const BtnBorrarCarrito = document.getElementById('btnBorrarCarrito');

    // build the checkout
    buildCheckout();

    TBody.addEventListener('click', (e) => {
      // If the click was over the trash button
      if (e.target.dataset['action'] === 'delete') {
        removeProduct(e);
      }
    });

    TBody.addEventListener('change', (e) => {
      if (e.target.dataset['action'] === 'quantity') {
        updateProduct(e); // This should re render the layout.
      }
    });

    BtnBorrarCarrito.addEventListener('click', () => {
      localStorage.setItem('checkout', JSON.stringify([]));

      buildCheckout();
    });
  });

  /**
   * @returns {void}
   */
  function buildCheckout() {
    let products = JSON.parse(localStorage.getItem('checkout'));

    let htmlContent = products.map((product) => {
      let imageUrl = `../images/${product.imageUrl}.png`;
      return `
        <tr class="align-middle">
          <th scope="row" class="p-4">
            <img src="${imageUrl}" alt="" width="100">
          </th>
          <td class="p-4">${product.description}</td>
          <td class="text-center p-4">
            <input type="number" class="form-control" style="width: 100px" value="${
              product.quantity
            }" min="1" max="10" data-action="quantity" data-product-id=${
        product.id
      }>
          </td>
          <td class="text-center p-4">$${product.price}</td>
          <td class="text-center p-4">$${Number(
            product.price * product.quantity
          ).toFixed(2)}</td>
          <td class="text-center p-4">
            <i class="bi bi-trash" data-product-id="${
              product.id
            }" data-action="delete"></i>
          </td>
        </tr>
      `;
    });

    TBody.innerHTML = htmlContent;
  }

  function removeProduct(e) {
    let productId = e.target.dataset['productId'];

    if (!productId) return;

    // Seleccionando los productos que ya estan en el localstorage
    let products = Array.from(JSON.parse(localStorage.getItem('checkout')));

    // Seleccionar todos los productos excepto el que vamos a eliminar, para dejarlo fuera del arreglo
    products = products.filter((product) => product.id != productId);

    // Guardamos la nueva informacion del arreglo
    localStorage.setItem('checkout', JSON.stringify(products));

    // Contruimos nuevamente el layout
    buildCheckout();
  }

  function updateProduct(e) {
    let quantity = e.target.value;
    let productId = e.target.dataset['productId'];

    // getting the local state of the products
    let products = Array.from(JSON.parse(localStorage.getItem('checkout')));

    // getting the index of the products we are about to change
    let product = products.find((product) => product.id == productId);
    let productIndex = products.findIndex((product) => product.id == productId);

    // Updating the data
    products.splice(productIndex, 1, { ...product, quantity });

    // updateing the local storage with the new products object
    localStorage.setItem('checkout', JSON.stringify(products));

    // re- render the html
    buildCheckout();
  }
})();
