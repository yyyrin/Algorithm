function solution(a, b, n) {
  let res = 0;

  while (n >= a) {
    let plus = Math.floor(n / a) * b;
    res += plus;
    n = plus + (n % a);
  }
  
  return res;
}
