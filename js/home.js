(() => {
  document.addEventListener('DOMContentLoaded', async (e) => {
    let productos = await fetch('../data/productos.json').then((res) =>
      res.json()
    );

    let ProductosContainer = document.getElementById('productosContainer');

    let productosHtml = productos
      .map((producto) => {
        const { images, description, price, id, categoria } = producto;
        const imageUrl = `./images/${producto.images[0]}.png`;

        console.log('imageUrl', imageUrl);
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
                <button class="btn btn-outline-secondary btn-sm"
                  data-product-id=${producto.id}
                  data-product-image-url=${producto.imageUrl}
                  data-product-description=${producto.description}
                  data-product-price=${producto.price}
                >
                  <i class="bi bi-cart me-2 pe-none"></i>
                  <span class="pe-none">Agregar</span>
                </button>
                <button class="btn btn-outline-secondary btn-sm">
                  <i class="bi bi-plus-square me-2 pe-none"></i>
                  <span class="pe-none">Ver mas</span>
                </button>
              </div>
            </div>
          </div>
        `;
      })
      .join(',')
      .replace(/\,/g, '')
      .toString();

    ProductosContainer.innerHTML = productosHtml;

    ProductosContainer.addEventListener('click', (e) => {
      let Alert = document.getElementById('alert');

      // console.log('producto', JSON.parse(e.target.dataset['producto']));

      let product = {
        id: e.target.dataset['productId'],
        imageUrl: `.${e.target.dataset['productImageUrl']}`,
        description: e.target.dataset['productDescription'],
        quantity: 1,
        price: e.target.dataset['productPrice'],
      };

      console.log('product', product);

      // Agregar producto al carrito
      agregarProductoACarrito(product);

      // Si existe una notificacion, entonces ya no crear nodo y retornar.
      // Evita duplicado de notificaciones.
      if (Alert) return;
      mostrarAlerta();
    });
  });

  function mostrarAlerta() {
    let alertContainer = document.createElement('div');
    alertContainer.className =
      'alert alert-success alert-dismissible fade show alert zi:tooltip alert:fixed';
    alertContainer.setAttribute('id', 'alert');

    let container = document.createElement('div');
    container.className = 'container p-3';

    let alertText = document.createElement('strong');
    alertText.innerHTML = 'El producto se agrego con exito';

    let btnClose = document.createElement('button');
    btnClose.className = 'btn-close';
    btnClose.setAttribute('type', 'button');
    btnClose.setAttribute('data-bs-dismiss', 'alert');
    btnClose.setAttribute('aria-label', 'Close');

    container.appendChild(btnClose);
    container.appendChild(alertText);
    alertContainer.appendChild(container);
    document.body.appendChild(alertContainer);
  }

  function agregarProductoACarrito(product) {
    let productsExist = localStorage.getItem('checkout');
    if (!productsExist) {
      localStorage.setItem('checkout', JSON.stringify([]));
    }

    const products = JSON.parse(localStorage.getItem('checkout'));

    localStorage.setItem('checkout', JSON.stringify([...products, product]));

    actualizarCarrito(products.length);
  }

  function actualizarCarrito(total) {
    let Carrito = document.getElementById('carrito');

    Carrito.innerHTML = `${
      total + 1
    }<i class="bi bi-cart pe-none"></i> | Comprar`;
  }
})();
