/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatches(items, ruleKey, ruleValue) {
  const rulesIndex = {
    type: 0,
    color: 1,
    name: 2
  }

  const index = rulesIndex[ruleKey]
  return items.filter(item => item[index] === ruleValue).length
}

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'lenovo'],
      ['phone', 'gold', 'iphone'],
    ],
    'color',
    'silver'
  )
)

// Data: 23/03/2025