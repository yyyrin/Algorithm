function solution(numbers, target) {
  let cnt = 0;

  function dfs(idx, acc) {
    if (idx === numbers.length) {
      if (acc === target) cnt++;
      return;
    }

    dfs(idx + 1, acc + numbers[idx]);
    dfs(idx + 1, acc - numbers[idx]);
  }

  dfs(0, 0);

  return cnt;
}
