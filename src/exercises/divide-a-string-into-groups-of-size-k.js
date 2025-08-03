/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
function divideString(s, k, fill) {
  let strCopy = s
  const groups = []

  while (strCopy.length % k !== 0) {
    strCopy += fill
  }

  let groupStr = ''

  for (const letter of strCopy) {
    groupStr += letter

    if (groupStr.length === k) {
      groups.push(groupStr)
      groupStr = ''
    }
  }

  return groups
}

console.log(divideString('abcdefghi', 3, 'x'))

// Data: 22/06/2025
// In this exercise I should divide a string into group of a given size. If the last group hadn't the correct size, I should fill up with the fill prop. 