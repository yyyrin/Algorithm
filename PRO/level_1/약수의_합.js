function solution(a, b) {
  let ans = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      ans += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      ans += i;
    }
  }
  return ans;
}
