/******************************************************************************/

const codeA = 'A'.charCodeAt (0);
const codeZ = 'Z'.charCodeAt (0);

export function startsWithUpperCase (value) {
  if (typeof value === 'string' && value.length > 0) {
    var code = value.charCodeAt (0);
    return code >= codeA && code <= codeZ;
  } else {
    return false;
  }
}

/******************************************************************************/
