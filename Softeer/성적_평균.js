const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdput,
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line.split(" ").map(Number));
}).on("close", () => {
  let grades_arr = lines[1]; // 학생 성적 배열

  // 구간별 평균 구하기
  for (let i = 2; i < lines.length; i++) {
    let [start, end] = lines[i]; // [구간 시작, 구간 끝]

    // 평균 계산
    let avg = (
      grades_arr.slice(start - 1, end).reduce((acc, cur) => acc + cur, 0) /
      (end - start + 1)
    ).toFixed(2);

    console.log(avg);
  }

  process.exit();
});
