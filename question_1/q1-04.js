// Find the number of elements of a list.

const juice = [
  "banana",
  "apple",
  "oranges",
  "pineapple",
  "jackfruit",
  "chikku",
];
// let count = juice.length;
// console.log(count);
function numberOfElement(input) {
  let count = 0;
  for (i = 0; i < input.length; i++) {
    count++;
  }
  console.log(count);
  return count;
}
console.log(numberOfElement(juice));
