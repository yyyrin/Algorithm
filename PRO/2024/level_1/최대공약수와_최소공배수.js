function solution(n, m) {
  const [minNum, maxNum] = [Math.min(n, m), Math.max(n, m)];
  let result = [];

  // 최대공약수 찾기
  for (let i = minNum; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      result.push(i);
      break;
    }
  }

  // 최소공배수 찾기
  for (let i = 1; i <= minNum; i++) {
    const num = i * maxNum;
    if (num % n === 0 && num % m === 0) {
      result.push(num);
      break;
    }
  }

  return result;
}
