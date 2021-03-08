// 2.03 (**) Determine the prime factors of a given positive integer (2).
// Construct a list containing the prime factors and their multiplicity.
// Example:
// ?- prime_factors_mult(315, L).
// L = [[3,2],[5,1],[7,1]]

// Hint: The solution of problem 1.10 may be helpful.

const mode_1 = require("../question_1/q1-10");
const mode_2 = require("./q2-02");

function ex(number) {
  return mode_1.encode(mode_2.findPrimeFactors(number));
}
console.log(ex(315));
console.log(mode_2.findPrimeFactors(315));
