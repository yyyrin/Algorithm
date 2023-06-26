function solution(n) {
  let x3 = 0;
  for (let i = 1; i <= n; i++) {
    x3 += 1;
    while (x3 % 3 === 0 || x3.toString().includes("3")) x3 += 1;
  }
  return x3;
}
