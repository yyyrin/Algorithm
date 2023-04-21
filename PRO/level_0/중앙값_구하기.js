function solution(array) {
  new_array = array.sort((a, b) => a - b)
  return new_array[Math.floor(array.length / 2)]
}