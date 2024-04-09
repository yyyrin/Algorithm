// 소수 판별 함수 사용 -> 효율성 테스트에서 시간초과 발생
function check(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let result = 1;
  for (let i = 3; i <= n; i++) {
    if (check(i)) result++;
  }
  return result;
}

// 에라토스테네스의 체 사용 -> 효율성 테스트도 통과
function solution(n) {
  // index 0이 존재하므로 배열의 길이는 n+1
  let arr = Array(n + 1).fill(true);

  // 0과 1은 소수가 아니므로 false로 설정
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= n; i++) {
    // 제곱근까지 반복
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        // j는 배수이므로 소수가 아님
        arr[j] = false;
      }
    }
  }

  return arr.filter((e) => e).length;
}
