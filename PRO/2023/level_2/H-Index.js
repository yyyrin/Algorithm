function solution(citations) {
  let ans = 0;
  citations.sort((a, b) => b - a);  // 내림차순 정렬
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) ans += 1;
  }
  return ans;
}
