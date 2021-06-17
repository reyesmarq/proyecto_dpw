(() => {
  let data = [
    {
      id: 1,
      header: '¿es seguro y confiable comprar en ddtech?',
      body: [
        `Claro, puedes comprar en DDTECH con toda tranquilidad, somos una empresa establecida con más de 8 Años en la venta de productos en línea con miles de clientes satisfechos, todos nuestros pagos con tarjeta son por medio de plataformas seguras como PayPal y Mercado Pago, que mantienen tu dinero seguro hasta tener el producto en tus manos.`,
        'Te invitamos a visitarnos en Facebook y consultar la sección quienes somos.',
      ],
    },
    {
      id: 2,
      header: '¿qué métodos de pago aceptan?',
      body: [
        'Para tu comodidad contamos con múltiples métodos para pagar tu compra, los cuales son: Depósito Bancario, Transferencia Bancaria, Depósito en tiendas Oxxo, Mercado Pago, PayPal, Tarjetas de Débito, Tarjetas de Crédito.',
      ],
    },
    {
      id: 3,
      header: '¿cómo encontrar y comprar un producto?',
      body: [
        'Comprar en DDTECH.MX es muy fácil, puedes encontrar el producto que necesitas, utilizando el buscador o bien utilizar la navegación por categorías, una vez que encuentres el producto que deseas, solo agrégalo a tu carrito para realizar tu compra.',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/6yoHL7xEcNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      ],
    },
    {
      id: 4,
      header: '¿cómo recoger mi pedido en una tienda de ddtech?',
      body: [
        'Si te encuentras en Guadalajara es posible que te resulte más cómodo recoger tu pedido, para ello una vez que tengas los productos en tu carrito de compra, selecciona en la casilla tipo de entrega la opción “En sucursal” una vez que hayas pagado tu compra, recibirás un correo con el resumen de tu pedido, por favor responde en ese correo indicándonos en cual de nuestras tiendas deseas recoger tu paquete, puedes consultar las direcciones de nuestras tiendas <a href="./contacto.html">aquí</a>',
      ],
    },
    {
      id: 5,
      header: '¿cuánto cuestan los envios?',
      body: [
        'Nuestros productos pueden llegar a cualquier parte de la república mexicana, para saber el precio de tu envió, únicamente agrega los productos que deseas a tu carrito de compra, una vez en el carrito selecciona en la casilla tipo de entrega la opción “A domicilio” la página calculará automáticamente el precio de tu envió y te lo mostrará.',
      ],
    },
    {
      id: 6,
      header: '¿cómo crear una cuenta?',
      body: [
        'Para tu comodidad en DDTECH puedes comprar como invitado o registrarte para tener una cuenta, si te registras, guardaremos tu domicilio para que no tengas que ingresarlo cada vez que realizas una compra. En la parte superior de la página web da clic en Registrarme, ingresa tus datos en la sección “crear una nueva cuenta” una vez completados los datos pulsa el botón registrarme.',
      ],
    },
    {
      id: 7,
      header: '¿cómo pagar con depósito bancario?',
      body: [
        'En el paso 3 del carrito de compra, selecciona como método de pago Deposito, una vez seleccionado la página te mostrará los números de cuenta, esta misma información la recibirás en tu correo electrónico, para que puedas tenerla a la mano cuando acudas a pagar. Después de haber realizado tu pago, deberás enviarnos una foto del comprobante de pago por medio de un correo electrónico a la dirección ventas@ninis.com.sv',
      ],
    },
    {
      id: 8,
      header: '¿cómo pagar con transferencia bancaria?',
      body: [
        'En el paso 3 del carrito de compra, selecciona como método de pago Transferencia, una vez seleccionado la página te mostrara las claves interbancarias, esta misma información la recibirás en tu correo electrónico, para que puedas tenerla a la mano cuando acudas a pagar. Después de haber realizado tu pago, deberás enviarnos una foto del comprobante de pago por medio de un correo electrónico a la dirección ventas@ninis.com.sv',
      ],
    },
    {
      id: 9,
      header: '¿cómo pagar con deposito en oxxo?',
      body: [
        'En el paso 3 del carrito de compra, selecciona como método de pago Deposito, una vez seleccionado la página te mostrará los números de cuenta, esta misma información la recibirás en tu correo electrónico, para que puedas tenerla a la mano cuando acudas a pagar, en la tienda Oxxo indícale al cajero los datos de número de tarjeta y destinatario, así como el monto que deseas pagar. Después de haber realizado tu pago, deberás enviarnos una foto del comprobante de pago por medio de un correo electrónico a la dirección ventas@ninis.com.sv',
      ],
    },
    {
      id: 10,
      header: '¿cómo pagar con mercado pago?',
      body: [
        'En el paso 3 del carrito de compra, selecciona como método de pago MercadoPago, te aparecerá una ventana emergente, en ella selecciona tu método de pago e ingresa los datos que te solicita, una vez completado el pago, la página te indicará que se registró tu pedido, tu pago pasará a un proceso de acreditación y una vez que esté acreditado te avisaremos y procesaremos tu pedido.',
      ],
    },
    {
      id: 11,
      header: '¿cómo pagar con paypal?',
      body: [
        'En el paso 3 del carrito de compra, selecciona como método de pago PayPal, la página te mostrará un aviso que debes leer y aceptar. Serás redirigido al sitio de pago seguro de PayPal, donde te pedirá iniciar sesión, si no tienes una cuenta de PayPal haz clic en Abrir una cuenta, completa la información que se te pide en el formulario, ingresa los datos de tu tarjeta y realiza el pago, serás regresado a la página de ddtech, donde te indicará que se registró tu pedido, tu pago pasará a un proceso de acreditación y una vez que esté acreditado te avisaremos y procesaremos tu pedido.',
      ],
    },
    {
      id: 12,
      header: '¿cómo pagar a meses con mercado pago?',
      body: [
        'En el paso 3 del carrito de compra, selecciona como método de pago MercadoPago, te aparecerá una ventana emergente, en ella selecciona la opción “tarjetas” posteriormente selecciona “tarjeta de crédito” ingresa los datos de tu tarjeta, la página te indicará la cantidad de meses disponibles, así como el monto que pagarás mensualmente a tu banco, una vez completado el pago, la página te indicará que se registró tu pedido, tu pago pasará a un proceso de acreditación y una vez que esté acreditado te avisaremos y procesaremos tu pedido.',
      ],
    },
    {
      id: 13,
      header: '¿cómo pagar mi pedido al recoger en tiendas ddtech?',
      body: [
        `Para tu comodidad también puedes pagar tu pedido al recogerlo en tiendas DDTECH* es muy sencillo, en el carrito de compras selecciona como Tipo de entrega “En Sucursal” Posteriormente selecciona como Método de pago “Pagar en sucursal” se te solicitaran algunos datos de contacto, posteriormente la página te confirmara el ID de tu pedido. En tu bandeja de correo electrónico encuentra el correo con tu pedido y responde sobre ese mensaje en que sucursal deseas recoger tu pedido. puedes consultar las direcciones de nuestras tiendas <a href="./contacto.html">aquí</a>`,
        '*(En el caso de PCs y productos sobre pedido, se requiere al menos el 50% de anticipo para solicitar el producto)',
      ],
    },
    {
      id: 14,
      header: '¿cuánto tomará en llegar mi pedido?',
      body: [
        'El tiempo estimado de entrega de un artículo puede variar dependiendo si su compra es en temporada alta de ventas, promociones o si es un equipo de cómputo ensamblado, los tiempos se le notificarán al usuario mediante el correo electrónico y se contemplarán a partir de la confirmación de la compra. Las entregas a domicilio se efectúan solo por las siguientes paqueterías: ESTAFETA, FEDEX, DHL Y Kanguus exclusiva para la ZMG, DDTECH desconoce los tiempos exactos de entrega con las paqueterías, los mismos pueden variar dependiendo el tipo de servicio y la localidad donde radique el usuario.',
      ],
    },
    {
      id: 15,
      header: '¿dónde se encuentran las tiendas de ddtech?',
      body: [
        'Le recordamos que enviamos a toda la república mexicana, desde nuestras tiendas que se encuentran en Guadalajara, usted puede encontrar las direcciones en el siguiente enlace:',
        `<a href="./contacto.html">contacto</a>`,
      ],
    },
    {
      id: 16,
      header: '¿cómo solicitar una factura de mi compra?',
      body: [
        'En el carrito de compra, seleccione en el menú requiere factura, la opción si, al dar clic en continuar, inicie sesión o compre como invitado, la página le preguntará sus datos para facturación y su factura le será enviada a su correo electrónico después de que su pago sea acreditado. Si usted ya había realizado su compra, puede solicitar su factura vía correo electrónico a facturacion@ddtech.mx en un máximo de 48hrs después de recibido su pago.',
      ],
    },
    {
      id: 17,
      header: '¿los productos cuentan con garantía?',
      body: [
        'Sí, todos nuestros productos cuentan con garantía, la cual es vigente dentro de un año, a no ser que en el producto se especifique otro periodo de garantía.',
      ],
    },
    {
      id: 18,
      header: '¿pueden enviar a otros países?',
      body: [
        'Debido a nuestro régimen fiscal, no nos es posible enviar fuera de la república mexicana.',
      ],
    },
    {
      id: 19,
      header: '¿cuentan con servicio de envió express?',
      body: [
        'En el caso de pedidos que cuenten con un peso volumétrico menor a 1KG la página le ofrecerá automáticamente la opción de envió express, el cual llega al siguiente día hábil de haber sido enviado, en el caso de las ciudades disponibles.',
      ],
    },
    {
      id: 20,
      header: '¿manejan precios de mayoreo?',
      body: [
        'Si manejamos precios de mayoreo, puedes encontrarlos en http://ddtech.mx/mayoreo',
      ],
    },
    {
      id: 21,
      header:
        '¿PUEDO APROVECHAR UN ENVIÓ GRATIS PARA AGREGAR MÁS PRODUCTOS A MI PEDIDO?',
      body: [
        'Si usted adquiere un producto con envió gratis, si puede agregar más productos al mismo envió, en caso de que los productos superen el peso máximo para envió gratis, la página le cobrará únicamente la diferencia en el precio del envió.',
      ],
    },
    {
      id: 22,
      header: '¿qué pasa si no estoy cuando llegue mi pedido?',
      body: [
        'La paquetería entrega tu pedido hasta la puerta de tu casa, en caso de que tu no te encuentres, puede recibirlo alguien más siempre y cuando se encuentre dentro de tu domicilio, en caso de no encontrar a nadie, la paquetería te dejará un aviso de notificación y volverá a intentar hacer la entrega, en su siguiente ruta de la zona.',
      ],
    },
    {
      id: 23,
      header: '¿las pcs se entregan ensambladas?',
      body: [
        'Si, el servicio de ensamblado, es un servicio gratuito que ofrecemos si compras todos los componentes en nuestro sitio web, por lo que recibirás tu equipo ya ensamblado y listo para usarse.',
      ],
    },
    {
      id: 24,
      header: '¿cómo uso el configurador de pcs?',
      body: [
        'Nuestro configurador es un asistente virtual, que te permite armar una PC a tu medida, automáticamente te ofrecerá solo componentes compatibles, solo tienes que seleccionar uno a uno los componentes.',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/GPuy_DLA6-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      ],
    },
    {
      id: 25,
      header: '¿cómo me inscribo para que me lleguen las promociones?',
      body: [
        'En la parte inferior de nuestra página web puedes encontrar el formulario, solo indícanos la dirección de correo electrónico donde te estaremos avisando, sobre los cupones, ofertas y promociones.',
      ],
    },
    {
      id: 26,
      header: '¿qué son las promociones uno por cliente?',
      body: [
        'Son promociones atractivas de las cuales solo podrás comprar una pieza de dicho producto, esto con la finalidad de que más personas se vean beneficiadas',
      ],
    },
    {
      id: 27,
      header: '¿cómo aplico la garantía de mi producto?',
      body: [
        'Si requieres asistencia sobre tu producto, o aplicar tu garantía, por favor escríbenos a soporte@ddtech.mx donde con gusto te indicaremos el procedimiento.',
      ],
    },
  ];

  // construyendo la logica una vez el dom haya cargado completamente
  document.addEventListener('DOMContentLoaded', (e) => {
    let PreguntasFrecuentes = document.getElementById('preguntasFrecuentes');

    let accordionItemsHtml = data
      .map(
        (item) => `
      <div class="accordion-item border mb-1">
        <h2 class="accordion-header" id="flush-${item.id}">
          <button class="accordion-button txt:uppercase fw-bold ${
            item.id === 1 ? '' : 'collapsed'
          }" type="button" data-bs-toggle="collapse"
            data-bs-target="#p${item.id}" aria-expanded="${
          item.id === 1 ? true : false
        }" aria-controls="p${item.id}">
            ${item.header}
          </button>
        </h2>
        <div id="p${item.id}" class="accordion-collapse collapse ${
          item.id === 1 ? 'show' : ''
        }" aria-labelledby="flush-${item.id}"
          data-bs-parent="#preguntasFrecuentes">
          <div class="accordion-body p-5">
            ${item.body
              .map((p) => `<p>${p}</p>`)
              .join(',')
              .replace(/\,/g, '')
              .toString()}
          </div>
        </div>
      </div>
    `
      )
      .join(',')
      .replace(/\,/g, '')
      .toString();

    PreguntasFrecuentes.innerHTML = accordionItemsHtml;
  });
})();
