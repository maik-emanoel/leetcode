/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const array = s.trim().split(' ')
  const lastWord = array[array.length - 1]

  return lastWord.length
};

console.log(lengthOfLastWord("Hello World"))

// Data: 28/06/2024