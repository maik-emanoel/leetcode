/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      const index = nums.indexOf(nums[i])
      nums.splice(index, 1)
      i--
    }
  }

  return nums.length
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))

// Data: 28/06/2024
// Nível: Fácil