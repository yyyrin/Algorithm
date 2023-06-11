function solution(left, right) {
  let ans = 0;
  for (let i = left; i < right + 1; i++) {
    Number.isInteger(Math.sqrt(i)) ? (ans -= i) : (ans += i);
  }
  return ans;
}
