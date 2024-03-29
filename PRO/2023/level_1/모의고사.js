function solution(answers) {
  let ans = [1, 2, 3];

  // 수포자별 찍는 방식
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 수포자별 문제 맞은 개수
  let f = 0;
  let s = 0;
  let t = 0;

  // 문제 맞았는지 count
  answers.map((e, idx) => {
    if (first[idx - first.length * Math.floor(idx / first.length)] === e) ++f;
    if (second[idx - second.length * Math.floor(idx / second.length)] === e)
      ++s;
    if (third[idx - third.length * Math.floor(idx / third.length)] === e) ++t;
  });

  // 가장 높은 점수 받은 사람인지 판별
  if (f !== Math.max(f, s, t)) ans.splice(0, 1);
  if (s !== Math.max(f, s, t)) ans.splice(ans.indexOf(2), 1);
  if (t !== Math.max(f, s, t)) ans.splice(ans.indexOf(3), 1);

  return ans;
}
