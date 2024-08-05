function solution(citations) {
  let result = 0;
  citations.sort((a, b) => b - a); // 오름차순 정렬

  // 인용 횟수가 현재 index 값보다 큰 경우 result 1 증가
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) result++;
  }
  return result;
}
