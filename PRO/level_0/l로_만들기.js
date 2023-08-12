function solution(myString) {
  return myString
    .split("")
    .map((e) => (e < "l" ? "l" : e))
    .join("");
}
