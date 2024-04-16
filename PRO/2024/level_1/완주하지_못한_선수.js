// 효율성 테스트에서 시간초과 발생
function solution(participant, completion) {
  for (let name of participant) {
    if (!completion.includes(name) || completion.length < 1) return name;

    // 완주한 선수를 completion 배열에서 삭제
    completion.splice(completion.indexOf(name), 1);
  }
}

// 효율성 테스트 통과한 코드(통과하긴 했지만 효율성 좋진 않음)
function solution(participant, completion) {
  // 각 배열을 정렬하고, 동일한 인덱스 값이 같지 않는 경우 찾기
  participant = participant.sort();
  completion = completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// 객체 활용한 풀이(효율성 개선)
function solution(participant, completion) {
  let obj = {};

  participant.forEach((e) => {
    obj[e] = (obj[e] || 0) + 1;
  });

  completion.forEach((e) => {
    if (obj[e] === 1) delete obj[e];
    else obj[e]--;
  });

  return Object.keys(obj)[0];
}
