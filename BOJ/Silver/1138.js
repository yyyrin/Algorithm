// [BOJ] 1138. 한 줄로 서기

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0]; // 사람의 수
let leftCnt = input[1].split(" ").map(Number);
let array = new Array(N).fill(0);
