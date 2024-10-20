/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  const frequency = {};

  for (const num of nums) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  for (const num in frequency) {
    if (frequency[num] === 1) {
      return parseInt(num);
    }
  }
}

console.log(singleNumber([2, 2, 2, 2, 4]))

// Data: 09/10/2024