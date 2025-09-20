/**
 * @param {string} s
 * @return {number}
 */
function countSegments(s) {
  if (s.trim().length === 0) return 0

  return s.trim().split(' ').filter(v => !!v).length
}

console.log(countSegments("Hello, my name is John"))

// Data: 01/09/2025
// After try to do a bunch of exercises, I was able to solve this one