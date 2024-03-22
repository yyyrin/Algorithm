function solution(arr, query) {
  query.forEach((e, i) => {
    arr = i % 2 ? arr.slice(e) : arr.slice(0, e + 1);
  });

  return arr;
}
