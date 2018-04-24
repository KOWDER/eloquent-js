const sum = (arr) => {
    let result = arr.reduce((a, b) => {
       return a + b 
    }, 0);
    console.log(result);
}

export default sum