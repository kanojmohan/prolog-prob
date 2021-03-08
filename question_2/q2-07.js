// Determine the greatest common divisor of two positive integer numbers.
function gcd(num_1, num_2) {
  var R;
  while (num_1 % num_2 > 0) {
    R = num_1 % num_2;
    num_1 = num_2;
    num_2 = R;
  }
  return num_2;
}

// console.log(gcd(9, 3));
module.exports = { gcd };
