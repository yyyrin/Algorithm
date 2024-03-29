function solution(n, a, b) {
  let cnt = 0;

  while (a !== b) {
    cnt += 1;
    a = a % 2 === 0 ? a / 2 : (a + 1) / 2;
    b = b % 2 === 0 ? b / 2 : (b + 1) / 2;
  }

  return cnt;
}
