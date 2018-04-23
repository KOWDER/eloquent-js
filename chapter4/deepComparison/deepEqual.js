/*
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the 
same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, 
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

const deepEqual = (x, y) => {
    if (x === y) {
        return true;
    } else if (x == null || y == null) {
        return false;
    } else if (typeof x == "object" && typeof y == "object") {
        let arrX = Object.keys(x);
        let arrY = Object.keys(y);
        if (arrX.length !== arrY.length) {
            return false;
        } else {
            for (let i in x) {
                if (deepEqual(x[i], y[i]) === false) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

export default deepEqual;

//let obj = {here: {is: "an"}, object: null};

