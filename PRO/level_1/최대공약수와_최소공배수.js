function solution(n, m) {
  let f_ans = [];
  let ans1 = Math.min(n, m);
  let ans2 = Math.max(n, m);
  for (let i = ans1; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      f_ans.push(i);
      break;
    }
  }
  for (let i = 1; i <= ans1; i++) {
    if ((i * ans2) % n === 0 && (i * ans2) % m === 0) {
      f_ans.push(i * ans2);
      break;
    }
  }
  return f_ans;
}
