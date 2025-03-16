/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
function arrayStringsAreEqual(word1, word2) {
  return word1.join('') === word2.join('')
}

console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]))

// Data: 02/03/2025
// In this problem I should return true if the two arrays represent the same string, and false otherwise.