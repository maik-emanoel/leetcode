/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    const nextNum = nums[i + 1]

    if (nums[i] === nextNum) {
      const index = nums.indexOf(nums[i])
      nums.splice(index, 1)
      i--
    }
  }

  return nums
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// Data: 29/06/2024
// Nível: Fácil