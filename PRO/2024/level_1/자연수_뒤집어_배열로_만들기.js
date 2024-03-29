function solution(n) {
  return [...(n + "")].reverse().map((e) => Number(e));
}
