function solution(arr, idx) {
  return arr.findIndex((e, i) => {
    return e === 1 && i >= idx;
  });
}
