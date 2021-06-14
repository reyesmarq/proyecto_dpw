document.addEventListener('DOMContentLoaded', async (e) => {
  let { pathname, search } = window.location;

  let { nombre } = search
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
  if (!nombre) window.location.href = '../../index.html';

  let productos = await fetch('../../data/productos.json').then((res) =>
    res.json()
  );

  let productosCategoria = productos.filter((p) => p.categoria == nombre);

  // Si no se encuentra ningun producto con esa categoria regresar al index
  if (productosCategoria.length === 0)
    window.location.href = '../../index.html';

  let ProductosContainer = document.getElementById('productosContainer');
  let NombreCategoria = document.getElementById('nombreCategoria')

  let productosHtml =  productosCategoria
    .map((producto, index) => {
      const { images, description, price, id, categoria } = producto;
      const imageUrl = `../../images/${images[0]}.png`;

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
            <a class="btn btn-outline-info btn-sm" href="../producto.html?id=${id}" id="productoUrl">
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

  ProductosContainer.innerHTML = productosHtml
  NombreCategoria.innerHTML = nombre
});
