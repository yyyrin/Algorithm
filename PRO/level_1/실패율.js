function solution(N, stages) {
  let res = []; // 실패율 높은 스테이지부터 내림차순으로 스테이지 번호 담을 배열
  let fail_obj = {}; // 스테이지 번호: 실패율
  let stage_people = stages.length; // 스테이지에 도달한 플레이어 수(실패율 분모)

  for (let i = 1; i <= N; i++) {
    let not_clear = stages.filter((e) => e === i).length; // 아직 클리어하지 못한 플레이어의 수(실패율 분자)
    fail_obj[i] = not_clear / stage_people; // 실패율
    stage_people -= not_clear; // 실패율 분모 수정
  }

  Object.entries(fail_obj) // 객체 -> 배열로 [key, value]
    .sort((a, b) => b[1] - a[1]) // value 기준으로 오름차순 정렬
    .map((e) => res.push(Number(e[0]))); // key를 숫자로 바꿔서 res에 추가

  return res;
}
