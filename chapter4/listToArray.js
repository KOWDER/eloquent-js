const listToArray = (list) => {
    let arr = [];
    for (let node = list; node; node = node.rest) {
      arr.push(node.value);
    }
    return arr;
  }

  export default listToArray;

/*

list = {
  value: 10,
  rest: {
    value: 20,
    rest: {
      value: 30,
      rest: null
    }
  } 
}

Flow for listToArray(list)

- Initializing loop -> let node = list
- Condition -> node, checking if node is a truefy value.
- Code executes -> pushing node.value (which is basicly list.value) to the array
- Final-expression -> node = node.rest, every list has a property called rest.
- From now on we ditch the initial list, and set node to  be equal to node.rest (which should return the same objejct structure)
- If node is equal to a falsy value(null, undefined,...) the loop will stops.
- Once it reaches the last object in the List, node will be equal to null (= node.rest).
- The loop stops and we return the array.

*/