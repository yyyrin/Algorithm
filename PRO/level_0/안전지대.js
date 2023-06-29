function solution(board) {
  let res = 0; // 안전지대 칸 수

  // 지뢰 위, 아래, 좌, 우, 대각선 칸 확인
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // 지뢰가 있는 지역이라면
      if (board[i][j] === 1) {
        // 위험지역 확인
        for (let k = 0; k < 8; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];

          // nx, ny의 위치가 지대의 안쪽이고
          // 이미 확인한 위험지역이나 지뢰의 위치가 아니라면 값을 2로 바꾸기
          // (1로 바꾸면 위험지역을 중복으로 분류함)
          if (
            nx > -1 &&
            nx < board.length &&
            ny > -1 &&
            ny < board.length &&
            board[nx][ny] === 0
          )
            board[nx][ny] = 2;
        }
      }
    }
  }

  // 안전지대 개수 세기
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) res += 1;
    }
  }
  return res;
}
