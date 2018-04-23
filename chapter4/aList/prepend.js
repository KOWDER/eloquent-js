const prepend = (element, list) => {
    list = { value: element, rest: list }
    return list
}

export default prepend;

/* 
Prepend is a helper function which takes an element and a list and creates a new list that adds the element to the front of the input list

Flow for prepend(10, prepend(20, null)) 

- element = 10 and list = preprend(20, null)
- returns {value: 10, rest: {value: 20, rest: null}}
*/