function solution(elements) {
  const result = new Set(); // 연속 부분 수열의 합 저장될 set
  const len = elements.length;

  // 부분 수열 시작 index
  for (let i = 0; i < len; i++) {
    let sum = 0;
    // 부분 수열 마지막 index
    for (let j = i; j < i + len; j++) {
      sum += elements[j % len];
      result.add(sum);
    }
  }

  return result.size;
}
