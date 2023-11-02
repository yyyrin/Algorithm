// [BOJ] 1343. 폴리오미노

const fs = require("fs");
let board = fs.readFileSync("/dev/stdin").toString().trim();

// 정규표현식 사용
board = board.replace(/XXXX/g, "AAAA");
board = board.replace(/XX/g, "BB");

// 변경 후 X가 남아있는 경우 -1 출력
if (board.split("").includes("X")) console.log(-1);
else console.log(board);

// 정규표현식 사용하지 않고 split(".")으로 나눈 후
// element의 길이를 기준으로 AAAA 혹은 BB을 repeat하려고 했으나
// join(".")을 했을 때 기존 값과 동일하게 .가 표시되지 않는 문제 발생
// 따라서 정규표현식 사용
