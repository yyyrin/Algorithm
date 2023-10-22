// [BOJ] 23971. ZOAC 4

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const [H, W, N, M] = input.split(" ").map(Number); // 행, 열, 비워야 하는 세로, 가로 칸 수
console.log(Math.ceil(H / (N + 1)) * Math.ceil(W / (M + 1)));
