function solution(s) {
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numArr.length; i++) {
    if (s.includes(numArr[i])) s = s.replaceAll(numArr[i], i);
  }

  return Number(s);
}
