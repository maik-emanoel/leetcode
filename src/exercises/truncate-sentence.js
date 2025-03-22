/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function truncateSentence(s, k) {
  return s.split(' ').slice(0, k).join(' ')
}

console.log(truncateSentence('Hello how are you Contestant', 4))

// Data: 02/03/2025