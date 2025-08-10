/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
  let position = { x: 0, y: 0 }

  for (const move of moves) {
    switch (move) {
      case 'U':
        position.y += 1
        break
      case 'D':
        position.y -= 1
        break
      case 'L':
        position.x += 1
        break
      case 'R':
        position.x -= 1
        break
    }
  }

  return position.x === 0 && position.y === 0
}

console.log(judgeCircle('UD')) // Move up and down and the robot stays of the beginning
console.log(judgeCircle('LL')) // Move to left two times and the robot get out of the beginning

// Data: 22/06/2025