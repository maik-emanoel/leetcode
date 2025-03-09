/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
  const newArray = []

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArray.push(arr[i])
    }
  }

  return newArray
}

function greaterThan10(n) {
  return n > 10
}

console.log(filter([0, 10, 20, 30], greaterThan10))

// Data: 02/02/2025

// The goals of this exercise was to make a function that filter elements from an array without using the Array.filter method
