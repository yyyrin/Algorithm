// [BOJ] 20922. 겹치는 건 싫어

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number); // 수열의 길이, maximum 개수 기준
let array = input[1].split(" ").map(Number); // 배열

let countObj = {};
let maxLength = 0;
let startIdx = 0;
let endIdx = 0;

while (startIdx <= endIdx && endIdx < N) {
  // array[endIdx]의 개수가 K개인 경우
  while (countObj[array[endIdx]] === K) {
    // startIdx 1씩 증가시키고, array[startIdx] 개수 1씩 빼서
    // "같은 원소가 K개 이하"라는 조건 만족시키기
    countObj[array[startIdx]]--;
    startIdx++;
  }

  // 부분 수열 길이 최댓값으로 갱신하기
  maxLength = Math.max(maxLength, endIdx - startIdx + 1);
  // array[endIdx] 개수 세기
  countObj[array[endIdx]] = (countObj[array[endIdx]] || 0) + 1;
  endIdx++;
}

console.log(maxLength);
