// (*) Determine whether two positive integer numbers are coprime.
const areCoprimes = (num1, num2) => {
  const smaller = num1 > num2 ? num1 : num2;
  for (i = 2; i < smaller; i++) {
    const condition1 = num1 % i === 0;
    const condition2 = num2 % i === 0;
    if (condition1 && condition2) {
      return false;
    }
  }
  return true;
};
// console.log(areCoprimes(21, 57));

module.exports = { areCoprimes };
