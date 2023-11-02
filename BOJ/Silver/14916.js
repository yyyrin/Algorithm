// [BOJ] 14916. 거스름돈

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(input); // 거스름돈 액수
let count = 0; // 동전 개수

// 거슬러 줄 수 없는 금액인 경우
if (n === 1 || n === 3) console.log(-1);
else {
  while (n > 0) {
    // 홀수이거나 5의 배수인 경우
    if (n % 2 === 1 || n % 5 === 0) {
      count++;
      n -= 5;
    }
    // 짝수인 경우
    else if (n % 2 === 0) {
      count++;
      n -= 2;
    }
  }

  console.log(count);
}
