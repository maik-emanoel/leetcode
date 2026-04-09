/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  const targetPositions = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      targetPositions.push(i)
    }
  }

  if (targetPositions.length >= 1) {
    const firstPosition = targetPositions[0]
    const lastPosition = targetPositions[targetPositions.length - 1]

    return [firstPosition, lastPosition]
  } else {
    return [-1, -1]
  }
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))

// Data: 21/10/2025
// The first question in the medium level that I get complete it