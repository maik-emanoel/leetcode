/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()

  const alphabeticCorseCode = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ]

  const transformations = words.map((word) => {
    const wordToCorseCode = word.split('').map((letter) => {
      const letterIndex = alphabet.indexOf(letter)
      const corseCode = alphabeticCorseCode[letterIndex]
      
      return corseCode
    })

    return wordToCorseCode.join('')
  })

  let countTransformations = {}

  for (const transformation of transformations) {
    if (!countTransformations[transformation]) {
      countTransformations[transformation] = 1
    } else {
      countTransformations[transformation] += 1
    }
  }

  return Object.entries(countTransformations).length
}

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]))

// Data: 02/03/2025
// In this problem I should convert the strings into a morse code and to return only the length of unique codes.

// Ps.: Analysing others solutions I realized that I could've to avoided to the lasts 10 lines by using the transformations array into "new Set" and getting its size.