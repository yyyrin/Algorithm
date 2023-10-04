// [BOJ] 11057. 오르막 수

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const N = Number(input); // 수의 길이
let dp = Array.from(Array(N + 1), () => Array(10).fill(1));

for (let i = 2; i <= N; i++) {
  dp[i][0] = dp[i - 1][0] % 10007;
  for (let j = 1; j < 10; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
  }
}

console.log(dp[N].reduce((acc, cur) => acc + cur, 0) % 10007);
