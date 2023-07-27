// 에라토스테네스의 체 사용 //

function solution(n) {
  // index 0이 존재하므로 배열을 n+1로 만들기
  let arr = Array(n + 1).fill(true);

  // 배열의 index 0과 1은 소수가 아니므로 false로 만들기
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= n; i++) {
    // 제곱근까지 반복
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        // 반복문을 i*i부터 시작하는 것은 그 이전의 값은 j 이전의 수에서 이미 확인했기 때문
        arr[j] = false; // 배수 이므로 소수가 아닌 것으로 만듦
      }
    }
  }
  // filter로 arr 중 true인 것만 개수 구하기
  return arr.filter((el) => el).length;
}

// 시간초과 발생 코드 //

// 소수 찾는 함수
function isPrime(num) {
  if (num === 2) return true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let ans = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) ++ans;
  }

  return ans;
}
