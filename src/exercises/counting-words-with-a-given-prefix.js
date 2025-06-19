/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
function prefixCount(words, pref) {
  return words.filter(word => word.startsWith(pref)).length
}

console.log(prefixCount(["pay","attention","practice","attend"], "at"))

// Data: 09/03/2025
// In this problem I should return the number of words that has the prefix set by pref param.