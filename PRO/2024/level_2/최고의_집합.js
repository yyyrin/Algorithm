function solution(n, s) {
  // 각 원소의 합이 원소의 개수보다 작다면 최고의 집합이 존재하지 않으므로 [-1] 반환
  if (s < n) return [-1];

  // 각 원소의 곱이 최대가 되기 위해서는 각 원소의 차가 거의 없도록 균등해야 함
  const result = new Array(n).fill(Math.floor(s / n));
  // 각 원소의 합이 s가 되는지 체크
  let diff = s - result.reduce((acc, cur) => acc + cur);

  // 각 원소의 합이 s가 될 때까지 result의 마지막 인덱스부터 차례대로 1씩 더하기
  for (let i = n - 1; i >= 0; i--) {
    if (diff === 0) break;
    diff--;
    result[i]++;
  }

  return result;
}
