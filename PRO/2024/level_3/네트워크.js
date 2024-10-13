function solution(n, computers) {
  let cnt = 0; // 네트워크 개수
  const networkObj = {}; // 컴퓨터별 연결된 컴퓨터 저장
  let visited = new Array(n).fill(false); // 방문한 컴퓨터 표시

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 동일한 컴퓨터가 아니면서 연결된 컴퓨터인 경우
      if (computers[i][j] && i !== j) {
        networkObj[i] ? networkObj[i].push(j) : (networkObj[i] = [j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 방문하지 않은 컴퓨터인 경우
      cnt++;
      let stack = [i]; // 연결된 컴퓨터를 저장하는 스택
      while (stack.length) {
        const idx = stack.pop();
        visited[idx] = true;
        // 현재 컴퓨터와 연결된 컴퓨터가 없는 경우 continue
        if (!networkObj[idx]) continue;
        // 현재 컴퓨터와 연결된 컴퓨터 중 방문하지 않은 컴퓨터를 stack에 push
        for (let node of networkObj[idx]) {
          if (!visited[node]) stack.push(node);
        }
      }
    }
  }

  return cnt;
}
