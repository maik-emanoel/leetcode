/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindrome(x) {
  if (x < 0) false

  const num = x.toString()
  const reversedNum = x.toString().split('').reverse().join('')

  return num === reversedNum
}

console.log(isPalindrome(21))

// Data: 27/06/2024