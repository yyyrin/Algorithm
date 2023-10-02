// [BOJ] 1541. 잃어버린 괄호

const fs = require("fs");
// 입력값 "-" 기준으로 나누기
const input = fs.readFileSync("/dev/stdin").toString().trim().split("-");

// 첫 값 구하기
let result = input
  .shift()
  .split("+")
  .map(Number)
  .reduce((acc, cur) => acc + cur);

// input에 값이 남아있다면 index별 합 구해서 result에 빼주기
for (let i = 0; i < input.length; i++) {
  result -= input[i]
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}

console.log(result);
