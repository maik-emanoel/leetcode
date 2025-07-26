/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
function splitWordsBySeparator(words, separator) {
  const serializedWords = words.map(word => word.replaceAll(separator, ' ').split(' '))

  return serializedWords.flat().filter(word => !!word)
}

console.log(splitWordsBySeparator(["one.two.three","four.five","six"], "."))

// Data: 23/03/2025