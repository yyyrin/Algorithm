// [BOJ] 25757. 임스와 함께하는 미니게임

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, gameType] = input.shift().split(" "); // 신청 횟수, 게임 종류
const people = new Set(input).size; // 중복 제거 후 사람 수

if (gameType === "Y") console.log(people);
else if (gameType === "F") console.log(Math.floor(people / 2));
else console.log(Math.floor(people / 3));
