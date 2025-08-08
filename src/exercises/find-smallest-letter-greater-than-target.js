/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
function nextGreatestLetter(letters, target) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const targetIndex = alphabet.indexOf(target)

  let greatestLetter = letters[0]

  for (const letter of letters) {
    const letterIndex = alphabet.indexOf(letter)

    if (letterIndex > targetIndex) {
      greatestLetter = letter
      break
    }
  }

  return greatestLetter
}

console.log(nextGreatestLetter(["c","f","j"], 'c'))

// Data: 22/06/2025