/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
  const commomLetters = []
  let copyWords = words
  let firstWord = words[0]

  for (const letter of firstWord) {
    const commomLetter = copyWords.every((word) => word.includes(letter))

    if (commomLetter) {
      commomLetters.push(letter)
      copyWords = copyWords.map(word => word.replace(letter, ''))
    }
  }

  return commomLetters
}

console.log(commonChars(["bella","label","roller"]))

// Data: 02/03/2025
// In this problem I should return an array of all characters that show up in all strings within the words (including duplicates).