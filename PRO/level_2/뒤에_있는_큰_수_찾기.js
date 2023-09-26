function solution(numbers) {
  let result = new Array(numbers.length).fill(-1);

  let stack = [];
  // 현재 값을 기준으로
  // 앞에 있는 값 중에서 값이 정해지지 않고, 현재 값보다 작은 값 바꾸기
  for (let i = 0; i < numbers.length; i++) {
    // 값이 변경되지 않은 인덱스가 있고, 현재 값보다 인덱스에 해당하는 값이 작은 경우
    while (stack && numbers[stack[stack.length - 1]] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }

    // (값이 변경되지 않은) 현재 index push
    stack.push(i);
  }

  return result;
}
