// [BOJ] 11399. ATM

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift()); // 사람의 수

// 각 사람이 돈을 인출하는데 걸리는 시간 오름차순으로 정렬 후
// 남은 사람들 수 만큼 곱하여 누적 합 구하기
const result = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
  .reduce((acc, cur, idx) => acc + cur * (N - idx), 0);

console.log(result);
