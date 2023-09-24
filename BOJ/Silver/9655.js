// [BOJ] 9655. 돌 게임

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

input % 2 === 0 ? console.log("CY") : console.log("SK");
