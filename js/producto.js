document.addEventListener('DOMContentLoaded', async (e) => {
  let { pathname, search } = window.location;

  let { id } = search
    .split('?')
    .map((pair) => {
      if (pair !== '') return pair.split('=');
    })
    .filter((values) => values)
    .reduce((json, params) => {
      let key = params[0];
      let value = params[1];
      return { ...json, [key]: value };
    }, {});

  // si no existe id por parametro nos redirecciona a index
  if (!id) window.location.href = '../index.html';

  let productos = await fetch('../data/productos.json').then((res) =>
    res.json()
  );

  let producto = productos.find((p) => p.id == id);

  // Si no existe el producto en la data
  if (!producto) window.location.href = '../index.html';

  let Carousel = document.getElementById('carousel');
  let ProductData = document.getElementById('productosContainer');
  let images = producto.images.map((imagen) => `../images/${imagen}.png`);

  let carouselItemsHtml = images
    .map((imagen, index) => {
      let isActive = index === 0 ? 'active' : '';

      return `
      <div class="carousel-item ${isActive}">
        <img src="${imagen}" class="d-block w-100" alt="">
      </div>
      `;
    })
    .join(',')
    .replace(/\,/g, '')
    .toString();

  let carouselHtml = `
  <div class="carousel-inner">
    ${carouselItemsHtml}
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  `;

  let productoHtml = `
  <h5 class="mb-3">
    ${producto.description}
  </h5>
  <p class="text-muted">
    ${producto.description}
  </p>
  <div class="border-bottom pb-4">
    <a href="https://www.facebook.com/" target="_blank" class="me-2">
      <span class="badge bg-primary p-2">
        <i class="bi bi-facebook"></i>
        Compartir
      </span>
    </a>
  </div>
  <div class="border-bottom pb-3">
    <h3 class="text-primary fw-bold pt-3">$${producto.price}</h3>
    <p class="text-muted small">
      Para saber el precio del envío por favor agrega el producto a tu carrito.
    </p>
  </div>
  <div class="d-flex py-3 align-items-center">
    <p class="me-3">Cantidad: </p>
    <span class="me-3">
      <input type="number" value="1" class="form-control" style="width: 100px" min="1" max="10">
    </span>
    <button class="btn btn-success btn-sm"
      data-product-id=${producto.id}
      data-product-image-url=${producto.images[0]}
      data-product-description="${producto.description}"
      data-product-price=${producto.price}
    >
      <i class="bi bi-cart me-2 pe-none"></i>
      Agregar al carrito
    </button>
  </div>
  `;

  Carousel.innerHTML = carouselHtml;
  ProductData.innerHTML = productoHtml;
});
