function solution(x) {
  return x % (x + "").split("").reduce((acc, cur) => Number(acc) + Number(cur))
    ? false
    : true;
}
