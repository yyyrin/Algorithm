function solution(s) {
  return [
    ...new Set(
      s
        .slice(2, s.length - 2)
        .split("},{")
        .sort((a, b) => a.length - b.length)
        .map((e) => e.split(","))
        .flat()
    ),
  ].map(Number);
}
