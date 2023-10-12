// [BOJ] 1244. 스위치 켜고 끄기

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift(); // 스위치 개수
let switches = input.shift().split(" ").map(Number); // 각 스위치의 상태
const student = input.shift(); // 학생의 수

for (let i = 0; i < student; i++) {
  const [gender, num] = input[i].split(" ").map(Number); // 성별, 받은 수

  // 남학생인 경우
  if (gender === 1) {
    // 받은 수의 배수의 스위치 상태 바꾸기
    for (let j = num; j <= N; j += num) {
      switches[j - 1] = (switches[j - 1] + 1) % 2;
    }
  }
  // 여학생인 경우
  else {
    let start = num - 1;
    let end = num - 1;
    // 받은 수 기준으로 좌우가 대칭인 경우 시작점과 끝점 찾기
    while (start > -1 && end < N) {
      if (switches[start - 1] !== switches[end + 1]) break;
      start--;
      end++;
    }

    // 시작점부터 끝점까지 스위치 상태 바꾸기
    for (let j = start; j <= end; j++) {
      switches[j] = (switches[j] + 1) % 2;
    }
  }
}

// 한 줄에 20개씩 출력하기
if (N > 20) {
  for (let i = 0; i < N; i += 20) {
    console.log(switches.slice(i, i + 20).join(" "));
  }
} else console.log(switches.join(" "));
