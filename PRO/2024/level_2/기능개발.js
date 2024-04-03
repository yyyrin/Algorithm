function solution(progresses, speeds) {
  // 각 작업의 진도별 완료까지 걸리는 일수
  const days = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));
  let maxDay = days[0]; // 현재까지 일 수 최댓값
  let cnt = 1; // 배포되는 기능 수
  let result = [];

  for (let i = 1; i < days.length; i++) {
    if (maxDay < days[i]) {
      result.push(cnt);
      cnt = 1;
      maxDay = days[i];
    } else cnt++;
  }

  result.push(cnt);
  return result;
}
