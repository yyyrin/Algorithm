function solution(n, words) {
  let res = [0, 0];

  for (let i = 1; i < words.length; i++) {
    // 1) 앞 단어의 마지막 문자와 현재 단어의 첫 번째 문자가 다른 경우
    // 2) 현재 단어가 이전에 등장한 단어인 경우
    if (
      words[i - 1].slice(-1) !== words[i][0] ||
      words.slice(0, i).indexOf(words[i]) > -1
    ) {
      res[0] = (i + 1) % n === 0 ? n : (i + 1) % n; // 가장 먼저 탈락하는 사람의 번호
      res[1] = Math.ceil((i + 1) / n); // 몇 번째 차례에 탈락하는지
      break;
    }
  }
  return res;
}
