/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  if (nums.length === 1 && nums[0] > 0) {
    return 0
  }

  const ordernedNumbers = nums.sort((a, b) => a - b)

  const allNumbers = Array.from({ length: ordernedNumbers.length + 1 }).map(
    (item, index) => (item = index)
  )

  return allNumbers.find((num) => !ordernedNumbers.includes(num))
}

console.log(missingNumber([0]))

// Data: 27/04/2025
// In this problem I should return the only number in the range that is missing from the array.