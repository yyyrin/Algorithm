// [BOJ] 10431. 줄세우기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const P = input.shift(); // 테스트 케이스 수

for (let i = 0; i < P; i++) {
  const line = input[i].split(" ").map(Number);
  const T = line.shift(); // 테스트 케이스 번호
  let count = 0; // 학생들이 뒤로 물러난 걸음 수의 총합

  // 현재 학생의 앞에 선 학생 중에서 현재 학생의 키보다 큰 값 개수 세기
  for (let j = 1; j < 20; j++) {
    count += line.slice(0, j).filter((e) => e > line[j]).length;
  }

  console.log(`${T} ${count}`);
}
