function solution(a, b) {
  let val1 = Number(a + (b + ""));
  let val2 = 2 * a * b;
  return val1 >= val2 ? val1 : val2;
}
