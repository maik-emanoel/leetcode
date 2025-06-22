/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
function isAcronym (words, s) {
  return words.map(word => word[0]).join('') === s
}

console.log(isAcronym(['alice', 'bob', 'charlie'], 'abc'))

// Data: 23/03/2025