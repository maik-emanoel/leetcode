/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const intersectionNums = []

  const mergedArr = [...nums1, ...nums2]

  for (const num of mergedArr) {
    if (nums1.includes(num) && nums2.includes(num)) {
      intersectionNums.push(num)
    }
  }

  return [...new Set(intersectionNums)]
}

console.log(intersection([1, 2, 2, 1], [2, 2]))

// Data: 27/07/2025
