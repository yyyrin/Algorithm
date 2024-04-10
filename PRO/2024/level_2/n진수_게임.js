function solution(n, t, m, p) {
  let result = [];
  let nowNum = 0;

  while (result.length < t * m) {
    result.push(...nowNum.toString(n).split(""));
    nowNum++;
  }
  
  return result
    .filter((_, idx) => idx % m === p - 1)
    .slice(0, t)
    .join("")
    .toUpperCase();
}
