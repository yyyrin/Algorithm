const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
let board = [];
let code = [];
let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// 표에서 원하는 값 x, y 좌표 찾는 함수
function findIndex(board, value) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board[i][j] === value) {
        return [i, j];
      }
    }
  }
}

rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  let message = lines[0].split("");
  let key = lines[1].split("");

  // 1. 표 만들기
  let arr = [];
  for (let i = 0; i < key.length; i++) {
    if (alphabet.indexOf(key[i]) > -1) {
      arr.push(key[i]);
      alphabet[alphabet.indexOf(key[i])] = "";
    }
    if (arr.length === 5) {
      board.push(arr);
      arr = [];
    }
  }
  let alphabet_idx = 0;
  while (board.length < 5) {
    if (alphabet[alphabet_idx] !== "") {
      arr.push(alphabet[alphabet_idx]);
      alphabet[alphabet_idx] = "";
    }
    alphabet_idx++;
    if (arr.length === 5) {
      board.push(arr);
      arr = [];
    }
  }

  // 2. 두 글자씩 나누기
  for (let i = 0; i < message.length; i++) {
    code.push(message[i]);
    if (code.length % 2 === 1 && message[i] === message[i + 1]) {
      if (message[i] === "X") {
        code.push("Q");
      } else {
        code.push("X");
      }
    }
  }
  if (code.length % 2 !== 0) code.push("X");

  // 3. 암호화하기
  for (let i = 0; i < code.length - 1; i += 2) {
    let [a_x, a_y] = findIndex(board, code[i]);
    let [b_x, b_y] = findIndex(board, code[i + 1]);

    // 3.1. 같은 행에 위치
    if (a_x === b_x) {
      a_y = (a_y + 1) % 5;
      b_y = (b_y + 1) % 5;
    }

    // 3.2. 같은 열에 위치
    else if (a_y === b_y) {
      a_x = (a_x + 1) % 5;
      b_x = (b_x + 1) % 5;
    }

    // 3.3. 같은 행 x, 같은 열 x
    else if (a_x !== b_x && a_y !== b_y) {
      [a_y, b_y] = [b_y, a_y];
    }

    code[i] = board[a_x][a_y];
    code[i + 1] = board[b_x][b_y];
  }

  console.log(code.join(""));
  process.exit();
});
