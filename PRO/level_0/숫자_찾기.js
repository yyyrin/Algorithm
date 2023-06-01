function solution(num, k) {
  let res = num.toString().indexOf(k);
  return res > -1 ? res + 1 : res;
}
