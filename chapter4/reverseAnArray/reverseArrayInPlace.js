const reverseArrayInPlace = (arr) => { 
    return arr.sort((a, b) => arr.indexOf(a) < arr.indexOf(b))
}

export default reverseArrayInPlace