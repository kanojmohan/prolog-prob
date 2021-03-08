// Create a list containing all integers within a given range.

function range(start, end) {
  const myArray = [];
  for (i = start; i <= end; i += 1) {
    myArray.push(i);
  }
  return myArray;
}
// console.log(range(4, 12));
module.exports = { range };
