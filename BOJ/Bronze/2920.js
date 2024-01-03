// [BOJ] 2920. 음계

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

if (
  input[0] === "1" &&
  input[1] === "2" &&
  input[2] === "3" &&
  input[3] === "4" &&
  input[4] === "5" &&
  input[5] === "6" &&
  input[6] === "7" &&
  input[7] === "8"
)
  console.log("ascending");
else if (
  input[0] === "8" &&
  input[1] === "7" &&
  input[2] === "6" &&
  input[3] === "5" &&
  input[4] === "4" &&
  input[5] === "3" &&
  input[6] === "2" &&
  input[7] === "1"
)
  console.log("descending");
else console.log("mixed");
