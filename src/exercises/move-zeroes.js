/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1) // Remove the element 0 of the array
      nums.push(0) // Put it back to the end
    }
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]))

// Data: 27/07/2025
// In this exercise I should modify the original array to put the zeroes to the end of the array
