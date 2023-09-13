function solution(m, n, puddles) {
  let board = Array.from(Array(n), () => Array(m).fill(0));
  board[0][0] = 1; // 시작점 표시

  // 침수지역 표시
  puddles.map((element) => {
    board[element[1] - 1][element[0] - 1] = -1;
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;

      // 침수지역이 아니라면
      if (board[i][j] !== -1) {
        // 위에서 오는 방법
        if (i > 0 && board[i - 1][j] !== -1) board[i][j] += board[i - 1][j];
        // 왼쪽에서 오는 방법
        if (j > 0 && board[i][j - 1] !== -1) board[i][j] += board[i][j - 1];
      }
    }
  }

  return board[n - 1][m - 1] % 1000000007;
}
