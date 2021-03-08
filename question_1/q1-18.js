// Extract a slice from a list

const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

function extract(arr, ith, kth) {
  subset = [];
  for (i = ith; i <= kth; i++) {
    subset.push(arr[i]);
  }

  return subset;
}
console.log(extract(arr, 2, 6));
