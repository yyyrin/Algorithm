function solution(d, budget) {
  let res = 0; // 지원가능한 부서 개수
  let m_budget = budget;
  d.sort((a, b) => a - b); // 오름차순으로 정렬
  for (let i = 0; i < d.length; i++) {
    if (m_budget - d[i] < 0) break;
    m_budget -= d[i];
    res += 1;
  }
  return res;
}
