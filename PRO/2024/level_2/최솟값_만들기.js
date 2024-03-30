function solution(A, B) {
  A.sort((a, b) => a - b);
  return B.sort((a, b) => b - a).reduce(
    (acc, cur, idx) => acc + cur * A[idx],
    0
  );
}
