import express from 'express'

const app = express()

const PORT = 3333

app.listen(PORT, () => {
  return console.log(`Server running on port ${PORT}`)
})

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  const letters = []

  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    if (!letters.includes(letter)) {
      letters.push(letter)
    }
  }

  if (s.length === t.length) {
    return letters.every((letter) => t.includes(letter))
  }

  return false
}

console.log(isAnagram('anagram', 'nagaram'))
