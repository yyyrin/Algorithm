function solution(maps) {
  let visited = maps; // 방문표시
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];

  // map의 크기
  const n = maps.length;
  const m = maps[0].length;

  let queue = [[0, 0]];
  visited[0][0] = 0;
  let answer = 1; // 시작 지점부터 카운트

  // BFS (최단경로)
  while (queue.length > 0) {
    let size = queue.length; // 현재 위치에서 모든 좌표 확인

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      // 현재 좌표에서 상하좌우 이동
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        // 이동할 좌표가 map 경계 안에 있고, 이동 가능하다면
        if (nx > -1 && nx < n && ny > -1 && ny < m && visited[nx][ny] === 1) {
          // 이동할 좌표가 목적지인 경우
          if (nx === n - 1 && ny === m - 1) {
            return ++answer;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
    // 이 시점에서 queue에는 다음으로 이동 가능한 좌표가 들어있음
    // 현재 좌표 기준이 아닌 칸의 수 기준!
  }

  // 모든 좌표를 방문한 후에도 목적지에 도착하지 않을 경우
  return -1;
}
