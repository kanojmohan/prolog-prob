// Extract a given number of randomly selected elements from a list

const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

function selectRandom(arr, numberOfElement) {
  extracted = [];
  for (i = 0; i < numberOfElement; i++) {
    extracted.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  //   return Math.floor(Math.random() * arr.length);
  return extracted;
}
console.log(selectRandom(arr, 4));

module.exports = { selectRandom };
