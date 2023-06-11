function solution(arr, divisor) {
  let array = arr.filter((e) => e % divisor === 0);
  return array.length === 0 ? [-1] : array.sort((a, b) => a - b);
}
