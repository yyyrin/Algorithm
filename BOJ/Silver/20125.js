// [BOJ] 20125. 쿠키의 신체 측정

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift(); // 정사각형 한 변의 길이
input = input.map((e) => e.trim().split(""));
let heart = [];
let body = [];

// 심장 위치 찾기
for (let i = 0; i < N; i++) {
  if (heart.length > 0) break;

  for (let j = 0; j < N; j++) {
    if (input[i][j] === "*") {
      heart.push(i + 2, j + 1);
      break;
    }
  }
}

let leftArm = heart[1] - (input[heart[0] - 1].indexOf("*") + 1); // 왼쪽 팔 길이
let rightArm = input[heart[0] - 1].lastIndexOf("*") + 1 - heart[1]; // 오른쪽 팔 길이
body.push(leftArm, rightArm);

// 허리 길이
for (let i = heart[0]; i < N; i++) {
  if (input[i][heart[1] - 1] === "_") {
    body.push(i - heart[0]);
    break;
  }
}

// 왼쪽 다리 길이
for (let i = N - 1; i >= heart[0] + body[2]; i--) {
  if (input[i][heart[1] - 2] === "*") {
    body.push(i - (heart[0] + body[2]) + 1);
    break;
  }
}

// 오른쪽 다리 길이
for (let i = N - 1; i >= heart[0] + body[2]; i--) {
  if (input[i][heart[1]] === "*") {
    body.push(i - (heart[0] + body[2]) + 1);
    break;
  }
}

console.log(...heart);
console.log(...body);
