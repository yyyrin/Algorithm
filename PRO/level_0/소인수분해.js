function solution(n) {
  let n1 = n;
  let ans = [];
  for (let i = 2; i <= n; i++) {
    if (n1 === 1) break;

    while (n1 % i === 0) {
      n1 = n1 / i;
      if (!ans.includes(i)) ans.push(i);
    }
  }

  return ans;
}
