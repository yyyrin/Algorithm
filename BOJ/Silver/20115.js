// [BOJ] 20115. 에너지 드링크

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); //  페인이 가지고 있는 에너지 드링크의 수
// 각 에너지 드링크의 양 -> 오름차순 정렬
let quantity = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

for (let i = 0; i < N - 1; i++) {
  const larger = quantity.pop();
  quantity.push(larger + quantity.pop() / 2);
}

console.log(quantity[0]);
