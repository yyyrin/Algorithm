function solution(s) {
  let word = s.toLowerCase().split("");
  return word.filter((e) => e === "p").length ===
    word.filter((e) => e === "y").length
    ? true
    : false;
}
