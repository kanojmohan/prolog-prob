// // Insert an element at a given position into a list.
const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

const mode = require("./q1-19");

function insert(inputArr, nthPlace, value) {
  const temp = mode.splitTheList(inputArr, nthPlace);
  return [...temp.firstpart, value, ...temp.secondPart];
}
console.log(insert(arr, 3, "z"));
console.log(insert(arr, 2, "o"));
