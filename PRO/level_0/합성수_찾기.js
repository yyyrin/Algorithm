function solution(n) {
  let ans = 0;
  for (let i = 2; i < n + 1; i++) {
    let cnt = 1;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        cnt += 1;
      }
      if (cnt >= 3) {
        ans += 1;
        break;
      }
    }
  }
  return ans;
}
