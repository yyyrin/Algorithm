// [BOJ] 20920. 영단어 암기는 괴로워

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number); // 단어의 개수, 외울 단어의 길이 기준

