'use strict';

/******************************************************************************/

var codeA = 'a'.charCodeAt (0);
var codeZ = 'z'.charCodeAt (0);

module.exports = function startsWithLowerCase (value) {
  if (typeof value === 'string' && value.length > 0) {
    var code = value.charCodeAt (0);
    return code >= codeA && code <= codeZ;
  } else {
    return false;
  }
};

/******************************************************************************/
