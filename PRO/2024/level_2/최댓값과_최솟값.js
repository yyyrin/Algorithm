function solution(s) {
  const arr = s.split(" ").map((e) => Number(e));
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
