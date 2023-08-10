const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

const wx = [-1, 0, 1, 0];
const wy = [0, 1, 0, -1];
const arrow = ["^", ">", "v", "<"];
let way = 0;

// 시작점 찾기 & 방향 찾기
function checkStart(board, height, width) {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === "#") {
        let visited_cnt = 0;
        for (let k = 0; k < 4; k++) {
          let nx = i + wx[k],
            ny = j + wy[k];
          if (
            nx >= 0 &&
            nx < height &&
            ny >= 0 &&
            ny < width &&
            board[nx][ny] === "#"
          ) {
            visited_cnt++;
            way += k;
          }
        }
        if (visited_cnt === 1) {
          return [i, j, way];
        } else way = 0;
      }
    }
  }
}

rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [height, width] = lines[0].split(" ").map(Number);
  let board = lines.slice(1).map((e) => e.split(""));
  let command = "";

  // 시작점 찾기 & 처름 로봇이 바라보는 방향 찾기
  let [start_x, start_y, start_idx] = checkStart(board, height, width);
  let current_x = start_x;
  let current_y = start_y;
  let idx = start_idx;

  // 경로찾아서 좌표 옮기기 & 지나온 곳 .으로 만들기
  while (true) {
    let moved = false;

    // A 명령어 처리 (앞으로 2칸 전진)
    if (
      current_x + wx[idx] * 2 >= 0 &&
      current_x + wx[idx] * 2 < height &&
      current_y + wy[idx] * 2 >= 0 &&
      current_y + wy[idx] * 2 < width &&
      board[current_x + wx[idx]][current_y + wy[idx]] === "#" &&
      board[current_x + wx[idx] * 2][current_y + wy[idx] * 2] === "#"
    ) {
      command += "A";
      board[current_x][current_y] = ".";
      board[current_x + wx[idx]][current_y + wy[idx]] = ".";
      current_x += wx[idx] * 2;
      current_y += wy[idx] * 2;
      moved = true;
    }

    // 두 칸 전진할 수 없다면 회전이 필요하다는 의미이므로 L 또는 R 명령어 처리
    if (!moved) {
      let found_direction = false;
      for (let i = 0; i <= 3; i++) {
        let next_way_idx = (idx + i) % 4;
        if (
          current_x + wx[next_way_idx] >= 0 &&
          current_x + wx[next_way_idx] < height &&
          current_y + wy[next_way_idx] >= 0 &&
          current_y + wy[next_way_idx] < width &&
          board[current_x + wx[next_way_idx]][current_y + wy[next_way_idx]] ===
            "#"
        ) {
          found_direction = true;
          command += i === 1 ? "R" : i === 3 ? "L" : "RR";
          idx = next_way_idx;
          break;
        }
      }
      if (!found_direction) break; // 모든 경로 방문했다면 루프 종료
    }
  }

  // 출력하기
  console.log(start_x + 1, start_y + 1);
  console.log(arrow[start_idx]);
  console.log(command);
  process.exit();
});
