function solution(lines) {
  let ans = 0;
  let arr = new Array(200).fill(0); // 배열을 0으로 채우기
  // 선분이 지나가는 곳마다 +1 해주기(선분이 음수도 있으므로 +100 해주기)
  lines.forEach((e) => {
    for (let i = e[0]; i < e[1]; i++) {
      arr[i + 100] += 1;
    }
  });
  // 1보다 큰 수는 겹치는 부분이므로 count 해주기
  arr.forEach((e) => (e > 1 ? (ans += 1) : null));
  return ans;
}
