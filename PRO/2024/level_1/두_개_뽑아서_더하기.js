// 내 풀이
function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) result.push(sum);
    }
  }

  return result.sort((a, b) => a - b);
}

// 다른 풀이
function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  let res = [...new Set(result)];

  return res.sort((a, b) => a - b);
}
