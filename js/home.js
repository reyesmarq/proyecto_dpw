(() => {
  document.addEventListener('DOMContentLoaded', async (e) => {
    let productos = await fetch('../data/productos.json').then((res) =>
      res.json()
    );

    let ProductosContainer = document.getElementById('productosContainer');

    let productosHtml = productos
      .map((producto) => {
        const { images, description, price, id } = producto;
        const imageUrl = `./images/${images[0]}.png`;

        return `
          <div class="col-md-3">
            <div class="card mb-4 border-0 shadow-sm card:effect">
              <img src="${imageUrl}" alt="" class="card-img-top card:img:crop">
              <div class="card-body">
                <p class="cart-text small txt:trun:5">
                  ${description}
                </p>
                <h6 class="card-title fw-bold text-primary">$${price}</h6>
              </div>
              <div class="card-footer d-flex justify-content-between bg-white border-0">
                <button class="btn btn-success btn-sm"
                  data-product-id=${id}
                  data-product-image-url=${images[0]}
                  data-product-description="${description}"
                  data-product-price=${price}
                >
                  <i class="bi bi-cart me-2 pe-none"></i>
                  <span class="pe-none">Agregar</span>
                </button>
                <a class="btn btn-outline-info btn-sm" href="./pages/producto.html?id=${id}" id="productoUrl">
                  <i class="bi bi-plus-square me-2 pe-none"></i>
                  <span class="pe-none">Ver mas</span>
                </a>
              </div>
            </div>
          </div>
        `;
      })
      .join(',')
      .replace(/\,/g, '')
      .toString();

    ProductosContainer.innerHTML = productosHtml;
  });
})();
