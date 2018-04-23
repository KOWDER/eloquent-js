function arrayToList(arr) {
  let list = null
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list }
  }
return list
}

/* Flow for arrayToList([10, 20, 30])

You have to reverse engineer the List

1) first loop : 

  let list = null
  for (let i = 2; i >= 0; i--) {
    list = { value: arr[2], rest: null }
  }

2) second loop :
  let list = { value: 30, rest: null }
  for (let i = 1; i >= 0; i--) {
    list = { value: arr[1], rest: { value: 3, rest: null } }
  }

3) third loop : 

  let list = { value: 20, rest: { value: 3, rest: null } }
  for (let i = 0; i >= 0; i--) {
    list = { value: arr[0], rest: { value: 20, rest: { value: 3, rest: null } } }
  }

4) i will be < 0, means there is no more values in the array, so the loop stops and we return the list.

*/
