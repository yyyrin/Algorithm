// 런타임 에러 발생
function solution(n, left, right) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let sub = new Array(n).fill(i);
    let num = i + 1;
    let idx = i;
    while (sub[n - 1] !== n) {
      sub[idx] = num;
      ++num;
      ++idx;
    }
    arr.push(...sub);
  }
  return arr.slice(left, right + 1);
}

// 패스한 코드
function solution(n, left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    arr.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return arr;
}
