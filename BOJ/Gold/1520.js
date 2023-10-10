// [BOJ] 1520. 내리막 길

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number); // 세로, 가로
const board = input.map((e) => e.split(" ").map(Number)); // 지도
let dp = Array.from(Array(M), () => Array(N).fill(0));

dx = [1, 0, 0];
dy = [0, -1, 1];

dp[0][0] = 1;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (dp[i][j] === 0 || (i === M - 1 && j === N - 1)) continue;

    for (let k = 0; k < 3; k++) {
      nx = i + dx[k];
      ny = j + dy[k];
      if (
        nx > -1 &&
        nx < M &&
        ny > -1 &&
        ny < N &&
        board[nx][ny] < board[i][j]
      ) {
        dp[nx][ny] += dp[i][j];
      }
    }
  }
}

console.log(dp);
console.log(dp[M - 1][N - 1]);
