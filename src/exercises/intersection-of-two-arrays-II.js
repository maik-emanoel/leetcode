/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const intersectionNums = []

  for (const num1 of nums1) {
    if (nums2.includes(num1)) {
      const index = nums2.findIndex((num2) => num2 === num1)

      const removedNum = nums2.splice(index, 1)
      intersectionNums.push(...removedNum)
    }
  }

  return intersectionNums
}

console.log(intersection([4,9,5], [9,4,9,8,4]))

// Data: 05/08/2025
// In this exercise I should return the intersection between two arrays, the result should appear as many times as it shows in both arrays.