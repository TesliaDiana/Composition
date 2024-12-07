'use strict';

const compose = (...fns) => {
  let handle = () => {};
  const innerCompose = (number) => {
    try {
      for (let i = fns.length - 1; i > -1; i--) {
        number = fns[i](number);
      }
    } catch (e) {
      handle(e);
      return;
    }
    //eslint-disable-next-line consistent-return
    return number;
  };
  innerCompose.on = (name, func) => {
    handle = func;
  };
  return innerCompose;
};

module.exports = { compose };
