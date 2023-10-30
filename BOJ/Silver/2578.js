// [BOJ] 2578. 빙고

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let board = [];
let host = [];
input.slice(0, 5).map((line) => board.push(line.split(" ").map(Number)));
input.slice(5, 10).map((line) => host.push(...line.split(" ").map(Number)));
let bingoCnt = 0; // 빙고 개수

for (let i = 0; i < host.length; i++) {
  // 빙고 게임으로 숫자 지우기
  deleteNumber(host[i]);
  // 빙고체크
  checkBingo();
  // 빙고 개수 3개 이상이면 출력 및 탈출
  if (bingoCnt >= 3) {
    console.log(i + 1);
    break;
  }
  bingoCnt = 0; // 빙고 개수 초기화
}

// 호스트가 부르는 숫자 지우기
function deleteNumber(number) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board[i][j] === number) {
        board[i][j] = 0;
        return board;
      }
    }
  }
}

// 빙고 확인
function checkBingo() {
  // 가로줄에서 빙고 개수 체크
  for (let row = 0; row < 5; row++) {
    if (board[row].reduce((acc, cur) => acc + cur) === 0) bingoCnt++;
  }

  // 세로줄에서 빙고 개수 체크
  for (let column = 0; column < 5; column++) {
    let columnSum = 0;
    for (let row = 0; row < 5; row++) {
      columnSum += board[row][column];
    }
    if (columnSum === 0) bingoCnt++;
  }

  // 대각선 빙고 여부 체크
  let diagonalRight = 0;
  let diagonalLeft = 0;
  for (let i = 0; i < 5; i++) {
    diagonalRight += board[i][i];
    diagonalLeft += board[i][4 - i];
  }
  if (diagonalRight === 0) bingoCnt++;
  if (diagonalLeft === 0) bingoCnt++;
}
