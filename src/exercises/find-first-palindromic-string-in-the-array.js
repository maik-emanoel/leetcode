/**
 * @param {string[]} words
 * @return {string}
 */
function firstPalindrome(words) {
  let palindromicString = ''

  for (const word of words) {
    if (word === Array.from(word).reverse().join('')) {
      palindromicString = word
      break // I use "break" to stop for looping
    }
  }

  return palindromicString
}

console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']))

// Data: 09/03/2025
// In this problem I should find the first palindromic word
