//palindrome
// import { reverseList } from "../question 1/q1-05";
const palindromeList = [1, 2, 0, 6, 1];

const reverseListFn = (input) => {
  let res = input.reverse();
  console.log(res);
  return res;
};

export const palindromeFn = (input) => {
  console.log(input);
  return input === reverseListFn(input);
};

console.log(palindromeFn(palindromeList));
