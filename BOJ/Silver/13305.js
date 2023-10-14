// [BOJ] 13305. 주유소

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0]; // 도시의 개수
const roadLength = input[1].split(" ").map((e) => BigInt(e)); // 도로의 길이
const price = input[2].split(" ").map((e) => BigInt(e)); // 주유소의 리터당 가격

let minPrice = price[0]; // 최소 리터당 가격
let totalPrice = 0n; // 최소 비용

for (let i = 0; i < N - 1; i++) {
  totalPrice += minPrice * roadLength[i]; // 현재 도시로 오는 최소 비용 구하기
  if (price[i + 1] < minPrice) minPrice = price[i + 1]; // 최소 리터당 가격 갱신
}

console.log(totalPrice);
