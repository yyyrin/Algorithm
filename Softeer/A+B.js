const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum;
let arr = [];

// input
rl.on("line", (input) => {
  sum = input.split(" ").reduce((acc, cur) => {
    return acc + parseInt(cur);
  }, 0);
  arr.push(sum);
});

// output
rl.on("close", () => {
  const n = arr[0];
  arr.shift();

  for (let i = 0; i < n; i++) {
    console.log(`Case #${i + 1}: ${arr[i]}`);
  }
  process.exit(); // 프로세스 종료
});
