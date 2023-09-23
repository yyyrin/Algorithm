// [BOJ] 28278. 스택 2

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let stack = [];
let result = [];

const len = input.shift();

for (let i = 0; i < len; i++) {
  let array = input[i].split(" ").map(Number);

  switch (array[0]) {
    case 2:
      result.push(stack.pop() || -1);
      break;

    case 3:
      result.push(stack.length);
      break;

    case 4:
      result.push(stack.length > 0 ? 0 : 1);
      break;

    case 5:
      result.push(stack[stack.length - 1] || -1);
      break;

    default:
      stack.push(array[1]);
      break;
  }
}

console.log(result.join("\n"));
