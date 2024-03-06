function solution(survey, choices) {
  const category = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let res = "";

  survey.forEach((question, idx) => {
    const [disagree, agree] = question.split("");

    if (choices[idx] < 4) category[disagree] += Math.abs(4 - choices[idx]);
    else if (choices[idx] > 4) category[agree] += Math.abs(4 - choices[idx]);
  });

  category["R"] >= category["T"] ? (res += "R") : (res += "T");
  category["C"] >= category["F"] ? (res += "C") : (res += "F");
  category["J"] >= category["M"] ? (res += "J") : (res += "M");
  category["A"] >= category["N"] ? (res += "A") : (res += "N");

  return res;
}
