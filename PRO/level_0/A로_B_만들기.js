// 처음 작성한 코드
// 입출력 예시는 맞았지만 최종 합계가 56.5 / 100.0

function solution(before, after) {
  let arr = after.split("");
  for (let i = 0; i < before.length; i++) {
    let idx = after.indexOf(before[i]); // after에서 indexOf를 사용하니까 오류가 날 수밖에.
    let remove = arr.splice(idx, 1);
  }
  return arr.length === 0 ? 1 : 0;
}

// 테스트 통과한 코드

function solution(before, after) {
  let arr = after.split("");
  for (let i = 0; i < before.length; i++) {
    let idx = arr.indexOf(before[i]);
    if (idx === -1) {
      return 0;
    } else {
      arr.splice(idx, 1);
    }
  }
  return 1;
}

// 다른 풀이 (정말 간단하다..)
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}
