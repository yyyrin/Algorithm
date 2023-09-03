function solution(numbers, target) {
  let cnt = 0;

  function bfs(idx, acc) {
    if (idx === numbers.length) {
      if (acc === target) cnt++;
      return;
    }

    bfs(idx + 1, acc + numbers[idx]);
    bfs(idx + 1, acc - numbers[idx]);
  }

  bfs(0, 0);

  return cnt;
}
