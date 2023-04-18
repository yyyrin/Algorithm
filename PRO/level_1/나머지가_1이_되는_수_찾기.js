function solution(n) {
  let ans = 1;
  while (n % ans !== 1) {
    ans += 1;
  }
  return ans;
}
