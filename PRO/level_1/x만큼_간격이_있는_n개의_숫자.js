function solution(x, n) {
  let ans = [];
  let num = x;
  while (ans.length < n) {
    ans.push(num);
    num += x;
  }
  return ans;
}
