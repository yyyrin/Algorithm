function solution(n) {
  let arr = n.toString().split("");
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans += Number(arr[i]);
  }
  return ans;
}
