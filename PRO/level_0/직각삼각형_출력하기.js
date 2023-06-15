const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  solution(Number(input[0]));
});

function solution(n) {
  for (let i = 1; i < n + 1; i++) {
    console.log("*".repeat(i));
  }
}
