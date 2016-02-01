'use strict';

// Original source code found in fbjs/lib/shallowEqual

/******************************************************************************/

var hop = Object.prototype.hasOwnProperty;

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual (objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null) {
    return false;
  }
  if (typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys (objA);
  var keysB = Object.keys (objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var boundHasOwnProperty = hop.bind (objB);
  for (var i = 0; i < keysA.length; i++) {
    var key = keysA[i];
    if (!boundHasOwnProperty (key) ||
      objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

/******************************************************************************/

module.exports = shallowEqual;
