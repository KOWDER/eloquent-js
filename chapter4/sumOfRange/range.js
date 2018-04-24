/* range v1 */
const rangeV1 = (start, end) => {
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
}



/* range v2 */
const range = (start, end, step = 1) => {
    let arr = []
    if (start > end && step == 1) {
        for (let y = start; y >= end; y -= step) {
            arr.push(y)
        }
    } else if (start < end && step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i)
        }
    } else if (start > end && step < 0) {
        for (let j = start; j >= end; j += step) {
            arr.push(j)
        }
    } else {
        return "invalid input"
    }
    return arr
}

export default range