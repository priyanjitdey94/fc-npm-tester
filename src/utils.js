function pluckNumber () {
  for (let i = 0; i < arguments.length; i++) {
      if (!isNaN(+arguments[i])) {
      return +arguments[i];
      }
  }
};

function defined (arg) {
  return typeof arg !== 'undefined';
};

const createData = i => {
  return {
      'value': i + '',
      'label': 'label ' + i
  };
};

const getObjectCopy = obj => {
  let newObj = {},
    key;

  for (key in obj) {
    newObj[key] = obj[key];
  }

  return newObj;
};

export {
  pluckNumber,
  defined,
  createData,
  getObjectCopy
};
