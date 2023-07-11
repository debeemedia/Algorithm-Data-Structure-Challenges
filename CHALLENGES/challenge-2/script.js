function compareTriplets (a, b) {
  const scoreArray = [0, 0]
  for (let i = 0; i < a.length && i < b.length; i++) {
    if (a[i] > b[i]) {
      scoreArray[0]++
    } else if (a[i] < b[i]) {
      scoreArray[1]++
    }
  }
  return scoreArray
}

// test and log the code to see the result
console.log(compareTriplets([1, 2, 3], [3, 2, 1]))
