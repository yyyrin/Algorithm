function solution(array, n) {
  let count = array.filter(element => n === element).length;
  return count;
}