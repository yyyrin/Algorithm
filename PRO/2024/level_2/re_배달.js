function solution(N, road, K) {
  const obj = {};
  const check = Array(N + 1).fill(Number.MAX_SAFE_INTEGER); // 각 마을까지의 최소 시간 저장

  // 연결되어 있는 모든 경로를 모두 obj에 저장
  road.forEach(([a, b, c]) => {
    obj[a] ? obj[a].push([b, c]) : (obj[a] = [[b, c]]);
    obj[b] ? obj[b].push([a, c]) : (obj[b] = [[a, c]]);
  });

  const queue = [[1, 0]]; // [마을 번호, 현재까지 걸린 시간]
  check[1] = 0; // 시작점은 0으로 설정

  while (queue.length) {
    const [currentVillage, _] = queue.pop();

    obj[currentVillage].forEach((next) => {
      // 모든 경로를 탐색
      if (check[next[0]] > check[currentVillage] + next[1]) {
        // 기존 경로의 값보다 우회하는 값이 더 작으면 해당 값으로 저장
        check[next[0]] = check[currentVillage] + next[1];
        queue.push(next);
      }
    });
  }

  // 경로의 제한인 K보다 시간이 작은 경로의 수를 반환
  return check.filter((time) => time <= K).length;
}
