// [BOJ] 1205. 등수 구하기

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 리스트에 있는 점수 개수 / 새로운 점수 / 리스트에 올라갈 수 있는 점수 개수
const [N, newScore, P] = input[0].split(" ").map(Number);

// 현재 랭킹 리스트가 비어있지 않은 경우
if (N) {
  let arr = input[1].split(" ").map(Number); // 현재 랭킹 리스트에 있는 점수

  // 랭킹 리스트가 꽉 차있고, 랭킹 리스트의 마지막 값보다 새로운 점수가 크지 않은 경우
  if (N === P && arr[N - 1] >= newScore) console.log(-1);
  else {
    let res = N + 1; // 랭킹 리스트의 마지막 등수로 기본 설정
    for (let i = 0; i < N; i++) {
      // 새로운 점수가 랭킹 리스트에 있는 값보다 큰 경우
      if (arr[i] <= newScore) {
        res = i + 1;
        break;
      }
    }
    console.log(res);
  }
}
// 현재 랭킹 리스트가 비어 있는 경우
else console.log(1);
