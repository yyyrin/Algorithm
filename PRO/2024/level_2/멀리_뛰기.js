function solution(n) {
  let result = [0, 1, 2];
  
  for (let i = 3; i <= n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1234567;
  }

  return result[n];
}
