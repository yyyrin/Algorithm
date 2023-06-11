function solution(n) {
  let sqrt_n = Math.sqrt(n);
  return Number.isInteger(sqrt_n) ? (sqrt_n + 1) ** 2 : -1;
}
