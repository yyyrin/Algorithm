// 소수인지 체크하는 함수
function check(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  return n
    .toString(k)
    .split("0")
    .filter((e) => Number(e) >= 2 && check(Number(e))).length;
}
