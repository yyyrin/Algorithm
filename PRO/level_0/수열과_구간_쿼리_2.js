// Math.min 사용한 풀이
function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const resArr = arr.slice(s, e + 1).filter((e) => e > k);

    return resArr.length ? Math.min(...resArr) : -1;
  });
}

// sort 사용한 풀이
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((e) => e > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
