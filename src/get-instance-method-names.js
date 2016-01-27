'use strict';

/******************************************************************************/

function isMethod (obj, name) {
  const desc = Object.getOwnPropertyDescriptor (obj, name);
  return !!desc && typeof desc.value === 'function';
}

/******************************************************************************/

module.exports = function getInstanceMethodNames (obj, stop) {
  var array = [];
  var proto = Object.getPrototypeOf (obj);
  var handle = function (name) {
    if (name !== 'constructor' && isMethod (proto, name)) {
      array.push (name);
    }
  };
  while (proto && proto !== stop) {
    Object.getOwnPropertyNames (proto).forEach (handle);
    proto = Object.getPrototypeOf (proto);
  }
  return array;
};

/******************************************************************************/
