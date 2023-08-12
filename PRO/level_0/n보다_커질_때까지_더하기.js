function solution(numbers, n) {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (res > n) return res;
    res += numbers[i];
  }
  return res;
}
