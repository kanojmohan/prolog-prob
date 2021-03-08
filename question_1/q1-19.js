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

function rotateNLeft(arrRotate, nthPlace) {
  const temp = splitTheList(arrRotate, nthPlace);
  return [...temp.secondPart, ...temp.firstpart];
}
console.log(rotateNLeft(arr, 3));

module.exports = { splitTheList };
