(() => {
  let productos = [
    {
      id: 1,
      imageUrl: './images/1.1.png',
      description: 'Mouse Inalambrico Vorago MO-207 Rosa',
      price: 4.95,
    },
    {
      id: 2,
      imageUrl: './images/2.1.png',
      description:
        'Silla Gamer Deportiva Vertagear SL1000 Black/Green VG-SL1000-GR',
      price: 294.95,
    },
    {
      id: 3,
      imageUrl: './images/3.1.png',
      description:
        'Teclado Gamer REDRAGON K589RGB-SP SHRAPNEL / Alambrico / RGB / Mecánico / Outemu Blue LP / Español / K589RGB-SP-SHRAPNEL',
      price: 78.45,
    },
    {
      id: 4,
      imageUrl: './images/4.1.png',
      description:
        'Mochila Gamer para laptop / Trust Gaming Hunter GXT1250C / 15.6" / Camuflaje / Resistente al agua / Antirasguños / Antichoques / 23868',
      price: 49.95,
    },
    {
      id: 5,
      imageUrl: './images/5.1.png',
      description:
        'Lentes Gamer Xzeal XZAGG50R XZ500 Rojos / Anti Blue Light / Termoplástico TR90 / Estuche y Microfibra incluidos',
      price: 18.45,
    },
    {
      id: 6,
      imageUrl: './images/6.1.png',
      description:
        'Camara Web HD Logitech C505 / 720p-30FPS / 960-001363 / Promo Logi',
      price: 18.45,
    },
  ];

  document.addEventListener('DOMContentLoaded', (e) => {
    // ! borrar esto una vez listo para entregar
    localStorage.clear();

    let ProductosContainer = document.getElementById('productosContainer');

    let productosHtml = productos
      .map((producto) => {
        return `
          <div class="col-md-3">
            <div class="card mb-4 border-0 shadow-sm card:effect">
              <img src="${producto.imageUrl}" alt="" class="card-img-top card:img:crop">
              <div class="card-body">
                <p class="cart-text small txt:trun:5">
                  ${producto.description}
                </p>
                <h6 class="card-title fw-bold text-primary">$${producto.price}</h6>
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
      'alert alert-success alert-dismissible fade show alert zi:tooltip';
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
  }
})();
