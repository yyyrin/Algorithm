function solution(s) {
  let ans = "";
  s.split("")
    .sort()
    .map((e) => {
      if (s.indexOf(e) === s.lastIndexOf(e)) ans += e;
    });
  return ans;
}
