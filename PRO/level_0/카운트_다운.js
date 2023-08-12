function solution(start, end) {
  let res = [];
  for (let i = start; i >= end; i--) {
    res.push(i);
  }
  return res;
}
