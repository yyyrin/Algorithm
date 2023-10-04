// [BOJ] 11727. 2Xn 타일링 2

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = Number(input);
let dp = [0, 1, 3]

for (let i = 3; i <= num; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[num]);
