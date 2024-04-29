function solution(survey, choices) {
  const category = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let result = "";

  survey.forEach((e, idx) => {
    const [disagree, agree] = e.split("");

    if (choices[idx] < 4)
      category[disagree] += 4 - choices[idx]; // 비동의 선택한 경우
    else if (choices[idx] > 4) category[agree] += choices[idx] - 4; // 동의 선택한 경우
  });

  for (let [i, j] of [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ]) {
    if (category[i] < category[j]) result += j;
    else result += i;
  }

  return result;
}
