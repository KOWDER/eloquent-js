let arrays = [[1, 2, 3], [4, 5], [6]];

const flatArray = (arr) => {
    return arr.reduce((a, b) => a.concat(b), [])
}

console.log(flatArray(arrays));