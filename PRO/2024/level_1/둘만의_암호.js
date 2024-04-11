function solution(s, skip, index) {
  // skip에 포함된 알파벳 없애기
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter((e) => !skip.includes(e));

  // 만들어진 배열에서 index만큼 더한 값 구하기
  return s
    .split("")
    .map((e) => alphabet[(alphabet.indexOf(e) + index) % alphabet.length])
    .join("");
}
