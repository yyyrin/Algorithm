function solution(m, n, puddles) {
  let dp = Array.from(Array(n), () => Array(m).fill(0));
  dp[0][0] = 1; // 시작점 초기화

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue; // 시작점인 경우

      // 현재 경로가 물에 잠긴 지역인 경우, 0으로 초기화
      if (puddles.some(([x, y]) => x === j + 1 && y === i + 1)) {
        dp[i][j] = 0;
      } else {
        // 해당 경로에 필요한 걸음 계산
        dp[i][j] =
          ((i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0)) %
          1000000007;
      }
    }
  }

  return dp[n - 1][m - 1];
}
