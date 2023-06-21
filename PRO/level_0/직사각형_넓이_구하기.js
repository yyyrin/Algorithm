function solution(dots) {
  // x축, y축 각각 최대, 최소 찾고 그 차를 구해서 두 수를 곱했음
  return (
    Math.abs(
      Math.max(dots[0][0], dots[1][0], dots[2][0], dots[3][0]) -
        Math.min(dots[0][0], dots[1][0], dots[2][0], dots[3][0])
    ) *
    Math.abs(
      Math.max(dots[0][1], dots[1][1], dots[2][1], dots[3][1]) -
        Math.min(dots[0][1], dots[1][1], dots[2][1], dots[3][1])
    )
  );
}
