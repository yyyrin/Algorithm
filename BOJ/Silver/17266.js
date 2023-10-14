// [BOJ] 17266. 어두운 굴다리

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0]; // 굴다리의 길이
const M = input[1]; // 가로등의 개수
const x = input[2].split(" ").map(Number); // 가로등의 위치
let candidates = []; // 가로등 길이 후보군

// 앞의 값과 현재 값 차이 계산
for (let i = 0; i < M - 1; i++) {
  candidates.push(Math.ceil((x[i + 1] - x[i]) / 2));
}

console.log(Math.max(x[0], Math.max(...candidates), N - x[M - 1]));
