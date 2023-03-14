function solution(numbers, k) {
  var answer = 0;
  return numbers[(k - 1) * 2 % numbers.length];
}