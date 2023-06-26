function solution(a, b) {
  // 최대공약수 찾기
  let max_divisor = 0;
  for (let i = Math.min(a, b); i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      max_divisor = i;
      break;
    }
  }

  // 최대공약수가 있다면 b를 최대공약수로 나누기
  let irreducible_b = max_divisor ? parseInt(b / max_divisor) : b;
  while (irreducible_b % 2 === 0) irreducible_b /= 2;
  while (irreducible_b % 5 === 0) irreducible_b /= 5;
  return irreducible_b === 1 ? 1 : 2;

  // 기존 코드 -> 2개 틀림
  // let x = irreducible_b;
  // for (let i = 2; i <= irreducible_b; i++) {
  //   while (x % i === 0) {
  //     if (i !== 2 && i !== 5) return 2;
  //     x = x / i;
  //   }
  //   if (x === 1) {
  //     return 1;
  //   }
  // }
}
