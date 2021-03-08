// Split a list into two parts; the length of the first part is given.

const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

function splitTheList(arr, givenLength) {
  firstPart = [];
  secondPart = [];
  for (i = 0; i < arr.length; i++) {
    if (i <= givenLength) {
      firstPart.push(arr[i]);
    } else {
      secondPart.push(arr[i]);
    }
  }
  //   return [firstPart, secondPart];
  return { firstpart: firstPart, secondPart: secondPart };
}
console.log(splitTheList(arr, 4));
