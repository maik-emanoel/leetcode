/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const uniqueNums = [...new Set(nums)]
  return uniqueNums.length !== nums.length
}

console.log(containsDuplicate([1, 2, 3, 1]))

// Data: 23/02/2025

// In this problem I should create a function to verify if all values inside a number's array were unique, without duplicate.