// [BOJ] 2475. 검증수

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const result = input.reduce((acc, cur) => acc + Number(cur) ** 2, 0) % 10;
console.log(result);
