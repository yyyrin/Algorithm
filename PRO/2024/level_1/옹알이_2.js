function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"];
  let result = 0;

  for (let word of babbling) {
    for (const x of arr) {
      // 같은 발음이 연속된 경우
      if (word.includes(x.repeat(2))) break;

      word = word.split(x).join(" ");
    }
    if (word.split(" ").join("").length < 1) result++;
  }

  return result;
}
