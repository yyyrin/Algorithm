function solution(n) {
  let arr = new Array(n + 1).fill(0);

  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
  }

  return arr[n];
}
