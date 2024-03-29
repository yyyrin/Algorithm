function solution(a, b) {
  let res = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) res += i;

  return res;
}
