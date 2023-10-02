// [BOJ] 1931. 회의실 배정

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift(); // 회의의 수
const array = input
  .map((e) => e.split(" ").map(Number))
  .sort((a, b) => {
    // 끝나는 시간 기준으로 오름차순 (회의가 끝나는 시간이 빨라야하기 때문)
    if (a[1] === b[1]) return a[0] - b[0];
    // 끝나는 시간이 같다면 시작하는 시간 기준으로 오름차순 (일찍 시작해야 최대한 더 많이 이용할 수 있기 때문)
    else return a[1] - b[1];
  });

let time = 0; // 최근에 회의실을 이용하고 끝나는 시간 저장
let result = 0; // 회의 개수

array.forEach((e) => {
  if (e[0] >= time) {
    result++;
    time = e[1];
  }
});

console.log(result);
