// [BOJ] 2847. 게임을 만든 동준이

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift(); // 레벨의 수
let numbers = input.map(Number); // 각 레벨 클리어하면 얻는 점수
let count = 0; // 점수 감소시킨 횟수

for (let i = N - 1; i > 0; i--) {
  // 현재 값이 이전 값보다 크지 않은 경우
  if (numbers[i] <= numbers[i - 1]) {
    count += numbers[i - 1] - (numbers[i] - 1);
    numbers[i - 1] = numbers[i] - 1; // 이전 값을 현재 값 -1로 갱신
  }
}

console.log(count);