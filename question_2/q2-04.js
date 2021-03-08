// A list of prime numbers

const mode_3 = require("./q2-01");
const mode_4 = require("../question_1/q1-22");

function listOfPrimeNumbers(lower, upper) {
  let result_1 = [];

  for (i = lower; i <= upper; i++) {
    if (mode_3.isPrime(i)) {
      result_1.push(i);
    }
  }

  return result_1;
}

console.log(listOfPrimeNumbers(2, 10));
