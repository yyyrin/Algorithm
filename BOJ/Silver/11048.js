// [BOJ] 11048. 이동하기

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number); // 미로의 크기
const maze = input.map((e) => e.split(" ").map(Number));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // 시작점인 경우
    if (i === 0 && j === 0) continue;
    // 첫 번째 행의 경우
    if (i === 0) maze[i][j] += maze[i][j - 1];
    // 첫 번째 열의 경우
    if (j === 0) maze[i][j] += maze[i - 1][j];
    // 이동할 경우의 수가 3개인 경우 최댓값 더해주기
    if (i > 0 && j > 0) {
      maze[i][j] += Math.max(
        maze[i][j - 1],
        maze[i - 1][j],
        maze[i - 1][j - 1]
      );
    }
  }
}

console.log(maze[N - 1][M - 1]);
