// [BOJ] 1890. 점프

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift()); // 게임 판의 크기
const board = input.map((e) => e.split(" ").map(Number)); // 게임판
// 해당 좌표까지 갈 수 있는 경로의 경우의 수
// 최대 경로의 개수가 2^63 - 1이므로 BigInt 사용
let check = Array.from(Array(N), () => Array(N).fill(BigInt(0))); 
check[0][0] = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 해당 경로로 갈 수 없거나 최종 도착지인 경우
    if (check[i][j] === 0 || (i === N - 1 && j === N - 1)) continue;

    const val = board[i][j]; // 현재 칸에서 갈 수 있는 거리

    // 갈 수 있는 좌표가 범위 안에 있는 경우 처리
    if (j + val < N) check[i][j + val] += BigInt(check[i][j]);
    if (i + val < N) check[i + val][j] += BigInt(check[i][j]);
  }
}

console.log(check[N - 1][N - 1].toString());
