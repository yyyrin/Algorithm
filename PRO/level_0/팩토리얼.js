function solution(n) {
  let res = 1;
  let cnt = 1;
  while (n >= res) {
    cnt += 1;
    res *= cnt;
  }
  return cnt - 1;
}
