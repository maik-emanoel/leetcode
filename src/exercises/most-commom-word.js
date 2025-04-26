/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
  let serializedParagraph = paragraph
    .toLowerCase()
    .replaceAll(',', ' ')
    .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '')

  const paragraphArr = serializedParagraph
    .split(' ')
    .filter((word) => !!word && !banned.includes(word))
  const countWords = {}

  for (const word of paragraphArr) {
    if (!countWords[word]) {
      countWords[word] = 1
    } else {
      countWords[word] += 1
    }
  }

  const countWordsArr = Object.entries(countWords)
  const maxNumber = Math.max(...countWordsArr.map(([_, value]) => value))

  return countWordsArr.find(([_, value]) => value === maxNumber)[0]
}

console.log(
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit',
  ])
)

// Data: 23/03/2025
