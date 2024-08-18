/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const regex = /[^a-zA-Z0-9]/ig
  const formattedStr = s.toLowerCase().replace(regex, '')
  const reversedFormattedStr = formattedStr.split('').reverse().join('')

  return formattedStr === reversedFormattedStr
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))

// Data: 30/06/2024
// Nível: Fácil