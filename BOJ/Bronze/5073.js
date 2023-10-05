// [BOJ] 5073. 삼각형과 세 변

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop(); // 마지막 0 0 0 제거

const result = [];
for (let e of input) {
  const numbers = e.split(" ").map(Number);
  numbers.sort((a, b) => a - b);

  // 삼각형 조건 만족하지 못한 경우
  if (numbers[0] + numbers[1] <= numbers[2]) {
    result.push("Invalid");
    continue;
  }

  const set = new Set(numbers); // 중복 제거

  // 세 변의 길이가 모두 같은 경우
  if (set.size === 1) result.push("Equilateral");
  // 두 변의 길이만 같은 경우
  else if (set.size === 2) result.push("Isosceles");
  // 세 변의 길이가 모두 다른 경우
  else result.push("Scalene");
}

console.log(result.join("\n"));
