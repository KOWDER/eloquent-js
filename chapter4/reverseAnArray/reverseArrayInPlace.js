const reverseArrayInPlace = (arr) => { 
    return arr.sort((a, b) => arr.indexOf(a) < arr.indexOf(b))
}

export default reverseArrayInPlace

/* old way without higher order functions

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

*/