function solution(babbling) {
  let arr = ["aya", "ye", "woo", "ma"];
  let res = 0;

  for (let i in babbling) {
    let word = babbling[i];

    for (let j in arr) {
      if (babbling[i].includes(arr[j])) {
        word = word.replace(arr[j], "x"); // 할 수 있는 단어를 x로 치환
      }
    }

    word = word.replace(/x/gi, ""); // x를 모두 공백으로 치환
    if (word.length === 0) res += 1; // word가 공백이 되면 ans에 1 추가
  }
  return res;
}
