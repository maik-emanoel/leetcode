/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations) {
  let finalValue = 0

  for (const operation of operations) {
    operation.includes('+') ? finalValue++ : finalValue--
  }

  return finalValue
}

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']))

// Data: 09/03/2025
// In this problem I should calculate the final value after performing all the operations