// 시간초과 + 런타임에러 발생 코드 //

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function solution(n) {
  return fibonacci(n);
}

// 패스한 코드 //
function solution(n) {
  fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 2] + fibonacci[i - 1]) % 1234567;
  }
  return fibonacci[n];
}
