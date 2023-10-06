// [BOJ] 8979. 올림픽

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number); // 국가의 수, 등수를 알고 싶은 국가

// 등수 매기기
const country = input
  .map((e) => e.split(" ").map(Number))
  .sort((a, b) => {
    // 금메달 수가 같은 경우
    if (a[1] === b[1]) {
      // 은메달 수가 같은 경우
      if (a[2] === b[2]) {
        return b[3] - a[3]; // 동메달 수가 더 많은 나라 순으로 내림차순 정렬
      } else {
        return b[2] - a[2]; // 은메달 수가 더 많은 나라 순으로 내림차순 정렬
      }
    } else {
      return b[1] - a[1]; // 금메달 수 더 많은 나라 순으로 내림차순 정렬
    }
  });

// 등수 알고 싶은 국가의 index 찾기
const idx = country.findIndex((e) => e[0] === K);

// 동점 국가 검사
for (let i = 0; i < N; i++) {
  if (
    country[i][1] === country[idx][1] &&
    country[i][2] === country[idx][2] &&
    country[i][3] === country[idx][3]
  ) {
    console.log(i + 1);
    break;
  }
}
