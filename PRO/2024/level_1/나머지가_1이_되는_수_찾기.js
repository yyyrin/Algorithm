function solution(n) {
  let res = 2;

  while ((n - 1) % res) res++;

  return res;
}
