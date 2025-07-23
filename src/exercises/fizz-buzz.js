/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  const rangeNumbersArr = []
  let index = 1

  while (index < n + 1) {
    rangeNumbersArr.push(index)
    index++
  }

  return rangeNumbersArr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz'
    } else if (num % 3 === 0) {
      return 'Fizz'
    } else if (num % 5 === 0) {
      return 'Buzz'
    } else {
      return num.toString()
    }
  })
}

console.log(fizzBuzz(15))

// Data: 27/04/2025