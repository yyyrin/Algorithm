function solution(s) {
  return s.split("").map((e, i) => {
    const index = s.slice(0, i).lastIndexOf(e);
    return index === -1 ? -1 : i - index;
  });
}
