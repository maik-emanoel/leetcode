/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
function findWordsContaining(words, x) {
  const arr = []

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      arr.push(i)
    }
  }

  return arr
}

console.log(findWordsContaining(['leet', 'code'], 'e'))

// Data: 23/03/2025
// In this problem I should return an array of indexes of the words that contained the letter inside the parameter "x"