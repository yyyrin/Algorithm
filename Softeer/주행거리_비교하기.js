const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [];

rl.on("line", (line) => {
  array = line.split(" ").map((e) => parseInt(e));
  rl.close();
}).on("close", () => {
  console.log(array[0] === array[1] ? "same" : array[0] > array[1] ? "A" : "B");
  process.exit();
});
