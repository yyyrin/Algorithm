function solution(left, right) {
  let result = 0;

  for (let num = left; num <= right; num++) {
    Number.isInteger(Math.sqrt(num)) ? (result -= num) : (result += num);
  }

  return result;
}
