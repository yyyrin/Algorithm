function solution(arr, n) {
  if (arr.length % 2) {
    return arr.map((e, i) => {
      return i % 2 ? e : e + n;
    });
  } else {
    return arr.map((e, i) => {
      return i % 2 ? e + n : e;
    });
  }
}
