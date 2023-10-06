// [BOJ] 7568. 덩치

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift(); // 전체 사람의 수
input = input.map((e) => e.split(" ").map(Number)); // 각 사람의 몸무게와 키 배열
let rankArray = []; // 등수 저장할 배열

for (let i = 0; i < N; i++) {
  let rank = 1;
  for (let j = 0; j < N; j++) {
    // 현재 덩치보다 큰 덩치가 있는 경우
    if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) rank++;
  }
  rankArray.push(rank);
}

console.log(rankArray.join(" "));
