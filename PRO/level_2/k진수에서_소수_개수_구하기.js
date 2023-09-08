// 통과한 코드 //
// 소수 구하는 함수
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let cnt = 0;
  let numbers = n
    .toString(k)
    .split("0")
    .filter((e) => e > 1);

  for (let i = 0; i < numbers.length; i++) {
    cnt += isPrime(numbers[i]);
  }
  return cnt;
}

// 런타임 에러 발생한 코드 //
function solution(n, k) {
  let numbers = n
    .toString(k)
    .split("0")
    .filter((e) => e > 1);
  let max_num = Math.max(...numbers);

  // 소수 구하기(에라토스테네스의 체 사용)
  let arr = Array(max_num + 1).fill(true);

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return numbers.filter((e) => arr[Number(e)] === true).length;
}
