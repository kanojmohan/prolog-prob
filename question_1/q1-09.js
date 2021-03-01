// 1.09 (**) Pack consecutive duplicates of list elements into sublists.
// Example:
// ?- pack([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]

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
  const resultArry = [];
  for (var i = 0; i < input.length; i++) {
    let tempArry = [];
    if (input[i] === input[i + 1]) {
      console.log("tempArray", tempArry);
      tempArry.push(input[i]);
      console.log("tempArray", tempArry);
    } else {
      console.log("else");
      resultArry.push(tempArry);
    }
  }

  return resultArry;
};

console.log(packCon(inputArr));
