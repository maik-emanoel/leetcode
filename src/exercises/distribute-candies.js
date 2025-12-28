/**
 * @param {number[]} candyType
 * @return {number}
 */
function distributeCandies(candyType) {
  const maxCandiesToEat = candyType.length / 2
  let candiesEaten = 0

  const candyTypes = candyType.reduce((acc, candy) => {
    if (!acc[candy]) {
      acc[candy] = 1
    } else {
      acc[candy] += 1
    }

    return acc
  }, {})

  for (const candy in candyTypes) {
    if (candiesEaten < maxCandiesToEat) {
      candiesEaten++
      delete candyTypes[candy]
    }
  }

  return candiesEaten
}

console.log(distributeCandies([1,1,2,3]))

// Data: 09/10/2025