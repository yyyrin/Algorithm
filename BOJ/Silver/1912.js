// [BOJ] 1912. 연속합

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 정수 개수
const array = input[1].split(" ").map(Number); // N개의 정수
let dp = [array[0]];

// 현재 값과 DP 맨 마지막 값과 비교
for (let i = 1; i < N; i++) {
  dp[i] = array[i] > array[i] + dp[i - 1] ? array[i] : array[i] + dp[i - 1];
}

// 최댓값 출력
console.log(Math.max(...dp));
