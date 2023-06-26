// sort()에 대한 이해 필요한 문제.

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [a_dff, b_diff] = [Math.abs(a - n), Math.abs(b - n)];
    // 두 값이 같다면 더 큰 수를 우선 배치
    if (a_dff === b_diff) return b - a;
    // 두 값이 다르다면 오름차순 정렬
    return a_dff - b_diff;
  });
}
