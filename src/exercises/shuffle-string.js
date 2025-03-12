/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(s, indices) {
  const array = Array.from({ length: s.length }).fill('')

  for (let i = 0; i < indices.length; i++) {
    array[indices[i]] = s[i]
  }

  return array.join('')
}

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]))

// Data: 23/02/2025

// In this problem I should reorganize the given string based on the indices array
// I had some difficulty to solve this problem, so I needed chatgpt to help how to solve it, but I asked him not to pass me the code.