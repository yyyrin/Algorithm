function solution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0; // 약수 개수
    // 약수는 쌍으로 존재하므로 중간값까지 범위 설정
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) cnt++;
        else cnt += 2;
      }

      if (cnt > limit) {
        cnt = power;
        break;
      }
    }

    result += cnt;
  }
  return result;
}
