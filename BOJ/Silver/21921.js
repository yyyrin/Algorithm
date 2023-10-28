// [BOJ] 21921. 블로그

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number); // 블로그를 시작하고 지난 일수, 구하고자 하는 기간
const people = input[1].split(" ").map(Number); // 일자별 방문자 수

let maxSum = 0; // X일 동안 가장 많이 들어온 방문자 수
let maxSumCnt = 0; // 최대 방문자 수 달성한 기간 수
let sumResult = people.slice(0, X - 1).reduce((acc, cur) => acc + cur, 0); // 초기값 설정

// 슬라이딩 윈도우 사용한 합 계산
for (let i = X - 1; i < N; i++) {
  sumResult += people[i];
  if (i >= X) {
    sumResult -= people[i - X];
  }

  if (sumResult > maxSum) {
    maxSum = sumResult;
    maxSumCnt = 1;
  } else if (maxSum === sumResult) {
    maxSumCnt++;
  }
}

if (maxSum > 0) {
  console.log(maxSum);
  console.log(maxSumCnt);
} else console.log("SAD");
