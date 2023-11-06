// [BOJ] 11725. 트리의 부모 찾기

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift(); // 노드의 개수
let graph = {}; // 트리 정보 저장
let relation = []; // 부모 노드 정보 저장

// 트리 정보 입력하기 (양방향)
input.forEach((line) => {
  const [nodeA, nodeB] = line.split(" ").map(Number);
  if (!graph[nodeA]) graph[nodeA] = [nodeB];
  else graph[nodeA].push(nodeB);
  if (!graph[nodeB]) graph[nodeB] = [nodeA];
  else graph[nodeB].push(nodeA);
});

let visited = new Array(N + 1).fill(false); // 방문여부 체크

function bfs(start) {
  let queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    let node = queue.shift();

    if (graph[node]) {
      for (let child of graph[node]) {
        if (!visited[child]) {
          visited[child] = true;
          relation[child] = node;
          queue.push(child);
        }
      }
    }
  }
}

bfs(1);
relation.shift();
relation.shift();
console.log(relation.join("\n"));

