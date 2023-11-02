// [BOJ] 1758. 알바생 경호

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

// 내림차순 정렬 후 팁 계산
const maxTip = input
  .map(Number)
  .sort((a, b) => b - a)
  .reduce((acc, cur, idx) => {
    return cur - idx > 0 ? acc + cur - idx : acc;
  }, 0);

console.log(maxTip);
