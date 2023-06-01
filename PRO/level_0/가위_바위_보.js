function solution(rsp) {
  let ans = "";
  let dict = { 2: "0", 0: "5", 5: "2" };
  for (let i = 0; i < rsp.length; i++) {
    ans += dict[rsp[i]];
  }
  return ans;
}
