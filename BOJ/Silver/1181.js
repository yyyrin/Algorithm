// [BOJ] 1181. 단어 정렬

const fs = require("fs");
let [N, ...words] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

words = Array.from(new Set(words)); // 중복 제거

words
  .sort() // 사전 순 정렬
  .sort((a, b) => a.length - b.length) // 길이 짧은 순 정렬
  .forEach((word) => console.log(word));
