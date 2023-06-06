function solution(array, n) {
  let arr = [];
  let min = Math.min(...array.map((e) => Math.abs(n - e)));
  let idx = array.map((e) => Math.abs(n - e)).indexOf(min);
  while (idx != -1) {
    arr.push(array[idx]);
    idx = array.map((e) => Math.abs(n - e)).indexOf(min, idx + 1);
  }
  return Math.min(...arr);
}
