function solution(n) {
  let ans = 0;
  if (n % 2 === 1) {
    for (let i = 1; i <= n; i += 2) {
      ans += i;
    }
  } else {
    for (let i = 2; i <= n; i += 2) {
      ans += i ** 2;
    }
  }
  return ans;
}
