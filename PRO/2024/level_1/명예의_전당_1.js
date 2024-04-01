function solution(k, score) {
  let arr = []; // 명예의 전당

  return score.map((e, i) => {
    // 명예의 전당이 비어있는 경우
    if (i < k) {
      arr.push(e);
      return Math.min(...arr);
    }

    let minScore = Math.min(...arr); // 전날까지 최솟값
    // 현재 점수가 명예의 전당에 올라갈 수 있는 경우
    if (minScore <= e) {
      arr.splice(arr.indexOf(minScore), 1, e);
      return Math.min(...arr);
    } else return minScore;
  });
}
