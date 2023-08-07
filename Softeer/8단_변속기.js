const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [];

rl.on("line", (line) => {
  line.split(" ").map((e) => array.push(Number(e)));
  rl.close();
}).on("close", () => {
  let check = 0;

  // 다음 값이 증가하는지, 감소하는지 check
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] === array[i] + 1) check += 1;
    else if (array[i + 1] === array[i] - 1) check -= 1;
  }

  check === 7
    ? console.log("ascending")
    : check === -7
    ? console.log("descending")
    : console.log("mixed");

  process.exit();
});
