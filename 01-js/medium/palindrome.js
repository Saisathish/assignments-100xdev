/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  const tempstr = lowerStr.split('').toReversed().join('')
  return lowerStr === tempstr;
}

module.exports = isPalindrome;
// TODO- ignore spaces and special charecters