/**
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(score) {
  const sortedScore = [...score].sort((a, b) => a - b).reverse()

  const placements = []

  for (let i = 0; i < score.length; i++) {
    const index = sortedScore.indexOf(score[i])

    if (index === 0) {
      placements.push('Gold Medal')
    } else if (index === 1) {
      placements.push('Silver Medal')
    } else if (index === 2) {
      placements.push('Bronze Medal')
    } else {
      placements.push(String(index + 1))
    }
  }

  return placements
}

console.log(findRelativeRanks([10, 3, 8, 9, 4]))

// Data: 10/08/2025
