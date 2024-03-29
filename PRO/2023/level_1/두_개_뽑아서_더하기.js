function solution(numbers) {
  let ans = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // ans에 두 수의 합이 없는 경우에 push하기
      if (!ans.includes(numbers[i] + numbers[j]))
        ans.push(numbers[i] + numbers[j]);
    }
  }

  return ans.sort((a, b) => a - b);
}
