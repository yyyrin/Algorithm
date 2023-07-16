// 규칙 : n이 1이하가 될 때까지 n을 2로 나누어 가고, 나머지가 1일 때 count
function solution(n) {
  let res = 1; // 처음 위치 0에서 1칸을 점프
  while (n > 1) {
    n % 2 !== 0 ? (res += 1) : null;
    n = Math.floor(n / 2);
  }
  return res;
}
