function solution(n) {
  let ans = 0;
  number = n.toString();
  for (i = 0; i < number.length; i++) {
    ans += Number(number[i]);
  }
  return ans;
}
