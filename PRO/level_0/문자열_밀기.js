function solution(A, B) {
  let cnt = 0;
  let compare_A = A;
  for (let i = 0; i < A.length; i++) {
    if (compare_A === B) return cnt;

    // 오른쪽으로 한 칸씩 밀고, 마지막 문자는 맨 앞으로 이동
    compare_A = compare_A.substr(-1) + compare_A.slice(0, A.length - 1);
    cnt += 1;
  }
  return -1;
}
