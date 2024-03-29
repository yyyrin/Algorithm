// 내 풀이
function solution(a, b) {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += a[i] * b[i];
  }
  return ans;
}

// 다른 사람 풀이
// function solution(a, b) {
//   var answer = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
//   return answer;
// }
