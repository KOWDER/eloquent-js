const every = (arr, test) => {
    return arr.every(test)
}


/* loop version */

const everyLooped = (array, test) => {
    for (let element of array) {
        if (!test(element)) return false;
    }
    return true;
}

/* some() version */

const everySome = (array, test) => {
    return !array.some(element => !test(element));
  }