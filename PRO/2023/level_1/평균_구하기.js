function solution(arr) {
  let sum = arr.reduce(add = (sum, currValue) => {
      return sum + currValue;
  })
  return sum/arr.length
}