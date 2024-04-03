function solution(arr) {
  arr.sort((a, b) => a - b);
  let result = arr.pop();
  let num = 1;

  // 가장 큰 수에 곱하는 값을 1씩 증가시키면서 최소공배수 찾기
  while (true) {
    if (arr.every((e) => (result * num) % e === 0)) {
      return result * num;
    }
    num++;
  }
}
