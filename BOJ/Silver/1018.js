// [BOJ] 1018. 체스판 다시 칠하기

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
input = input.map((str) => str.trim("\r").split(""));

let minArr = [];
let line = ["WBWBWBWB", "BWBWBWBW"];

// 맨 왼쪽 위 좌표
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    
    // 2개의 경우 고려(맨 왼쪽 위 칸이 흰색이거나 검은색인 경우)
    for (let z = 0; z < 2; z++) {
      let count = 0;

      // 8x8 정사각형 도는 for문
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          let current = input[i + x][j + y];
          if (current !== line[(x + z) % 2][y]) count++;
        }
      }
      minArr.push(count);
    }
  }
}

console.log(Math.min(...minArr));
