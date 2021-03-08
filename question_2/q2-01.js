// Determine whether a given integer number is prime

// function isPrime(num) {
//   if (num === 2) {
//     return true;
//   } else if (num > 1) {
//     for (i = 2; i < num; i++) {
//       if (num % i !== 0) {
//         return true;
//       } else if (num === i * i) {
//         return false;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
// }

// console.log(isPrime(9));

function isPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

// console.log(isPrime(11));

module.exports = { isPrime };
