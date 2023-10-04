const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const num = Number(input);
let dp = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
  // 우선적으로 1을 뺀 값 구하기
  dp[i] = dp[i - 1] + 1;

  // 2로 나누어 떨어지는 경우
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  // 3으로 나누어 떨어지는 경우
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[num]);
