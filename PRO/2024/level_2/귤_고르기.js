function solution(k, tangerine) {
  const cntObj = {};
  // 크기별 개수 저장
  tangerine.forEach((e) => {
    cntObj[e] = (cntObj[e] || 0) + 1;
  });

  const cntArr = Object.values(cntObj).sort((a, b) => b - a);

  let sumWeight = 0; // 누적 개수 합
  for (let i = 0; i < cntArr.length; i++) {
    sumWeight += cntArr[i];
    if (sumWeight >= k) return i + 1;
  }
}
