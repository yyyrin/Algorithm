// 배열 이용
function solution(N, stages) {
  let result = [];
  let totalPlayer = stages.length;

  for (let i = 1; i <= N; i++) {
    const notClear = stages.filter((e) => e === i).length;
    result.push([i, notClear / totalPlayer]);
    totalPlayer -= notClear;
  }

  return result.sort((a, b) => b[1] - a[1]).map((e) => e[0]);
}

// 객체 이용
function solution(N, stages) {
  const obj = {};
  let totalPlayer = stages.length;

  for (let i = 1; i <= N; i++) {
    const notClear = stages.filter((e) => e === i).length;
    obj[i] = notClear / totalPlayer;
    totalPlayer -= notClear;
  }

  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map((e) => Number(e[0]));
}
