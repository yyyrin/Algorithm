function solution(k, score) {
  let res = []; // 최하위 점수
  let score_arr = []; // 명예의 전당

  score.map((e) => {
    // 명예의 전당에 k개 이하의 점수가 있다면 명예의 전당에 push하기
    if (score_arr.length < k) score_arr.push(e);
    // 명예의 전당의 최하위 점수보다 element가 크다면
    else if (e > Math.min(...score_arr)) {
      // 명예의 전당에서 최하위 점수의 index 값을 찾아서 splice를 이용하여 해당 위치에 element 넣기
      score_arr.splice(score_arr.indexOf(Math.min(...score_arr)), 1, e);
    }

    // 명예의 전당 최하위 점수를 최하위 점수 배열에 넣기
    res.push(Math.min(...score_arr));
  });

  return res;
}
