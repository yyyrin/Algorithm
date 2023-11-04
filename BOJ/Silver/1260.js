// [BOJ] 1260. DFS와 BFS

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 정점의 개수 | 간선의 개수 | 탐색을 시작할 정점의 번호
const [N, M, V] = input.shift().split(" ").map(Number);
let graph = {};
// 그래프 만들기
input.forEach((line) => {
  const [nodeA, nodeB] = line.split(" ").map(Number);
  !graph[nodeA] ? (graph[nodeA] = [nodeB]) : graph[nodeA].push(nodeB);
  !graph[nodeB] ? (graph[nodeB] = [nodeA]) : graph[nodeB].push(nodeA);
});

// 오름차순 정렬
for (let i = 1; i <= N; i++) {
  if (graph[i]) graph[i].sort((a, b) => a - b);
}

// DFS
let dfsVisited = new Array(N + 1).fill(false); // dfs 방문표시
let dfsResult = []; // dfs 결과 저장 배열

function dfs(start) {
  dfsVisited[start] = true;
  dfsResult.push(start);
  // 연결된 정점이 있는지 체크 <- 체크 안 하면 런타임에러(TypeError) 발생
  if (graph[start]) {
    for (let node of graph[start]) {
      if (!dfsVisited[node]) {
        dfs(node);
      }
    }
  }
}

// BFS
let bfsVisited = new Array(N + 1).fill(false); // bfs 방문 표시
let bfsResult = []; // bfs 결과 저장 배열

function bfs(start) {
  let queue = [start];
  bfsVisited[start] = true;
  bfsResult.push(start);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    // 연결된 정점이 있는지 체크
    if (graph[currentNode]) {
      for (let neighbor of graph[currentNode]) {
        if (!bfsVisited[neighbor]) {
          bfsVisited[neighbor] = true;
          bfsResult.push(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

dfs(V);
bfs(V);
console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
