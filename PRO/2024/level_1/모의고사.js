function solution(answers) {
  // 수포자별 찍는 방식
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let cntArr = [0, 0, 0]; // 수포자별 문제 맞춘 개수
  let result = []; // 가장 높은 점수를 받은 사람 담을 배열

  answers.forEach((e, i) => {
    if (e === first[i % first.length]) cntArr[0]++;
    if (e === second[i % second.length]) cntArr[1]++;
    if (e === third[i % third.length]) cntArr[2]++;
  });

  const maxCnt = Math.max(...cntArr); // 가장 많이 맞춘 사람의 맞춘 문제 개수
  for (let i = 0; i < 3; i++) {
    if (cntArr[i] === maxCnt) result.push(i + 1);
  }

  return result;
}
