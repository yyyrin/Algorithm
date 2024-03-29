function solution(n) {
  let res = 0;
  let index = 1;
  while (index <= n / 2) {
    if (n % index === 0) res += index;
    index++;
  }
  return res + n;
}