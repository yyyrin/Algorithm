function solution(brown, yellow) {
  let num1 = 3;
  let num2;

  while (true) {
    const tmp = brown / 2 + 2 - num1;
    if (Number.isInteger(tmp) && num1 * tmp === brown + yellow) {
      num2 = tmp;
      break;
    }
    
    num1++;
  }

  return [num1, num2].sort((a, b) => b - a);
}
