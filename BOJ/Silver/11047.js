const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = input.shift().split(" ").map(Number); // 동전 종류 개수, 가치의 합
const array = input.map(Number).sort((a, b) => b - a); // 각 동전의 가치

let result = 0; // 필요한 동전의 개수

for (let money of array) {
  if (money > K) continue; // 동전의 가치로 K를 만들 수 없는 경우
  if (K === 0) break; // K를 만든 경우

  result += Math.floor(K / money);
  K -= Math.floor(K / money) * money;
}

console.log(result);
