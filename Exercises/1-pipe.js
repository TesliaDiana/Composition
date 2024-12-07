'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') throw new Error('Errror');
  }
  return (number) => {
    for (const fn of fns) {
      number = fn(number);
    }
    return number;
  };
};

module.exports = { pipe };
