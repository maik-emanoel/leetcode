/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const stringVowels = []

  for (const letter of s) {
    if (vowels.includes(letter.toLowerCase())) {
      stringVowels.push(letter)
    }
  }

  const reversedVowels = stringVowels.reverse()
  let newString = ''

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      newString += reversedVowels[0]
      reversedVowels.splice(0, 1)
    } else {
      newString += s[i]
    }
  }

  return newString
}

console.log(reverseVowels('IceCreAm'))

// Data: 27/07/2025