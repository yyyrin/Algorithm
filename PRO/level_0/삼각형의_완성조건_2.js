function solution(sides) {
  // 내 풀이
  sides = sides.sort((a, b) => a - b);
  return 2 * sides[0] - 1;

  // 다른 사람 풀이
  // return Math.min(...sides) * 2 - 1;
}
