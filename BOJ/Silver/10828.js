// [BOJ] 10828. 스택

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let stack = [];
let result = [];
input.shift();

input.forEach((e) => {
  const command = e.split(" ").map((el) => el.trim());

  if (command[0] === "push") stack.push(Number(command[1]));
  else if (command[0] === "pop") result.push(stack.pop() || -1);
  else if (command[0] === "size") result.push(stack.length);
  else if (command[0] === "empty") result.push(stack[0] ? 0 : 1);
  else if (command[0] === "top") result.push(stack[stack.length - 1] || -1);
});

console.log(result.join("\n"));
