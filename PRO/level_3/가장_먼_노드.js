function bfs(start, n, graph) {
  let visited = new Array(n + 1).fill(0); // 각 노드별 거리 저장할 배열
  visited[start] = 1; // 1번 노드 거리 체크
  let queue = [start];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    for (let node of graph[currentNode]) {
      // 아직 방문하지 않은 경우
      if (visited[node] === 0) {
        queue.push(node);
        visited[node] = visited[currentNode] + 1;
      }
    }
  }

  return visited;
}

function solution(n, edge) {
  // 그래프 생성(양방향)
  let graph = {};
  edge.forEach((numbers) => {
    if (!graph[numbers[0]]) graph[numbers[0]] = [numbers[1]];
    else graph[numbers[0]].push(numbers[1]);
    if (!graph[numbers[1]]) graph[numbers[1]] = [numbers[0]];
    else graph[numbers[1]].push(numbers[0]);
  });

  const distance = bfs(1, n, graph); // 1부터 각 노드의 거리 배열
  const maxDistance = Math.max(...distance); // 거리 최댓값
  return distance.filter((e) => e === maxDistance).length;
}
