/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const magazineLettersObj = {}
  let word = ''

  for (const letter of magazine) {
    if (!magazineLettersObj[letter]) {
      magazineLettersObj[letter] = 1
    } else {
      magazineLettersObj[letter] += 1
    }
  }

  for (const letter of ransomNote) {
    if (magazineLettersObj[letter]) {
      magazineLettersObj[letter] -= 1
      word += letter
    }
  }

  return word === ransomNote
}

console.log(canConstruct('aa', 'ab'))

// Data: 26/01/2025

// In this exercise I should create a function to verify if using the magazine's letters is possible to build the ransomNote