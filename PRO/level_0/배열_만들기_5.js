function solution(intStrs, k, s, l) {
  return intStrs.map((e) => Number(e.slice(s, s + l))).filter((e) => e > k);
}
