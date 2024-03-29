function solution(triangle) {
  let dp = triangle.slice();

  for (let i = triangle.length - 2; i > -1; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}
