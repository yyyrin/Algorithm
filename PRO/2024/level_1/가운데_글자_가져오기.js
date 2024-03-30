function solution(s) {
  const midIdx = (s.length - 1) / 2;
  return s.length % 2 ? s[midIdx] : s.slice(midIdx, midIdx + 2);
}
