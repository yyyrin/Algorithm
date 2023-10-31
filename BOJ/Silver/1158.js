// [BOJ] 요세푸스 문제

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = input.split(" ").map(Number); // 인원 수, 제거할 번호
let queue = [];
let answer = [];

// 1 ~ N까지 숫자 넣기
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let cnt = 1;
while (queue.length) {
  const shiftItem = queue.shift();
  // 제거할 순서인지 확인
  if (cnt % K === 0) {
    answer.push(shiftItem);
  } else {
    queue.push(shiftItem);
  }
  cnt++;
}

console.log(`<${answer.join(", ")}>`);
