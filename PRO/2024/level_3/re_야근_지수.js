function solution(n, works) {
  // 남은 작업량이 없는 경우
  if (works.reduce((acc, cur) => acc + cur) <= n) return 0;

  // 내림차순 정렬
  works.sort((a, b) => b - a);

  // 남은 시간이 0이 될 때까지
  while (n) {
    let maxWork = works[0]; // 기준 작업량
    for (let i = 0; i < works.length; i++) {
      if (works[i] >= maxWork) {
        works[i] -= 1;
        n -= 1;
      }
      // 남은 시간이 0이라면 break
      if (!n) break;
    }
  }

  // 야근 피로도 계산
  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
