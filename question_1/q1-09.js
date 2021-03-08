const inputArr = [
  "a",
  "a",
  "a",
  "a",
  "b",
  "c",
  "c",
  "a",
  "a",
  "d",
  "e",
  "e",
  "e",
  "e",
];

const packCon = (input) => {
  let tempArry = [];
  for (i = 0; i < input.length; i++) {
    if (tempArry.length === 0) {
      tempArry.push([input[i]]);
    } else {
      const temp = tempArry[tempArry.length - 1];
      //   console.log(temp);
      if (temp[0] === input[i]) {
        temp.push(input[i]);
      } else {
        tempArry.push([input[i]]);
      }
    }
  }
  return tempArry;
};

console.log(packCon(inputArr));
