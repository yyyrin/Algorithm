function solution(n, k) {
  let res = [];
  for (let i = 1; i * k <= n; i++) {
    res.push(i * k);
  }
  return res;
}
