/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
  const obj = {}
  let jewelsNumber = 0

  for (const jewel of jewels) {
    if (!obj[jewel]) {
      obj[jewel] = 1
    } else {
      obj[jewel] += 1
    }
  }

  for (const stone of stones) {
    if (obj[stone]) {
      jewelsNumber++
    }
  }

  return jewelsNumber
}

console.log(numJewelsInStones('z', 'ZZ'))

// Data: 26/01/2025
