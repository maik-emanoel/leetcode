/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  const firstRowLetters = 'qwertyuiop'
  const secondRowLetters = 'asdfghjkl'
  const thirdRowLetters = 'zxcvbnm'

  let arr = []

  for (const word of words) {
    const wordIntoArr = word.toLowerCase().split('')

    if (wordIntoArr.every((letter) => firstRowLetters.includes(letter))) {
      arr.push(word)
    } else if (
      wordIntoArr.every((letter) => secondRowLetters.includes(letter))
    ) {
      arr.push(word)
    } else if (
      wordIntoArr.every((letter) => thirdRowLetters.includes(letter))
    ) {
      arr.push(word)
    }
  }

  return arr
}

console.log(findWords(['adsdf', 'sfd']))

// Data: 20/10/2024