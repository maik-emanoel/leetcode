/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  let numberOfLetters = {}

  for (const letter of s) {
    if (numberOfLetters[letter]) {
      numberOfLetters[letter] += 1
    } else {
      numberOfLetters[letter] = 1
    }
  }

  const uniqueLetter = Object.entries(numberOfLetters).find(([_, value]) => {
    return value === 1
  })?.at(0)

  return s.indexOf(uniqueLetter)
}

console.log(firstUniqChar('aabb'))

// Data: 27/10/2024