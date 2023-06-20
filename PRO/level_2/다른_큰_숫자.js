function solution(n) {
  let ans = n + 1;
  let cnt = n
    .toString(2)
    .split("")
    .filter((e) => e === "1").length;
  while (
    ans
      .toString(2)
      .split("")
      .filter((e) => e === "1").length !== cnt
  ) {
    ans += 1;
  }
  return ans;
}
