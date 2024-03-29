function solution(brown, yellow) {
  let garo, sero;

  // 규칙1 : 가로*세로 = brown+yellow
  // 규칙2 : (가로-2)*(세로-2) = yellow
  for (let i = 3; i < 3000000; i++) {
    garo = parseInt((brown + yellow) / i);
    if ((brown + yellow) % i === 0 && (garo - 2) * (i - 2) === yellow) {
      sero = i;
      break;
    }
  }
  return [garo, sero];
}
