function solution(n) {
  // // 삼각형 모양으로 이차원 배열 초기화
  const triangle = new Array();
  for (let i = 1; i <= n; i++) triangle.push(Array(i).fill(0));

  const lastNum = (n * (n + 1)) / 2; // 마지막 값 계산
  let count = n; // 각 회전별 처리해야 할 개수
  let nowDirection = 0; // 현재 방향
  let nowNum = 1;
  let round = 0; // 회전 횟수

  while (nowNum <= lastNum) {
    // 1) 상 -> 하
    if (nowDirection === 0) {
      for (let i = 2 * round; i < n - round; i++) {
        triangle[i][round] = nowNum;
        nowNum++;
      }
      count--;
      nowDirection++;
      continue;
    }

    // 2) 왼 -> 오
    if (nowDirection === 1) {
      for (
        let i = 1 + round;
        i <= triangle[n - 1 - round].length - 1 - round;
        i++
      ) {
        triangle[n - 1 - round][i] = nowNum;
        nowNum++;
      }
      count--;
      nowDirection++;
      continue;
    }

    // 3) 하 -> 상
    if (nowDirection === 2) {
      for (let i = n - 2 - round; i >= 1 + 2 * round; i--) {
        triangle[i][triangle[i].length - 1 - round] = nowNum;
        nowNum++;
      }
      count--;
      nowDirection = 0;
      round++; // 회전 횟수 증가
    }
  }

  return triangle.flat();
}
