// DP를 활용한 풀이
function solution(land) {
  return Math.max(
    ...land.reduce(
      (acc, cur) => {
        return [
          cur[0] + Math.max(acc[1], acc[2], acc[3]),
          cur[1] + Math.max(acc[0], acc[2], acc[3]),
          cur[2] + Math.max(acc[0], acc[1], acc[3]),
          cur[3] + Math.max(acc[0], acc[1], acc[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}
