function solution(numbers) {
  let ans = numbers
    .map((e) => e.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return ans[0] === "0" ? "0" : ans;
}
