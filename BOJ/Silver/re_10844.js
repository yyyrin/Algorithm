// [BOJ] 10844. 쉬운 계단 수

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
let dp = [];
dp[0] = [];
dp[1] = new Array(10).fill(1);
dp[1][0] = 0;

for (let i = 1; i < N; i++) {
  dp[i + 1] = new Array(10).fill(0);
  dp[i + 1][1] = dp[i][0] % 1000000000;
  for (let j = 1; j < 9; j++) {
    dp[i + 1][j - 1] += dp[i][j] % 1000000000;
    dp[i + 1][j + 1] += dp[i][j] % 1000000000;
  }
  dp[i + 1][8] += dp[i][9] % 1000000000;
}

console.log(dp[N].reduce((acc, cur) => acc + cur) % 1000000000);
