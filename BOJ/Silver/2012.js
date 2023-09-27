// [BOJ] 2512. 예산

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input.shift(); // 지방의 수
const request = input.shift().split(" ").map(Number); // 각 지방의 예산 요청
const M = input.shift(); // 총 예산
const maxRequest = Math.max(...request); // 예산 요청 중 최댓값

// 이진 탐색
function binarySearch(start, end) {
  let upperLimit = 0; // 상한액

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // 상한액을 기준으로 배정된 예산 총액 계산
    let total = request.reduce(
      (acc, cur) => (cur > mid ? acc + mid : acc + cur),
      0
    );

    // 배정된 예산 총액이 총 예산 이하라면
    if (total <= M) {
      upperLimit = mid;
      start = mid + 1;
    }
    // 배정된 예산 총액이 총 예산을 초과한 경우
    else end = mid - 1;
  }

  return upperLimit;
}

// 모든 요청이 배정될 수 있는 경우
if (request.reduce((acc, cur) => acc + cur, 0) <= M) {
  console.log(maxRequest);
}

// 모든 요청이 배정될 수 없는 경우
else {
  let limit = binarySearch(0, maxRequest - 1);
  console.log(limit);
}
