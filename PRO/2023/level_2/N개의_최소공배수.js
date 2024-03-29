// 최소공배수 찾는 함수
function getLCM(n, m) {
  let lcm = 1;
  while (true) {
    if (lcm % n === 0 && lcm % m === 0) break;
    lcm += 1;
  }
  return lcm;
}

function solution(arr) {
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    ans = getLCM(ans, arr[i]);
  }
  return ans;
}
