function solution(n) {
  let cnt = 1;
  for (i = 1; i < n; i++) {
    if (n % i === 0) {
      cnt += 1;
    }
  }
  return cnt;
}
