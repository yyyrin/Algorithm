function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    result.push(Math.max(Math.floor(i / n), i % n) + 1);
  }

  return result;
}
