function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;

  const result = [];
  let check = Array.from(Array(row), () => Array(row).fill(false)); // 방문표시

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // DFS 사용
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] === "X" || check[i][j]) continue;
      // 방문하지 않은 무인도만 고려

      let stack = [[i, j]];
      let sum = 0; // 해당 무인도에서 최대로 머물 수 있는 일자
      check[i][j] = true;

      while (stack.length) {
        const [nowX, nowY] = stack.pop();
        sum += Number(maps[nowX][nowY]);

        for (let [dx, dy] of direction) {
          const [nextX, nextY] = [nowX + dx, nowY + dy];
          // 다음 좌표가 범위 내에 위치하고 방문하지 않은 무인도에 해당하는 경우, stack에 push
          if (
            nextX >= 0 &&
            nextX < row &&
            nextY >= 0 &&
            nextY < col &&
            !check[nextX][nextY] &&
            maps[nextX][nextY] !== "X"
          ) {
            stack.push([nextX, nextY]);
            check[nextX][nextY] = true;
          }
        }
      }

      // 계산한 일 수를 push
      result.push(sum);
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
