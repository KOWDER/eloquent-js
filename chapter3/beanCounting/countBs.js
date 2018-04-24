const countBs = str => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") {
            count++
        }
    }
    return count
}

export default countBs