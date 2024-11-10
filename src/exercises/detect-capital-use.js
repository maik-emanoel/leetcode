/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
  if (word.split('').every((letter) => letter === letter.toUpperCase())) {
    return true
  } else if (
    word.split('').every((letter) => letter === letter.toLowerCase())
  ) {
    return true
  } else if (
    word.split('')[0] === word.split('')[0].toUpperCase() &&
    word
      .split('')
      .slice(1)
      .every((letter) => letter === letter.toLowerCase())
  ) {
    return true
  }

  return false
}

console.log(detectCapitalUse('Usa'))

// Data: 27/10/2024