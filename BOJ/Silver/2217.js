// [BOJ] 2217. 로프

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .trim()
  .toString()
  .split("\n")
  .map(Number);

const N = input.shift(); // 로프의 개수

// 오름차순으로 정렬 후 각 로프의 최대 중량일 때 들어올릴 수 있는 최대 무게 return
let array = input
  .sort((a, b) => a - b)
  .map((e, idx) => {
    return e * (N - idx);
  });

console.log(Math.max(...array));
