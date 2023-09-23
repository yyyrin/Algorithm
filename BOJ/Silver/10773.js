// [BOJ] 10773. 제로

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let stack = [];
const K = input.shift();

for (let i = 0; i < K; i++) {
  const now = Number(input[i]);

  if (now !== 0) stack.push(now);
  else stack.pop();
}

const result = stack.length > 0 ? stack.reduce((acc, cur) => acc + cur, 0) : 0;
console.log(result);
