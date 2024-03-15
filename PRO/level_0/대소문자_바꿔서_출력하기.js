const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  const result = input[0]
    .split("")
    .map((e) => {
      return e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase();
    })
    .join("");
    
  console.log(result);
});
