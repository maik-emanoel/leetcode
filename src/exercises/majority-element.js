/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const countNums = nums.reduce((acc, num) => {
    if (acc[num]) {
      acc[num] += 1
    } else {
      acc[num] = 1
    }

    return acc
  }, {})

  return Number(Object.entries(countNums).sort((a, b) => b[1] - a[1])[0][0])
}

console.log(majorityElement([3, 2, 3]))

// Data: 27/04/2025
// In this problem I should return the number that repeated more in a given array