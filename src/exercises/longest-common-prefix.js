/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let prefix = ''
  const isValidArray = strs.every((str) => str !== '' && str.length >= 1)
  const minStrLength = Math.min(...strs.map((str) => Number(str.length)))

  if (isValidArray)
    for (let i = 0; i < minStrLength; i++) {
      const letter = strs[0].at(i)

      if (strs.every((str) => str[i] === letter)) {
        prefix += letter
      } else {
        break
      }
    }

  return prefix
}

console.log(longestCommonPrefix(['', 'b']))

// Data: 21/07/2024
// Nível: Fácil