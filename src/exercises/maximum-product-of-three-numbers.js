/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumProduct(nums) {
  const sortedNums = [...nums].sort((a, b) => b - a)

  const product1 = sortedNums[0] * sortedNums[1] * sortedNums[2]
  const product2 =
    sortedNums[0] *
    sortedNums[sortedNums.length - 1] *
    sortedNums[sortedNums.length - 2]

  return Math.max(product1, product2)
}

console.log(maximumProduct([-100, -98, -1, 2, 3, 4]))

// Data: 16/10/2025
// ChatGPT helped me on this question