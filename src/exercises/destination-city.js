/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  const cities = new Set()

  for (const path of paths) {
    cities.add(path[0]) // Add from cities first
  }

  for (const path of paths) {
    if (!cities.has(path)) {
      cities.add(path[1]) // After add the city that is not included on cities set, and that city will be the destination
    }
  }

  const citiesArr = Array.from(cities)
  const destination = citiesArr.at(citiesArr.length - 1)

  return destination
}

console.log(
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo'],
  ])
)

// Data: 09/03/2025