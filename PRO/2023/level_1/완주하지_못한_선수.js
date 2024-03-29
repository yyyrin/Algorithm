function solution(participant, completion) {
  let obj = {};

  // 참가자 이름 : 사람 수
  participant.map((e) => {
    obj[e] ? (obj[e] += 1) : (obj[e] = 1);
  });

  completion.map((e) => {
    // 사람 수 1명이면 해당하는 참가자 이름 지우기
    if (obj[e] === 1) delete obj[e];
    // 아니라면 사람 수 1씩 줄이기
    else obj[e] -= 1;
  });

  // completion의 길이가 participant의 길이보다 1 작으므로
  // obj 객체에 남아있는 값이 완주하지 못한 선수
  return Object.keys(obj)[0];
}

// 효율성 통과하지 못한 코드
// function solution(participant, completion) {
//   completion.map((e) => {
//     return participant.splice(participant.indexOf(e), 1);
//   });
//   return participant[0];
// }
