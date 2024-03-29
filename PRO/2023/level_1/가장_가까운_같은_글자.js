function solution(s) {
  let res = [-1];
  for (let i = 1; i < s.length; i++) {
    if (s.slice(0, i).indexOf(s[i]) > -1)
      res.push(i - s.slice(0, i).lastIndexOf(s[i]));
    else res.push(-1);
  }
  return res;
}

// 효율성이 더 좋은 코드
function solution(s) {
  let res = [];
  s.split("").map((e, i) => {
    if (s.slice(0, i).indexOf(e) > -1)
      res.push(i - s.slice(0, i).lastIndexOf(e));
    else res.push(-1);
  });
  return res;
}
