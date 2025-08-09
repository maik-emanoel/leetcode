/**
 * @param {number[][]} image
 * @return {number[][]}
 */
function flipAndInvertImage(image) {
  const imageFlippedHorizontally = image.map((array) => {
    return array.reverse()
  }) // To flip an image horizontally means that each row of the image is reversed.

  const imageInverted = imageFlippedHorizontally.map((array) => {
    return array.map((num) => {
      if (num === 0) {
        return 1
      }

      return 0
    })
  }) // To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

  return imageInverted
}

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
)

// Data: 22/06/2025