const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line.split(" ").map(Number));
}).on("close", () => {
  const [n, m] = lines[0]; // 격자의 크기, 순서대로 방문해야 하는 칸의 수
  let board = lines.slice(1, n + 1); // 격자
  let goals = lines.slice(n + 1).map((arr) => arr.map((val) => val - 1)); // 방문해야 할 칸의 위치 (x,y)
  let visited = Array.from({ length: n }, () => Array(n).fill(false));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let cnt = 0;

  visited[goals[0][0]][goals[0][1]] = true;

  function isValid(x, y) {
    return (
      x > -1 && x < n && y > -1 && y < n && board[x][y] === 0 && !visited[x][y]
    );
  }

  function backTracking(idx, x, y) {
    if (idx === goals.length - 1) {
      if (goals[idx][0] === x && goals[idx][1] === y) {
        cnt++;
        return;
      }
    } else if (goals[idx][0] === x && goals[idx][1] === y) {
      backTracking(idx + 1, x, y);
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (isValid(nx, ny)) {
        visited[nx][ny] = true;
        backTracking(idx, nx, ny);
        visited[nx][ny] = false;
      }
    }
  }

  backTracking(1, goals[0][0], goals[0][1]);

  console.log(cnt);
  process.exit();
});
