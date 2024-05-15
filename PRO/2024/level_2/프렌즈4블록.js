function solution(m, n, board) {
  board = board.map((e) => e.split(""));

  while (true) {
    let arr = [];

    // 지울 수 있는 블록 찾기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j + 1] === board[i][j] &&
          board[i + 1][j] === board[i][j] &&
          board[i + 1][j + 1] === board[i][j]
        )
          arr.push([i, j]);
      }
    }

    // 지워지는 블록이 없는 경우 board의 값이 0인 원소 개수 return
    if (!arr.length) return [].concat(...board).filter((e) => !e).length;

    // 지워지는 블록의 좌표값을 0으로 바꾸기
    arr.forEach(([x, y]) => {
      board[x][y] = 0;
      board[x][y + 1] = 0;
      board[x + 1][y] = 0;
      board[x + 1][y + 1] = 0;
    });

    // 블록 지워진 후 위에 있는 블록이 아래로 떨어져 빈 공간 채우기
    for (let i = m - 1; i > 0; i--) {
      for (let j = 0; j < n; j++) {
        // 지워진 블록인 경우
        if (!board[i][j]) {
          for (let k = i - 1; k >= 0; k--) {
            // 같은 열의 윗 행의 값 중 0이 아닌 값이 있다면 값 바꾸기
            if (board[k][j]) {
              board[i][j] = board[k][j];
              board[k][j] = 0;
              break;
            }
          }
        }
      }
    }
  }
}

// ===========================================================
// 기존 코드(Set을 사용하여 중복 제거하려고 했으나 통과하지 못함)
function solution(m, n, board) {
  let answer = 0;
  board = board.map((e) => e.split(""));

  while (true) {
    let subSet = new Set();
    let arr = []; // 4블록 중 상단왼쪽 기준점의 좌표 저장

    // 지울 수 있는 블록 찾기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const now = board[i][j];
        // 같은 모양 블록이 2x2 형태로 4개 붙어있는 경우
        if (
          now &&
          board[i][j + 1] === now &&
          board[i + 1][j] === now &&
          board[i + 1][j + 1] === now
        )
          arr.push([i, j]);
      }
    }

    // 지워지는 블록이 없는 경우
    if (!arr.length) return answer;

    // 4방향 블록 좌표
    const direction = [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ];
    // 지워지는 블록 좌표 값을 0으로 바꾸고, Set에 add하여 중복 제거
    for (let [x, y] of arr) {
      for (let [dx, dy] of direction) {
        board[x + dx][y + dy] = 0;
        subSet.add(x + dx + "" + (y + dy));
      }
    }
    answer += subSet.size;

    // 블록 지워진 후 위에 있는 블록이 아래로 떨어져 빈 공간 채우기
    for (let i = m - 1; i > 0; i--) {
      for (let j = 0; j < n; j++) {
        if (!board[i][j]) {
          for (let k = i - 1; k >= 0; k--) {
            if (board[k][j]) {
              board[i][j] = board[k][j];
              board[k][j] = 0;
              break;
            }
          }
        }
      }
    }
  }
}
