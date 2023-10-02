// [BOJ] 1026. 보물

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

input = input.map((e) => e.split(" ").map(Number));
input[0].sort((a, b) => a - b); // 배열 A 오름차순 정렬
input[1].sort((a, b) => b - a); // 배열 B 내림차순 정렬

let result = 0;
// 함수 S 계산
input[0].forEach((e, idx) => {
  result += e * input[1][idx];
});

console.log(result);
