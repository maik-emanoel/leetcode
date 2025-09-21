/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false

  const sMap = {}
  const tMap = {}

  for (let i = 0; i < t.length; i++) {
    const a = s[i]
    const b = t[i]

    if (!sMap[a] && !tMap[b]) {
      sMap[a] = b
      tMap[b] = a
      continue
    }

    if (sMap[a] !== b || tMap[b] !== a) {
      return false
    }
  }

  return true
}

console.log(isIsomorphic('badc', 'baba'))

// Data: 17/08/2025
// I saw in the discussion field some tips that helped me to build a function and this function didn't passed in all tests
// So I asked help for chatgpt to understand how to solve this question
