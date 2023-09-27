// [BOJ] 2805. 나무 자르기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 나무의 수, 가져가려고 하는 나무의 길이
const [N, M] = input.shift().split(" ").map(Number);
const heights = input.shift().split(" ").map(Number); // 나무의 높이

// 이진 탐색
function binarySearch(start, end) {
  let result = 0; // 절단기 높이

  while (start <= end) {
    const mid = Math.floor((start + end) / 2); // 중앙값

    // 중앙값에 따른 가져갈 수 있는 나무 길이 총합
    const total = heights.reduce(
      (acc, cur) => (cur > mid ? acc + (cur - mid) : acc),
      0
    );

    // 절단기 높이 최댓값 구하기, 중앙값 올리기
    if (total >= M) {
      result = mid;
      start = mid + 1;
    }
    // 중앙값 낮추기
    else end = mid - 1;
  }

  return result;
}

console.log(binarySearch(0, Math.max(...heights)));
