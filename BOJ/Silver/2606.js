// [BOJ] 2606. 바이러스

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const computerCnt = input.shift(); // 컴퓨터의 수
const pairCnt = input.shift(); // 네트워크 상 직접 연결되어 있는 컴퓨터 쌍의 수
console.log(typeof pairCnt);

// 연결된 컴퓨터 쌍의 수가 없다면 바이러스에 감염된 컴퓨터도 없다.
// pairCnt 타입이 string이므로 `pairCnt === 0`으로 하면 런타임에러 발생
if (pairCnt < 1) console.log(0);
else {
  let graph = {}; // 컴퓨터 연결 정보 저장
  let check = new Array(computerCnt + 1).fill(false); // 방문여부 체크
  let virusCnt = 0; // 바이러스에 감염된 컴퓨터 수

  // 그래프 생성
  input.map((line) => {
    const [nodeA, nodeB] = line.split(" ").map(Number);
    if (!graph[nodeA]) graph[nodeA] = [nodeB];
    else graph[nodeA].push(nodeB);
    if (!graph[nodeB]) graph[nodeB] = [nodeA];
    else graph[nodeB].push(nodeA);
  });

  function dfs(start) {
    check[start] = true; // 방문 표시
    for (let node of graph[start]) {
      if (!check[node]) {
        virusCnt++;
        dfs(node);
      }
    }
  }

  dfs(1); // 1번 컴퓨터에서 시작
  console.log(virusCnt);
}
