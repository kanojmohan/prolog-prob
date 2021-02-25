// Find the K'th element of a list.

const list = [1, 1, 2, 3, 5, 8];
// const kth = 4;
// console.log(list[kth]);

function kthElement(input, kth) {
  return input[kth];
}
console.log(kthElement(list, 5));
