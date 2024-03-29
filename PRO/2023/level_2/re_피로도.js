function solution(k, dungeons) {
  // 각각의 경우에 클리어할 수 있는 던전의 개수
  let answer = [];
  // 던전 방문 여부 체크
  let visited = new Array(dungeons.length).fill(0);

  function dfs(count, k) {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      // 현재 던전에 진입할 수 있고, 아직 방문하지 않았다면
      if (k >= current[0] && !visited[i]) {
        visited[i] = 1; // 현재 던전 방문
        dfs(count + 1, k - current[1]); // 다음 던전 탐색
        visited[i] = 0;
      }
    }
  }

  // 0개의 던전 클리어한 상태, 현재 피로도(k)로 dfs 호출
  dfs(0, k);

  return Math.max(...answer);
}
