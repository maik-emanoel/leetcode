/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  return s
    .split(' ')
    .filter((item) => !!item)
    .reverse()
    .join(' ')
}

console.log(reverseWords('a good   example'))

// Data: 28/10/2025