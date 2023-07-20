function solution(k, m, score) {
  let ans = 0; // 최대 이익
  score.sort((a, b) => b - a); // 오름차순으로 정렬

  for (let i = 0; i < score.length; i += m) {
    // 상자 채워지는 경우
    if (i + m - 1 < score.length) {
      ans += score[i + m - 1] * m;
    } else break; // 상자 채워지지 않는 경우
  }

  return ans;
}
