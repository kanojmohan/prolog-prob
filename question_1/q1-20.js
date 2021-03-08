const arr = ["k", "T", "h", "a", "i", "s"];

function dropNthElement(arr, nth) {
  exceptNth = [];
  for (i = 0; i < arr.length; i++) {
    if (i != nth) {
      exceptNth.push(arr[i]);
    }
  }
  return exceptNth;
}
console.log(dropNthElement(arr, 3));
