/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
function canBeTypedWords(text, brokenLetters) {
  const words = text
    .split(' ')
    .filter((word) =>
      !word.split('').some((letter) => brokenLetters.split('').includes(letter))
    )

  return words.length
}

console.log(canBeTypedWords('hello world', 'ad'))

// Data: 15/09/2025
// In this exercise I should return the number of the words that can be typed. (The letters of the words couldn't be in the brokenLetters)