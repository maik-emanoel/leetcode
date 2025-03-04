/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
function reduce(nums, fn, init) {
  if (!nums.length) return init

  let value = init

  for (const num of nums) {
    value = fn(value, num)
  }

  return value
}

function sum(acc, curr) {
  return acc + curr * curr
}

console.log(reduce([1, 2, 3, 4], sum, 100))

// Data: 02/02/2025