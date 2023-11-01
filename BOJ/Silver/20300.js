// [BOJ] 20300. 서강근육맨

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]); //  운동기구의 개수
// 각 운동기구의 근손실 정도
// N의 범위가 10^18이므로 BigInt 사용
let loss = input[1]
  .split(" ")
  .map((e) => BigInt(e))
  .sort((a, b) => (a < b ? -1 : 1)); // BigInt는 sort() 안에서 연산 불가
let M = 0; // 근손실 정도

// 운동기구 개수가 홀수인 경우
// 가장 큰 수를 근손실 정도(M)으로 설정
if (loss.length % 2 === 1) {
  M = loss.pop();
  N--;
}

// 근손실 정도 갱신
for (let i = 0; i < N / 2; i++) {
  const sum = loss[i] + loss[loss.length - 1 - i];
  M = sum > M ? sum : M;
}

console.log(M.toString());
