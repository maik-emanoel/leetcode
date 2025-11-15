/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
function findClosest(x, y, z) {
  let baseX = x
  let baseY = y

  while (baseX !== z) {
    if (baseX > z) {
      baseX--
    } else {
      baseX++
    }
  }

  while (baseY !== z) {
    if (baseY > z) {
      baseY--
    } else {
      baseY++
    }
  }

  const person1Steps = Math.abs(baseX - x)
  const person2Steps = Math.abs(baseY - y)

  const person1Value = 1
  const person2Value = 2

  if (person1Steps === person2Steps) return 0

  if (person1Steps > person2Steps) {
    return person2Value
  } else {
    return person1Value
  }
}

console.log(findClosest(2, 7, 4))

// Data: 03/09/2025
// In this exercise I should return the "person" closest to the z (person 3)