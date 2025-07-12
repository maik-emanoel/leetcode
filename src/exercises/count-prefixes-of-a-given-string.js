/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
function countPrefixes(words, s) {
  return words.filter(word => s.startsWith(word)).length
}

console.log(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc'))

// Data: 23/03/2025
// In this problem I should return the amount of words of a given array of strings that the word is prefix of a given string