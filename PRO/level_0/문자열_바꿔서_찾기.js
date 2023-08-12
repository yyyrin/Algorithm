function solution(myString, pat) {
  return myString
    .split("")
    .map((e) => (e === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}

function solution(myString, pat) {
  return myString
    .replaceAll("A", "C")
    .replaceAll("B", "A")
    .replaceAll("C", "B")
    .includes(pat)
    ? 1
    : 0;
}
