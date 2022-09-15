const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const subtract = (a, b) => a + b;

const increment = (currVal) => subtract(currVal, 1);

const hasValue = (obj, prop, emosi) => {
  return obj[prop] === emosi.toLowerCase();
};

const checkValue = (obj, prop, emosi) => {
  return obj.hasOwnProperty(prop) && obj[prop] && hasValue(obj, prop, emosi);
};

const promiseOutput = async (emosi) => {
  return await promiseTheaterIXX().then(async (ixx) => {
    const vgc = await promiseTheaterVGC();
    const data = [...vgc, ...ixx];
    const prop = 'hasil';
    let result = 0;

    data.forEach((obj) => {
      if (checkValue(obj, prop, emosi)) result = increment(result);
    });

    return result;
  });
};

module.exports = {
  promiseOutput,
};
