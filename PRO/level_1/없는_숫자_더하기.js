function solution(numbers) {
  return 45 - numbers.reduce((n, i) => n + i, 0);
}
