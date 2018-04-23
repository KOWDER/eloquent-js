const nth = (list, num) => {
  if (!list)
    return undefined;
  else if (num == 0)
    return list.value;
  else
    return nth(list.rest, num - 1);
} 

export default nth;

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

nth() takes a list and a number as arguments, and returns the element at the given poistion in the list(with zero referring to the first element)
or undefined when there is no such element.

Flow for nth(list, 2)

- it checks if list is falsy -> no its an object with value and rest as properties.
- next statement
- it checks if the number past by the user is = 0 -> its 2
- next statement
- if its neither of the two first statements the function calls itself
- calls itself with different params -> list.rest becomes the list and we substract 1 fom 2
- nth(list.rest, 1)
- list.rest is not falsy and 1 != 0
- nth (list.rest, 0)
- goes deaper in the next rest property
- num == 0 so we return the value of this list

If the user puts a number thats goes beyond the indexes it will eventually return list.rest = null, which is the value of the rest prop in the last nested object.
Therefore it will trigger the first if statement : the list can't be a falsy value -> null is falsy -> returns undefined

*/