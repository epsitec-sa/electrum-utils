'use strict';

/******************************************************************************/

module.exports = {
  getInstanceMethodNames: require ('./get-instance-method-names.js'),
  getTextSelection: require ('./get-text-selection.js'),
  isPositiveInt: require ('./parse-positive-int.js').isPositiveInt,
  parsePositiveInt: require ('./parse-positive-int.js').parsePositiveInt,
  shallowEqual: require ('./shallow-equal.js'),
  startsWithUpperCase: require ('./starts-with-upper-case.js'),
  startsWithLowerCase: require ('./starts-with-lower-case.js')
};

/******************************************************************************/
