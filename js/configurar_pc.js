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
    let ConfigurarPC = document.getElementById('configurarPc');

    // ! Asignarlo a falso para la entrega.
    let resetLocalStorage = true;
    if (resetLocalStorage) localStorage.clear();

    // Evento click
    ConfigurarPC.addEventListener('click', (e) => {
      let isTargetInRange = false;
      let value;
      let target;

      for (let key in KEYS) {
        if (e.target.dataset[KEYS[key]]) {
          isTargetInRange = true;
          value = getDataset(e, KEYS[key]);
          target = key;
        }
      }

      if (!isTargetInRange) return;
      if (value == null) return;

      // Si es marca procesador, no hay necesidad de actualizar el total
      if (target == KEYS.marcaProcesador) {
        localStorage.setItem(target, value);
        return;
      }

      updateTotal(value, target);
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
