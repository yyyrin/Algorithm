function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => acc + (signs[idx] ? cur : cur * -1),
    0
  );
}
