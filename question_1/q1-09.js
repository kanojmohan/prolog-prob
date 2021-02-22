// // 1.09 (**) Pack consecutive duplicates of list elements into sublists.
// // Example:
// // ?- pack([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// // X = [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]

// const inputArr = [
//   "a",
//   "a",
//   "a",
//   "a",
//   "b",
//   "c",
//   "c",
//   "a",
//   "a",
//   "d",
//   "e",
//   "e",
//   "e",
//   "e",
// ];

// const packCon = (input) => {
//   const resultArry = [];

//   for (var i = 0; i < input.length; i++) {
//     if (input[i] == input[i + 1]) {
//       const tempArry = [];
//       tempArry.push(i);
//     } else {
//       resultArry.push(tempArry);
//     }
//   }

//   return resultArry;
// };

// console.log(packCon(inputArr));
