// 최대 우선순위를 개신하면서 location을 0으로 만들기
function solution(priorities, location) {
  let cnt = 0; // 처리된 프로세스 수
  let max_priorities = Math.max(...priorities); // 최대 우선순위

  while (true) {
    const current_process = priorities.shift(); // 대기 중인 프로세스를 큐에서 꺼내기

    if (current_process === max_priorities) {
      cnt++; // 프로세스 실행
      if (location === 0) return cnt; // 찾고자 하는 프로세스일 경우 결과 반환
      max_priorities = Math.max(...priorities); // 최대 우선순위 갱신
    } else {
      priorities.push(current_process); // 큐에 다시 넣기
    }

    location = location === 0 ? priorities.length - 1 : location - 1; // 위치 조정
  }
}
