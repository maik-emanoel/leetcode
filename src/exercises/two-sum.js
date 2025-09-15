/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const response = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        response.push(i)
      }
    }
  }

  return response
}

console.log(twoSum([3,3], 6))

// Data: 17/08/2025
// In this exercise I should return indices of the two numbers such that they add up to target.
// I didn't use the same element twice