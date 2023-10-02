// [BOJ] 11501. 주식

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.shift(); // 테스트케이스 수

for (let i = 0; i < T * 2; i += 2) {
  const N = Number(input[i]); // 날 수
  const stock = input[i + 1].split(" ").map(Number); // 날 별 주가
  let profit = 0; // 이익
  let maxStock = 0; // 현재까지 주가 중 최댓값

  // 뒤에서부터 최댓값 갱신
  for (let i = N - 1; i > -1; i--) {
    if (stock[i] > maxStock) maxStock = stock[i];
    // 최댓값보다 작다면 이익에 최댓값과 차이만큼 더하기
    else if (stock[i] < maxStock) profit += maxStock - stock[i];
  }

  console.log(profit);
}
