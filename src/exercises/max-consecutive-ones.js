/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  const consecutives = []
  let count = 0

  for (const num of nums) {
    if (num === 1) {
      count++
    } else {
      consecutives.push(count)
      count = 0
    }
  }

  if (count > 0) {
    consecutives.push(count)
  }

  return Math.max(...consecutives)
}

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1]))

// Data: 03/09/2025
// In this exercise I should return the number of the maximum sequence of ones in the given array