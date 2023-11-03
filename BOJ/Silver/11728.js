// [BOJ] 11728. 배열 합치기

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number); // A의 크기, B의 크기
let A = input[1].split(" ").map(Number); // 배열 A
let B = input[2].split(" ").map(Number); // 배열 B

let result = new Array(N + M);
let i = 0; // A 배열의 인덱스
let j = 0; // B 배열의 인덱스
let k = 0; // 결과 배열의 인덱스

while (i < N && j < M) {
  if (A[i] <= B[j]) {
    result[k] = A[i];
    i++;
  } else {
    result[k] = B[j];
    j++;
  }
  k++;
}

// 남은 요소들을 결과 배열에 복사
while (i < N) {
  result[k] = A[i];
  i++;
  k++;
}

while (j < M) {
  result[k] = B[j];
  j++;
  k++;
}

console.log(result.join(" "));
