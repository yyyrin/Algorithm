function solution(priorities, location) {
  let order = 0; // 실행 순서
  let maxValue = Math.max(...priorities);

  while (true) {
    const now = priorities.shift(); // 현재 프로세스

    // 현재 프로세스가 우선순위가 가장 높은 경우
    if (now === maxValue) {
      order++;
      // 현재 프로세스가 구하고자 하는 프로세스인 경우
      if (location === 0) return order;
      // 우선순위 최댓값 갱신
      maxValue = Math.max(...priorities);
    }
    // 현재 프로세스보다 우선순위가 더 높은 프로세스가 있는 경우
    else {
      priorities.push(now);
    }

    // 배열을 순회하면서 location의 값도 갱신
    location = location === 0 ? priorities.length - 1 : location - 1;
  }
}
