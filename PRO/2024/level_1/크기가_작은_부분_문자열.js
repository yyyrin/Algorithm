function solution(t, p) {
  let result = 0;
  const pLengh = p.length;

  for (let i = 0; i <= t.length - pLengh; i++) {
    if (+t.slice(i, i + pLengh) <= +p) result++;
  }

  return result;
}
