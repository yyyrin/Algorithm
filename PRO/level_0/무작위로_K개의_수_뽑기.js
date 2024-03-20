// set을 사용하지 않고 반복문으로 필터링한 풀이
function solution(arr, k) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.length === k) return result;

    const nowVal = arr[i];
    if (!result.includes(nowVal)) result.push(nowVal);
  }

  return [...result, ...new Array(k - result.length).fill(-1)];
}

// set을 사용한 풀이
function solution(arr, k) {
  const result = new Set(arr);

  return result.size < k
    ? [...result, ...new Array(k - result.size).fill(-1)]
    : [...result].slice(0, k);
}
