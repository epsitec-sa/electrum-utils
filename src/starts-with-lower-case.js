/******************************************************************************/

const codeA = 'a'.charCodeAt (0);
const codeZ = 'z'.charCodeAt (0);

export function startsWithLowerCase (value) {
  if (typeof value === 'string' && value.length > 0) {
    var code = value.charCodeAt (0);
    return code >= codeA && code <= codeZ;
  } else {
    return false;
  }
}

/******************************************************************************/
