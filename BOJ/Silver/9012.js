// [BOJ] 9012. 괄호

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = input.shift();
let result = [];

function checkVPS(line) {
  let stack = [];

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "(") {
      stack.push("(");
    } else if (line[i] === ")") {
      if (stack.length > 0) stack.pop();
      else {
        result.push("NO");
        return;
      }
    }
  }

  if (stack.length > 0) {
    result.push("NO");
    return;
  }

  result.push("YES");
  return;
}

for (let i = 0; i < T; i++) {
  let now = input[i].split("");
  checkVPS(now);
}

console.log(result.join("\n"));
