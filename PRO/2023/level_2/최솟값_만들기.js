// 내 풀이
function solution(A, B) {
  let ans = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    ans += A[i] * B[i];
  }
  return ans;
}

// 다른 사람 풀이
// function solution(A, B) {
//   A.sort((a, b) => a - b);
//   B.sort((a, b) => b - a);

//   return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
// }

