// Eliminate consecutive duplicates of list elements.

var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4, 5, 5, 5];
function identical(array) {
  var newArray = [];
  newArray.push(arr[0]);
  //   var count = 0;
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] != array[i + 1]) {
      newArray.push(array[i + 1]);
    }
  }

  return newArray;
}

console.log(identical(arr));
