// [BOJ] 2+1 세일

// fs 사용하면 런타임에러(EACCES) 발생 -> readline 사용해야 함
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input.shift();

  // 최소 비용 계산
  const minCost = input
    .map(Number)
    .sort((a, b) => b - a) // 오름차순 정렬
    .reduce((acc, cur, idx) => {
      return (idx + 1) % 3 === 0 ? acc : acc + cur;
    }, 0); // idx+1 가 3의 배수인 경우 제외하고 모두 더하기

  console.log(minCost);
});
