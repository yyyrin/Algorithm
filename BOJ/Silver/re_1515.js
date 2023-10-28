// [BOJ] 1515. 수 이어 쓰기

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(""); // 지우고 남은 수를 한 줄로 이어 붙인 수
let i = 0;

while (true) {
  i++; // 1부터 1씩 증가시키기
  let num = i.toString().split("");

  while (num.length > 0 && input.length > 0) {
    // input 값 하나씩 제거하기
    if (num[0] === input[0]) {
      input.shift();
    }
    num.shift();
  }

  if (input.length < 1) {
    console.log(i);
    break;
  }
}
