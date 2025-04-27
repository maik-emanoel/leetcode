/**
 * @param {string[]} sentences
 * @return {number}
 */
function mostWordsFound(sentences) {
  const sentencesLength = sentences.map((sentence) => sentence.split(' ').length)
  return Math.max(...sentencesLength)
}

console.log(
  mostWordsFound([
    'alice and bob love leetcode',
    'i think so too',
    'this is great thanks very much',
  ])
)

// Data: 09/03/2025
// In this problem I should return the number of the longest sentence