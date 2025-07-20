/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (!haystack.includes(needle)) return -1
  
  return Array.from(haystack.matchAll(needle))[0].index
}

console.log(strStr('sadbutsad', 'sad'))

// Data: 27/04/2025
// In this problem I should return the index of the first occurrence in a string
