function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
        .join("")
    )
    .join(" ");
}
