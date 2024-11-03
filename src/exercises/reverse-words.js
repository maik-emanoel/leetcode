/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  return s
    .split(' ')
    .map((word) => {
      return [...word.split('')].reverse().join('')
    })
    .join(' ')
}

console.log(reverseWords("Mr Ding"))

// Data: 27/10/2024