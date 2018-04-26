import SCRIPTS from './SCRIPTS'

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  //console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
  // → [{name: false, count: 2}, {name: true, count: 3}]

  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  //console.log(characterScript(121));
  // → {name: "Latin", …}

let text = "Hello its me";

function dominantDirection(text) {
  let charsArray = text.replace(/ /g, '').split('');
  let codeArray = charsArray.map(char => char.charCodeAt(0));
  let directions = [];
  for (code of codeArray) {
    directions.push(characterScript(code));
  }
  let counts = [];
  for (direction in directions) {
    let exist = counts.findIndex(c => c.direction == direction) 
    if (exist == -1) {
      counts.push({direction, count: 1})
    } else {
      counts[exist].count++
    }
  }
  console.log(counts);
}




//{
//  name: "Coptic",
//  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
//  direction: "ltr",
//  year: -200,
//  living: false,
//  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
//}
