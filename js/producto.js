let { pathname, search } = window.location;

let params = search
  .split('?')
  .map((pair) => {
    if (pair !== '') {
      return pair.split('=');
    }
  })
  .filter((values) => values)
  .reduce((json, params) => {
    let key = params[0];
    let value = params[1];
    return { ...json, [key]: value };
  }, {});
