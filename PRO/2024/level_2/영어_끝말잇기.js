function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (
      words.slice(0, i).includes(words[i]) || // 중복된 단어인 경우
      words[i][0] !== words[i - 1][words[i - 1].length - 1] // 앞 단어의 끝 단어로 시작하는 단어가 아닌 경우
    )
      return [(i % n) + 1, Math.floor(i / n) + 1];
  }

  return [0, 0];
}
