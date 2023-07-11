function highLength (a, b) {
  let sumA = 0
  let sumB = 0
  for (let i = 0; i < a.length; i++) {
    sumA += a[i]
    for (let j = 0; j < b.length; j++) {
      sumB += b[j]
      if (sumA > sumB) {
        return a.length
      } else if (sumA < sumB) {
        return b.length
      }
    }
  }
}

// test and log the code to see the result
console.log(highLength([3, 5, 1, 7, 9], [11, 31]))
console.log(highLength([13, 11, 3, 1], [4, 9, 1]))
console.log(highLength([20], [1, 18]))
