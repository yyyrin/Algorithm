function solution(strArr) {
  return strArr.map((e, i) => {
    if (i % 2 === 0) return e.toLowerCase();
    else return e.toUpperCase();
  });
}
