const reverseArray = (arr) => { 
    return newArray = arr.sort((a, b) => arr.indexOf(a) < arr.indexOf(b))
}

export default reverseArray

/* old way without higher order functions 

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }

*/