function findMax(array) {
  let me = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > me) {
      me = array[i]
    }
  }
  return me
}

function includes(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return true
    }
  }
  return false
}

function sum(array) {
  let s = 0
  for (let i = 0; i < array.length; i++) {
    s += array[i]
  }
  return s
}

function missingNumbers(array) {
  array.sort()
  let missingNumbers = []
  let n = array[0]+1
  for (let i = 1; i < array.length; i++) {
    while (array[i] > n) {
      missingNumbers.push(n)
      n += 1
    }
    n += 1
  }
  return missingNumbers
}
