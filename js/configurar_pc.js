(() => {
  const KEYS = {
    marcaProcesador: 'marcaProcesador',
    procesador: 'procesador',
    disipador: 'disipador',
    tarjetaMadre: 'tarjetaMadre',
    memoriaRam: 'memoriaRam',
    memoriaRamAdicional: 'memoriaRamAdicional',
    almacenamiento: 'almacenamiento',
    almacenamientoAdicional: 'almacenamientoAdicional',
    tarjetaGrafica: 'tarjetaGrafica',
    gabinete: 'gabinete',
    fuente: 'fuente',
  };

  // construyendo la logica una vez el dom haya cargado completamente
  document.addEventListener('DOMContentLoaded', (e) => {
    let MarcaProcesador = document.getElementById(KEYS.marcaProcesador);
    let Procesador = document.getElementById(KEYS.procesador);
    let Disipador = document.getElementById(KEYS.disipador);
    let TarjetaMadre = document.getElementById(KEYS.tarjetaMadre);
    let MemoriaRam = document.getElementById(KEYS.memoriaRam);
    let MemoriaRamAdicional = document.getElementById(KEYS.memoriaRamAdicional);
    let Almacenamiento = document.getElementById(KEYS.almacenamiento);
    let AlmacenamientoAdicional = document.getElementById(
      KEYS.almacenamientoAdicional
    );
    let TarjetaGrafica = document.getElementById(KEYS.tarjetaGrafica);
    let Gabinete = document.getElementById(KEYS.gabinete);
    let Fuente = document.getElementById(KEYS.fuente);

    // ! Asignarlo a falso para la entrega.
    let resetLocalStorage = true;
    if (resetLocalStorage) localStorage.clear();

    // Paso 1
    MarcaProcesador.addEventListener('click', (e) => {
      let value = getDataset(e, KEYS.marcaProcesador);
      localStorage.setItem(KEYS.marcaProcesador, value);
      // TODO: Open the next accordion item
    });

    // Paso 2
    Procesador.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.procesador);

      if (price == null) return;

      updateTotal(price, KEYS.procesador);
      // TODO: Open the next accordion item
    });

    // Paso 3
    Disipador.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.disipador);

      if (price == null) return;

      updateTotal(price, KEYS.disipador);
      // TODO: Open the next accordion Item
    });

    // Paso 4
    TarjetaMadre.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.tarjetaMadre);

      if (price == null) return;

      updateTotal(price, KEYS.tarjetaMadre);
      // TODO: Open the next accordion Item
    });

    // Paso 5
    MemoriaRam.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.memoriaRam);

      if (price == null) return;

      updateTotal(price, KEYS.memoriaRam);
      // TODO: Open the next accordion Item
    });

    // Paso 6
    MemoriaRamAdicional.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.memoriaRamAdicional);

      if (price == null) return;

      updateTotal(price, KEYS.memoriaRamAdicional);
      // TODO: Open the next accordion Item
    });

    // Paso 7
    Almacenamiento.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.almacenamiento);

      if (price == null) return;

      updateTotal(price, KEYS.almacenamiento);
      // TODO: Open the next accordion item
    });

    // Paso 8
    AlmacenamientoAdicional.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.almacenamientoAdicional);

      if (price == null) return;

      updateTotal(price, KEYS.almacenamientoAdicional);
      // TODO: Open the next accordion item
    });

    // Paso 9
    TarjetaGrafica.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.tarjetaGrafica);

      if (price === null) return;

      updateTotal(price, KEYS.tarjetaGrafica);
      // TODO: Open the next accordion item
    });

    // Paso 10
    Gabinete.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.gabinete);

      if (price === null) return;

      updateTotal(price, KEYS.gabinete);
      // TODO: Open the next accordion item
    });

    // Paso 11
    Fuente.addEventListener('click', (e) => {
      let price = getDataset(e, KEYS.fuente);

      if (price === null) return;

      updateTotal(price, KEYS.fuente);
      // TODO: Open the next accordion item
    });
  });

  /**
   * Function to get the data out of an element by its name
   * @param {Event} e
   * @param {string} name
   * @returns {string}
   */
  function getDataset(e, name) {
    return e.target.dataset[name] ? e.target.dataset[name] : null;
  }

  /**
   * Function to update the total in the html
   * @param {number} value
   */
  function updateTotal(value, localStorageKey) {
    let Total = document.getElementById('total');
    let currentTotal = Number(Total.textContent);
    let existingValue = localStorage.getItem(localStorageKey);

    // If there is an existing value, meaning the customer clicks once again on the step
    if (existingValue) {
      // If the value exist, then we should substract the localstorage value to the current total
      currentTotal -= Number(existingValue);
    }

    localStorage.setItem(localStorageKey, value);
    let newTotal = currentTotal + Number(value);
    Total.textContent = newTotal.toFixed(2);
  }
})();
